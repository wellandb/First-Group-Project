const date = document.getElementById("date");
const park_location = document.getElementById("park-location");
const cost = document.getElementById("cost");
const duration = document.getElementById("duration");
const start = document.getElementById("start");
const end = document.getElementById("end");

// var user = localStorage.getItem("currentUser");

var user = sessionStorage.getItem("currentUser");

var db = firebase.firestore();

// var docRefTicket = db.collection("userTicket").doc(user);
// docRefTicket
// 	.get()
// 	.then((doc) => {
// 		if (doc.exists) {
// 			let o = doc.data();
// 			let key = Object.keys(o)[0];
// 			date.innerHTML = Object.keys(o)[0];
// 			cost.innerHTML = o[key].cost;
// 			duration.innerHTML = o[key].duration;
// 			end.innerHTML = o[key].end;
// 			park_location.innerHTML = o[key].location;
// 			start.innerHTML = o[key].start;
// 		} else {
// 			// doc.data() will be undefined in this case
// 			console.log("No such document!");
// 		}
// 	})
// 	.catch((error) => {
// 		console.log("Error getting document:", error);
// 	});

firebase.auth().onAuthStateChanged(function (u) {
	if (u) {
		uid = u.uid;
		var docRefUser = db.collection("userData").doc(uid);

		docRefUser
			.get()
			.then((doc) => {
				if (doc.exists) {
					date.innerHTML = doc.data().time;
					cost.innerHTML = "£" + doc.data().cost;
					duration.innerHTML = doc.data().duration;
					end.innerHTML = doc.data().end;
					park_location.innerHTML = doc.data().location;
					start.innerHTML = doc.data().start;
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
