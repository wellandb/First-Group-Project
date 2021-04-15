"use strict";

const carParkA = db.collection("carParkSpaces").doc("carParkA");
const carParkAdata = db.collection("carParkData").doc("exampleCarPark(A)");
let gridEncoding;
const gridEncodingDB = db.collection("gridEncoding").doc("gridEncodingDoc");
gridEncodingDB
.get()
.then((doc) => {
	if (doc.exists) {
		gridEncoding = doc.data();
	} else {
		// doc.data() will be undefined in this case
		console.warn("No such document!");
	}
})
.catch((error) => {
	console.error("Error getting document:", error);
});


carParkA
.get()
.then((doc) => {
	let AcolList = [],
		Acol = [];
	let grid = [];

	for (let i = 0; i < 6; i++) {
		AcolList.push([]);
	}

	if (doc.exists) {
		const keys = ["A", "B", "C", "D", "E", "F"];
		for (let i = 0; i < 6; i++) {
			Acol[i] = doc.data()[keys[i]];
		}
		for (let i = 0; i < 16; i++) {
			for (let j = 0; j < 6; j++) {
				let key = Object.keys(Acol[j])[i];
				AcolList[j].push(Acol[j][key].symbol);
			}
		}
		for (let i = 0; i < 16; i++) {
			let Arow = [];
			for (let j = 0; j < 6; j++) {
				Arow.push(AcolList[j][i]);
			}

			let ArowString = Arow.join("").toString();

			grid.push(ArowString);
		}
	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}
    const rows = grid.length, cols = grid[0].length;
	let takenSpaces = countTakenSpaces(grid, gridEncoding, rows, cols);
	updateTakenSpaces(takenSpaces);
	//startDrawing(grid, gridEncoding, rows, cols); // add also start
	//randomData(grid, gridEncoding);
})
.catch((error) => {
	console.log("Error getting document:", error);
});

function countTakenSpaces(grid, gridEncoding, rows, cols) {
	let takenSpaces = 0;
	for(let i = 0; i < rows; i++) {
		for(let j = 0; j < cols; j++) {
			if(grid[i][j] == gridEncoding.takenNormal || grid[i][j] == gridEncoding.takenDisabled) {
				takenSpaces ++;
			}
		}
	}
	return takenSpaces;
}

function updateTakenSpaces(takenSpaces) {
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
