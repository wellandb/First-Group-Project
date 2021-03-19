const db = firebase.firestore();
// var user = localStorage.getItem("currentUser");
var user = "test@gmail.com";
const userTicket = db.collection("userTicket").doc(user);

const cost = document.getElementById("cost");
const duration = document.getElementById("duration");
const location2 = document.getElementById("location2");
userTicket.get().then((doc) => {
    if (doc.exists) {
        let o = doc.data();
        let key = Object.keys(o)[0];
        cost.innerHTML = o[key].cost;
        duration.innerHTML = o[key].duration;
        location2.innerHTML = o[key].location;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
.catch((error) => {
    console.log("Error getting document:", error);
});

