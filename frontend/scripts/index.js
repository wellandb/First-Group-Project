const db = firebase.firestore();
var carPark;
carPark = "exampleCarPark(A)";
readData();

function aSelected() {
  document.getElementById("carParkA").className = "dropdown-item active"; 
  document.getElementById("carParkB").className = "dropdown-item"; 
  document.getElementById("carParkC").className = "dropdown-item"; 
  carPark = "exampleCarPark(A)";
  readData();
  
};
function bSelected() {
  document.getElementById("carParkB").className = "dropdown-item active"; 
  document.getElementById("carParkA").className = "dropdown-item"; 
  document.getElementById("carParkC").className = "dropdown-item";
  carPark = "exampleCarPark(B)";
  readData();
};
function cSelected() {
  document.getElementById("carParkC").className = "dropdown-item active"; 
  document.getElementById("carParkB").className = "dropdown-item"; 
  document.getElementById("carParkC").className = "dropdown-item";
  carPark = "exampleCarPark(C)";  
  readData();
  
};

function login(){
	if (carPark == 'exampleCarPark(A)'){
		sessionStorage.setItem('carPark', 'A');
	}else if (carPark == 'exampleCarPark(B)'){
		sessionStorage.setItem('carPark', 'B');
	}else{
		sessionStorage.setItem('carPark', 'C');
	}
}


function readData(){

const carParkA_Data = db.collection("carParkData").doc(carPark);

const free_spaces = document.getElementById("free");
const taken_spaces = document.getElementById("taken");
const total_spaces = document.getElementById("total");
const location1 = document.getElementById("location");
const park = document.getElementById("Park");

// var user = localStorage.getItem("currentUser");
// var user = "test@gmail.com";

carParkA_Data
	.get()
	.then((doc) => {
		if (doc.exists) {
			taken_spaces.innerText = doc.data().taken_spaces;
			total_spaces.innerText = doc.data().total_spaces;
			free_spaces.innerText =
				(doc.data().total_spaces - doc.data().taken_spaces);
			location1.innerText = "Car Park " + doc.data().name;
			park.innerText = "Park at " + doc.data().name;
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	})
	.catch((error) => {
		console.log("Error getting document:", error);
	});

//car park proces constants
const Ahalf = document.getElementById("half");
const A1 = document.getElementById("one");
const A2 = document.getElementById("two");
const A3 = document.getElementById("three");
const A4 = document.getElementById("four");
const A5 = document.getElementById("five+");

const carParkA_Prices = db.collection("prices").doc("c3mkCBrcCtxyfv6LFOBI");
carParkA_Prices
	.get()
	.then((doc) => {
		if (doc.exists) {
			Ahalf.innerText = doc.data().half;
			A1.innerText = doc.data().one;
			A2.innerText = doc.data().two;
			A3.innerText = doc.data().three;
			A4.innerText = doc.data().four;
			A5.innerText = doc.data().five;
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	})
	.catch((error) => {
		console.log("Error getting document:", error);
	});
}
