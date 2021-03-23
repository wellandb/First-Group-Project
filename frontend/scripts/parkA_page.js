const db = firebase.firestore();
const carParkA_Data = db.collection("carParkData").doc("exampleCarPark(A)");

const Afree_spaces = document.getElementById("free");
const Ataken_spaces = document.getElementById("taken");
const Atotal_spaces = document.getElementById("total");
const Alocation = document.getElementById("location");

// var user = localStorage.getItem("currentUser");
// var user = "test@gmail.com";

carParkA_Data
	.get()
	.then((doc) => {
		if (doc.exists) {
			Ataken_spaces.innerText = doc.data().taken_spaces;
			Atotal_spaces.innerText = doc.data().total_spaces;
			Afree_spaces.innerText =
				doc.data().total_spaces - doc.data().taken_spaces;
			Alocation.innerText = "Car Park " + doc.data().name;
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
