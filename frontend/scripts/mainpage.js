const db = firebase.firestore();
var listenerPrices;
var listenerCarPark;
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

function setListener(collection, carPark) {
	if (collection == "prices") {
		if (listenerPrices) {
			listenerCarPark();
		}
		listenerPrices = db
			.collection(collection)
			.doc(carPark)
			.onSnapshot((doc) => {
				viewPrices(doc);
			});
	} else if (collection == "carParkData") {
		if (listenerCarPark) {
			listenerCarPark();
		}
		listenerCarPark = db
			.collection(collection)
			.doc(carPark)
			.onSnapshot((doc) => {
				viewCarPark(doc);
			});
	}
}

function aSelected() {
	document.getElementById("carParkA").className = "dropdown-item active";
	document.getElementById("carParkB").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	sessionStorage.setItem("carPark", "A");
	// readCarParkData("exampleCarPark(A)");
	setListener("prices", "exampleCarPark(A)");
	setListener("carParkData", "exampleCarPark(A)");
}
function bSelected() {
	document.getElementById("carParkB").className = "dropdown-item active";
	document.getElementById("carParkA").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	sessionStorage.setItem("carPark", "B");
	// readCarParkData("exampleCarPark(B)");
	setListener("prices", "exampleCarPark(B)");
	setListener("carParkData", "exampleCarPark(B)");
}
function cSelected() {
	document.getElementById("carParkC").className = "dropdown-item active";
	document.getElementById("carParkB").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	sessionStorage.setItem("carPark", "C");
	// readCarParkData("exampleCarPark(C)");
	setListener("prices", "exampleCarPark(C)");
	setListener("carParkData", "exampleCarPark(C)");
}

function readCarParkData(carPark) {
	const pathCarPark = db.collection("carParkData").doc(carPark);
	pathCarPark
		.get()
		.then((doc) => {
			if (doc.exists) {
				viewCarPark(doc);
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

function viewCarPark(doc) {
	taken_spaces.innerText = doc.data().taken_spaces;
	total_spaces.innerText = doc.data().total_spaces;
	free_spaces.innerText = doc.data().total_spaces - doc.data().taken_spaces;
	location1.innerText = doc.data().name;
	park.innerText = "Park at " + doc.data().name;

	if (doc.data().taken_spaces == doc.data().total_spaces) {
		fullCarPark();
	} else {
		park.style.backgroundColor = "#008000";
		park.disabled = false;
	}
}

function fullCarPark() {
	park.style.backgroundColor = "#b0b0b0";
	park.disabled = true;
}

function beginPark() {
	if (park.disabled) {
		alert("Car Park Full! Park Elsewhere!");
	} else {
		window.location = "login/login.html";
	}
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
