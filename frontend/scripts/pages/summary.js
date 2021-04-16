const date = document.getElementById("date");
const park_location = document.getElementById("park-location");
const cost = document.getElementById("cost");
const duration = document.getElementById("duration");
const start = document.getElementById("start");
const end = document.getElementById("end");

// var user = localStorage.getItem("currentUser");

var user = sessionStorage.getItem("currentUser");
var listenerTicket;

firebase.auth().onAuthStateChanged(function (u) {
	if (u) {
		uid = u.uid;
		var docRefUser = db.collection("userData").doc(uid);

		docRefUser
			.get()
			.then((doc) => {
				if (doc.exists) {
					if (doc.data().date != "" && doc.data().date != undefined) {
						viewTicket(doc.data());
					}
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});

		listenerTicket = db
			.collection("userData")
			.doc(uid)
			.onSnapshot((doc) => {
				if (doc.data().date != "" && doc.data().date != undefined) {
					viewTicket(doc.data());
				}
			});
	}
});

function viewTicket(d) {
	date.innerHTML = d.date;
	cost.innerHTML = "£" + d.cost;
	duration.innerHTML = d.duration;
	end.innerHTML = d.end;
	location.innerHTML = d.location;
	start.innerHTML = d.start;
}

window.onbeforeunload = () => {
	listenerTicket();
};
