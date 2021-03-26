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
var uid = sessionStorage.getItem("currentUser");

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

var stays = await db.collection("userData").doc(uid).get();
stays = stays.data().stays;

firebase.auth().onAuthStateChanged(function (u) {
	if (u) {
		uid = u.uid;
		var docRefUser = db.collection("userData").doc(uid);

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

		var docRefTicket = db.collection("userData").doc(uid);
		docRefTicket
			.get()
			.then((doc) => {
				if (doc.exists) {
					let o = doc.data().tickets;
					o = o[stays];
					date.innerHTML = o.time;
					cost.innerHTML = "£" + o.cost;
					duration.innerHTML = o.duration;
					end.innerHTML = o.end;
					location.innerHTML = o.location;
					start.innerHTML = o.start;
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

// addTicket();

function addTicket() {
	stays = stays + 1;
	let path = "tickets." + stays;

	let data = {
		time: "14:12 | 24/03/2020",
		cost: 7.64,
		duration: "2:25",
		end: "15:37",
		parking_spot: "00",
		start: "13:13",
		location: "Manchester Arndale",
	};

	db.collection("userData")
		.doc(uid)
		.update({ [path]: data });

	db.collection("userData")
		.doc(uid)
		.update({ [path]: { cost: 7 } });

	db.collection("userData").doc(uid).set({ stays: stays });
}
