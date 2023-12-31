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
			row: targetRow,
			col: targetCol,
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
		const uid = MainData.uid;
		const userData = db.collection("userData").doc(uid);
		var d = new Date();
		var n = d.toLocaleTimeString();
		n = n.slice(0, -3);
		userData
			.update({
				start: n,
				cost: 0,
				date: getDate(),
			})
			.then(() => {})
			.catch((error) => {
				// The document probably doesn't exist.
				console.error("Error updating document: ", error);
			});
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
		difference();
	}
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

function difference() {
	var d = new Date();
	var n = d.toLocaleTimeString();
	n = n.slice(0, -3);

	db.collection("userData")
		.doc(MainData.uid)
		.get()
		.then((doc) => {
			let start = doc.data().start;
			let startH = start.slice(0, 2);
			let startM = start.slice(3, 5);

			let currentH = n.slice(0, 2);
			let currentM = n.slice(3, 5);

			let hourDiff = currentH - startH;
			let minDiff = currentH - startH;

			var date1 = new Date(null, null, null, currentH, currentM);
			var date2 = new Date(null, null, null, startH, startM);
			let mins = (date1 - date2) / 1000 / 60;

			let durationH = Math.ceil(mins / 60);
			let durationM = (mins / 60 - Math.floor(mins / 60)) * 60;

			let dir = "exampleCarPark(A)";
			const uid = MainData.uid;
			const userData = db.collection("userData").doc(uid);

			if (durationH <= 0.5) {
				db.collection("prices")
					.doc(dir)
					.get()
					.then((doc) => {
						let cost = doc.data().half;
						userData.update({
							cost: cost * durationH,
							end: n,
						});
						window.location = "../html/summary.html";
					});
			} else if (d <= 1) {
				db.collection("prices")
					.doc(dir)
					.get()
					.then((doc) => {
						let cost = doc.data().one;
						userData.update({
							cost: cost * durationH,
							end: n,
						});
						window.location = "../html/summary.html";
					});
			} else if (d <= 2) {
				db.collection("prices")
					.doc(dir)
					.get()
					.then((doc) => {
						let cost = doc.data().two;
						userData.update({
							cost: cost * durationH,
							end: n,
						});
						window.location = "../html/summary.html";
					});
			} else if (d <= 3) {
				db.collection("prices")
					.doc(dir)
					.get()
					.then((doc) => {
						let cost = doc.data().three;
						userData.update({
							cost: cost * durationH,
							end: n,
						});
						window.location = "../html/summary.html";
					});
			} else if (d <= 4) {
				db.collection("prices")
					.doc(dir)
					.get()
					.then((doc) => {
						let cost = doc.data().four;
						userData.update({
							cost: cost * durationH,
							end: n,
						});
						window.location = "../html/summary.html";
					});
			} else {
				db.collection("prices")
					.doc(dir)
					.get()
					.then((doc) => {
						let cost = doc.data().five;
						userData.update({
							cost: cost * durationH,
							end: n,
						});
						window.location = "../html/summary.html";
					});
			}
		});
}
