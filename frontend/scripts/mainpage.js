const db = firebase.firestore();
var listener;
//car park proces constants
const Ahalf = document.getElementById("half");
const A1 = document.getElementById("one");
const A2 = document.getElementById("two");
const A3 = document.getElementById("three");
const A4 = document.getElementById("four");
const A5 = document.getElementById("five+");

const free_spaces = document.getElementById("free");
const taken_spaces = document.getElementById("taken");
const total_spaces = document.getElementById("total");
const location1 = document.getElementById("location");
const park = document.getElementById("Park");

aSelected();

function setListener(carPark) {
	if (listener) {
		listener();
	}
	listener = db
		.collection("prices")
		.doc(carPark)
		.onSnapshot((doc) => {
			console.log("fff");
			console.log(listener);
			viewPrices(doc);
		});
}

function aSelected() {
	document.getElementById("carParkA").className = "dropdown-item active";
	document.getElementById("carParkB").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	sessionStorage.setItem("carPark", "A");
	readCarParkData("exampleCarPark(A)");
	setListener("exampleCarPark(A)");
}
function bSelected() {
	document.getElementById("carParkB").className = "dropdown-item active";
	document.getElementById("carParkA").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	sessionStorage.setItem("carPark", "B");
	readCarParkData("exampleCarPark(B)");
	setListener("exampleCarPark(B)");
}
function cSelected() {
	document.getElementById("carParkC").className = "dropdown-item active";
	document.getElementById("carParkB").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	sessionStorage.setItem("carPark", "C");
	readCarParkData("exampleCarPark(C)");
	setListener("exampleCarPark(C)");
}

function readCarParkData(carPark) {
	const pathCarPark = db.collection("carParkData").doc(carPark);
	pathCarPark
		.get()
		.then((doc) => {
			if (doc.exists) {
				taken_spaces.innerText = doc.data().taken_spaces;
				total_spaces.innerText = doc.data().total_spaces;
				free_spaces.innerText =
					doc.data().total_spaces - doc.data().taken_spaces;
				location1.innerText = "Car Park " + doc.data().name;
				park.innerText = "Park at " + doc.data().name;

				readPrices(carPark);
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		})
		.catch((error) => {
			console.log("Error getting document:", error);
		});
}

function readPrices(carPark) {
	const pathPrices = db.collection("prices").doc(carPark);
	pathPrices
		.get()
		.then((doc) => {
			if (doc.exists) {
				viewPrices(doc);
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		})
		.catch((error) => {
			console.log("Error getting document:", error);
		});
}

function viewPrices(doc) {
	Ahalf.innerText = "£" + doc.data().half;
	A1.innerText = "£" + doc.data().one;
	A2.innerText = "£" + doc.data().two;
	A3.innerText = "£" + doc.data().three;
	A4.innerText = "£" + doc.data().four;
	A5.innerText = "£" + doc.data().five;
}

// let data = {
// 	half: 2.99,
// 	one: 5.99,
// 	two: 7.99,
// 	three: 9.99,
// 	four: 11.99,
// 	five: 13.99,
// };
// db.collection("prices").doc("exampleCarPark(A)").set(data);
// db.collection("prices").doc("exampleCarPark(B)").set(data);
// db.collection("prices").doc("exampleCarPark(C)").set(data);
