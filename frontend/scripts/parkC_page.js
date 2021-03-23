const carParkC_Data = db.collection("carParkData").doc("exampleCarPark(C)");

const Cfree_spaces = document.getElementById("free");
const Ctaken_spaces = document.getElementById("taken");
const Ctotal_spaces = document.getElementById("total");
const Clocation = document.getElementById("location");

// var user = localStorage.getItem("currentUser");
// var user = "test@gmail.com";

carParkC_Data.get().then((doc) => {
    if (doc.exists) {
        Ctaken_spaces.innerText = doc.data().taken_spaces;
        Ctotal_spaces.innerText = doc.data().total_spaces;
        Cfree_spaces.innerText = (doc.data().total_spaces- doc.data().taken_spaces);
        Clocation.innerText = "Car Park " + doc.data().name;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
.catch((error) => {
		console.log("Error getting document:", error);
});


//car park proces constants
const Chalf = document.getElementById("half");
const C1 = document.getElementById("one");
const C2 = document.getElementById("two");
const C3 = document.getElementById("three")
const C4 = document.getElementById("four");
const C5 = document.getElementById("five+");

const carParkB_Prices = db.collection("prices").doc("SeP18vWk7KXIJpFAclZF");
carParkB_Prices.get().then((doc) => {
    if (doc.exists) {
        Chalf.innerText = doc.data().half;
        C1.innerText = doc.data().one;
        C2.innerText = doc.data().two;
        C3.innerText = doc.data().three;
        C4.innerText = doc.data().four;
        C5.innerText = doc.data().five;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
.catch((error) => {
		console.log("Error getting document:", error);
})