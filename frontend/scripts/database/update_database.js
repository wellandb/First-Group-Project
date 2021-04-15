"use strict";

function updateTakenSpaces(takenSpaces) {
    const carParkAdata = db.collection("carParkData").doc("exampleCarPark(A)");
	carParkAdata
	.update({
		"taken_spaces": String(takenSpaces),
	})
	.then(() => {})
	.catch((error) => {
		// The document probably doesn't exist.
		console.error("Error updating document: ", error);
	});
}

function updateTargetSpot(targetRow, targetCol) {
	let uid = sessionStorage.getItem("currentUser");
	let targetR_string = (targetRow + 1).toString();
	let targetC_string = String.fromCharCode(targetCol + 65);
    const userData = db.collection("userData").doc(uid);  ///check this
    const newSpot = targetC_string + targetR_string;
	userData
    .update({
        spot: newSpot,
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    const spot = document.getElementById("spot");
	userData
    .get()
    .then((doc) => {
        if (doc.exists) {
            spot.innerHTML = newSpot;
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });
}

function updateSpace(targetRow, targetCol, isDisabled, gridEncoding, isFree) {
	const carParkA = db.collection("carParkSpaces").doc("carParkA"); ///check this
	let targetCol_letter = String.fromCharCode(targetCol + 'A'.charCodeAt());
    let targetRow_string = String(targetRow + 1);
    let index = targetCol_letter + '.' + targetRow_string;
	carParkA
    .update({
        [index]: {
               "symbol": getSymbol(isDisabled, gridEncoding, isFree),
            }
    }, {merge:true})
    .then(() => {})
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    const carParkAdata = db.collection("carParkData").doc("exampleCarPark(A)");
	carParkAdata
    .update({
        "taken_spaces" : (isFree ? firebase.firestore.FieldValue.increment(1) : firebase.firestore.FieldValue.increment(-1)), //FIX
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
function updateDB(type){
    var uid = sessionStorage.getItem("currentUser");
    const userData = db.collection("userData").doc(uid);
    let spot = "";
    userData
    .get()
    .then((doc) => {
        if (doc.exists) {
            spot = doc.data().spot;

            let targetRow = Number(spot[1]) - 1;
            let targetCol = spot.charCodeAt(0) - 'A'.charCodeAt();
            console.log(spot, targetRow, targetCol);

            if(type === 'Confirm'){
                updateSpace(targetRow, targetCol, data.isDisabled, data.gridEncoding, true);
                window.location = "drawA2.html";
            }else{
                updateSpace(targetRow, targetCol, data.isDisabled, data.gridEncoding, false);
                window.location="../html/summary.html";
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    })
    .catch((error) => {
        console.log("Error getting document:", error);
    });
    userData
    .update({
        "start": firebase.firestore.FieldValue.serverTimestamp(),
        "cost" : 500,
    })
    .then(() => {})
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

}