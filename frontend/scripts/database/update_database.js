"use strict";

function updateTakenSpaces(takenSpaces) {
	const carParkAdata = db.collection("carParkData").doc("exampleCarPark(A)");
	carParkAdata
		.update({
			taken_spaces: takenSpaces,
		})
		.then(() => {})
		.catch((error) => {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});
}

function updateTargetSpot(targetRow, targetCol) {
	const uid = MainData.uid;
	MainData.targetRow = targetRow;
	MainData.targetCol = targetCol;
	let targetR_string = (targetRow + 1).toString();
	let targetC_string = String.fromCharCode(targetCol + 65);
	const userData = db.collection("userData").doc(uid); ///check this
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

	document.getElementById("spot").innerHTML = newSpot;
}

function updateSpace(targetRow, targetCol, isDisabled, gridEncoding, isFree) {
	const carParkA = db.collection("carParkSpaces").doc("carParkA"); ///check this
	let targetCol_letter = String.fromCharCode(targetCol + "A".charCodeAt());
	let targetRow_string = String(targetRow + 1);
	let index = targetCol_letter + "." + targetRow_string;
	carParkA
		.update(
			{
				[index]: {
					symbol: getSymbol(isDisabled, gridEncoding, isFree),
				},
			},
			{ merge: true }
		)
		.then(() => {})
		.catch((error) => {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});

	const carParkAdata = db.collection("carParkData").doc("exampleCarPark(A)");
	carParkAdata
		.update({
			taken_spaces: isFree
				? firebase.firestore.FieldValue.increment(1)
				: firebase.firestore.FieldValue.increment(-1), //FIX
		})
		.then(() => {})
		.catch((error) => {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});

	function getSymbol(isDisabled, gridEncoding, isFree) {
		if (isFree) {
			return isDisabled
				? gridEncoding.takenDisabled
				: gridEncoding.takenNormal;
		}
		return isDisabled ? gridEncoding.freeDisabled : gridEncoding.freeNormal;
	}
}
function updateDB(type) {
	if (type === "confirm") {
		updateSpace(
			MainData.targetRow,
			MainData.targetCol,
			MainData.isDisabled,
			MainData.gridEncoding,
			true
		);
		window.location = "drawA2.html";
	} else {
		// "done"
		updateSpace(
			MainData.targetRow,
			MainData.targetCol,
			MainData.isDisabled,
			MainData.gridEncoding,
			false
		);
		window.location = "../html/summary.html";
	}
	const uid = MainData.uid;
	const userData = db.collection("userData").doc(uid);
	userData
		.update({
			start: firebase.firestore.FieldValue.serverTimestamp(),
			cost: 500,
			date: getDate(),
		})
		.then(() => {})
		.catch((error) => {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});
}

function getDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + "/" + dd + "/" + yyyy;
	var d = new Date();
	var n = d.toLocaleTimeString();
	n = n.slice(0, -3);

	return n + " | " + today;
}
