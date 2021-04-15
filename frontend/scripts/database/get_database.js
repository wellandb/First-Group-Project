
"use strict";

const MainData = {
	grid: [],
	rows: 0,
	cols: 0,
	isDisabled: false, 
	gridEncoding: {},
	targetRow: -1,
	targetCol: -1,
	uid: -1
};

function loadDataBaseInfo() {
	let updates = 0;
	const requiredUpdates = 3;

	getGridEncoding();
	getGridData();
	getIsDiabled();

	function update() {
		updates++;
		if(updates == requiredUpdates) {
			start(MainData);
		}
	}

	function getGridEncoding() {
		const gridEncodingDB = db.collection("gridEncoding").doc("gridEncodingDoc");
		gridEncodingDB
		.get()
		.then((doc) => {
			if (doc.exists) {
				MainData.gridEncoding = doc.data();
				update();
			} else {
				// doc.data() will be undefined in this case
				console.warn("No such document!");
			}
		})
		.catch((error) => {
			console.error("Error getting document:", error);
		});
	}
	
	function getGridData() {
		const carParkA = db.collection("carParkSpaces").doc("carParkA");

		carParkA
		.get()
		.then((doc) => {
			let grid = [];
			let AcolList = [], Acol = [];
	
			for (let i = 0; i < 6; i++) {
				AcolList.push([]);
			}
	
			if (doc.exists) {
				console.warn("Does exist")
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

				MainData.grid = grid;
				MainData.rows = grid.length;
				MainData.cols = grid[0].length;
				update();
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		})
		.catch((error) => {
			console.log("Error getting document:", error);
		});
	}
	
	function getIsDiabled() {
		let uid = sessionStorage.getItem("currentUser");
		MainData.uid = uid;
		const userData = db.collection("userData").doc(uid);
		userData.get().then((doc) => {
			if (doc.exists) {
				MainData.isDisabled = doc.data().disabled;
				update();
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		})
		.catch((error) => {
			console.log("Error getting document:", error);
		});
	}
	
}