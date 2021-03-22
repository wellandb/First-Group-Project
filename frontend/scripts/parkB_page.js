const db = firebase.firestore();
const carParkA_Data = db.collection("carParkData").doc("exampleCarPark(A)");

const Bfree_spaces = document.getElementById("free");
const Btaken_spaces = document.getElementById("taken");
const Btotal_spaces = document.getElementById("total");
const Blocation = document.getElementById("location");

// var user = localStorage.getItem("currentUser");
// var user = "test@gmail.com";

carParkA_Data.get().then((doc) => {
    if (doc.exists) {
        Btaken_spaces.innerText = doc.data().taken_spaces;
        Btotal_spaces.innerText = doc.data().total_spaces;
        Bfree_spaces.innerText = (doc.data().total_spaces- doc.data().taken_spaces);
        // Blocation.innerText = "Car Park " + doc.data().name;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
.catch((error) => {
		console.log("Error getting document:", error);
});


//car park proces constants
const Bhalf = document.getElementById("half");
const B1 = document.getElementById("one");
const B2 = document.getElementById("two");
const B3 = document.getElementById("three")
const B4 = document.getElementById("four");
const B5 = document.getElementById("five+");

const carParkB_Prices = db.collection("prices").doc("7jKHOVgsYEndxNTZPjwA");
carParkB_Prices.get().then((doc) => {
    if (doc.exists) {
        Bhalf.innerText = doc.data().half;
        B1.innerText = doc.data().one;
        B2.innerText = doc.data().two;
        B3.innerText = doc.data().three;
        B4.innerText = doc.data().four;
        B5.innerText = doc.data().five;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
.catch((error) => {
		console.log("Error getting document:", error);
})