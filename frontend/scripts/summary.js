const date = document.getElementById("date");
const park_location = document.getElementById("park-location");
const cost = document.getElementById("cost");
const duration = document.getElementById("duration");
const start = document.getElementById("start");
const end = document.getElementById("end");

// var user = localStorage.getItem("currentUser");

var user = sessionStorage.getItem("currentUser");

var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function (u) {
	if (u) {
		uid = u.uid;
		var docRefUser = db.collection("userData").doc(uid);

		docRefUser
			.get()
			.then((doc) => {
				if (doc.exists) {
					if (doc.data().time != undefined) {
						date.innerHTML = doc.data().time;
						cost.innerHTML = "£" + doc.data().cost;
						duration.innerHTML = doc.data().duration;
						end.innerHTML = doc.data().end;
						location.innerHTML = doc.data().location;
						start.innerHTML = doc.data().start;
					}
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});
	}
});
