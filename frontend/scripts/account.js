const userName = document.getElementById("txt-name");
const email = document.getElementById("txt-email");
const disabled = document.getElementById("txt-disabled");

const date = document.getElementById("txt-date");
const cost = document.getElementById("txt-cost");
const duration = document.getElementById("txt-duration");
const end = document.getElementById("txt-end");
const location = document.getElementById("txt-location");
const start = document.getElementById("txt-start");

var db = firebase.firestore();
var user;

sessionStorage.removeItem("next");

disabled.addEventListener("change", function (e) {
	let d = false;

	if (disabled.value == "1") {
		d = true;
	} else {
		d = false;
	}

	db.collection("userData")
		.doc(sessionStorage.getItem("currentUser"))
		.update({ disabled: d });
});

firebase.auth().onAuthStateChanged(function (u) {
	if (u) {
		user = u.uid;
		var docRefUser = db.collection("userData").doc(user);

		docRefUser
			.get()
			.then((doc) => {
				if (doc.exists) {
					userName.innerText =
						doc.data().first_name + " " + doc.data().last_name;
					email.innerText = u.email;
					if (doc.data().disabled) {
						disabled.value = "1";
					} else {
						disabled.value = "0";
					}
				} else {
					// doc.data() will be undefined in this case
					console.log("No such document!");
				}
			})
			.catch((error) => {
				console.log("Error getting document:", error);
			});

		var docRefTicket = db.collection("userTicket").doc(user);
		docRefTicket
			.get()
			.then((doc) => {
				if (doc.exists) {
					let o = doc.data();
					let key = Object.keys(o)[0];
					date.innerHTML = Object.keys(o)[0];
					cost.innerHTML = o[key].cost;
					duration.innerHTML = o[key].duration;
					end.innerHTML = o[key].end;
					location.innerHTML = o[key].location;
					start.innerHTML = o[key].start;
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