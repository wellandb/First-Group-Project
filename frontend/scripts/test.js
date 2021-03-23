const free_spaces = document.getElementById("free");
const taken_spaces = document.getElementById("taken");
const total_spaces = document.getElementById("total");
const location1 = document.getElementById("location");

// var user = localStorage.getItem("currentUser");
// var user = "test@gmail.com";
var db = firebase.firestore();

function aSelected() {
	document.getElementById("carParkA").className = "dropdown-item active";
	document.getElementById("carParkB").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	carPark = "exampleCarPark(A)";
	readData("exampleCarPark(A)");
}
function bSelected() {
	document.getElementById("carParkB").className = "dropdown-item active";
	document.getElementById("carParkA").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	carPark = "exampleCarPark(B)";
	readData("exampleCarPark(B)");
}
function cSelected() {
	document.getElementById("carParkC").className = "dropdown-item active";
	document.getElementById("carParkB").className = "dropdown-item";
	document.getElementById("carParkC").className = "dropdown-item";
	carPark = "exampleCarPark(C)";
	readData("exampleCarPark(C)");
}

function readData(carPark) {
	db.collection("carParkData")
		.doc(carPark)
		.get()
		.then((doc) => {
			if (doc.exists) {
				console.log(doc.data());
				taken_spaces.innerText = doc.data().taken_spaces;
				total_spaces.innerText = doc.data().total_spaces;
				free_spaces.innerText =
					doc.data().total_spaces - doc.data().taken_spaces;
				location1.innerText = "Car Park " + doc.data().name;
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		})
		.catch((error) => {
			console.log("Error getting document:", error);
		});
}
