"use strict";

function updateTargetSpot(targetRow, targetCol) {
	let uid = sessionStorage.getItem("currentUser");
	let targetR_string = targetRow.toString();
	let targetC_string = String.fromCharCode(targetCol + 65);
    const userData = db.collection("userData").doc(uid);  ///check this
	userData
    .update({
        spot: targetC_string + targetR_string,
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    updateTargetSpotHTML(doc.data().spot);
}

function updateTargetSpotHTML(newSpot) {
    const spot = document.getElementById("spot");
	userData
    .get()
    .then((doc) => {
        if (doc.exists) {
            spot.innerText = newSpot;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });
}

function updateSpace(targetCol, isDisabled, gridEncoding, isFree) {
	const carParkA = db.collection("carParkSpaces").doc("carParkA"); ///check this
	targetCol_letter = String.fromCharCode(targetCol + 65);
	carParkA
    .update({
        targetCol_letter: {
            targetRow: {
                symbol: getSymbol(isDisabled, gridEncoding, isFree),
            },
        },
    })
    .then(() => {})
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
	const carParkA = db.collection("carParkData").doc("exampleCarPark(A)"); ///check this
	carParkA
    .update({
        taken_spaces = taken_spaces + (isFree ? 1 : -1), //FIX
    })
    .then(() => {})
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    function getSymbol(isDisabled, gridEncoding, isFree) {
        if(isFree) {
            return isDisabled ? gridEncoding.takenDisabled : gridEncoding.takenNormal;
        }
        return isDisabled ? gridEncoding.freeDisabled : gridEncoding.freeNormal;
    }
}
