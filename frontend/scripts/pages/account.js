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

// var stays = await db.collection("userData").doc(uid).get();
// stays = stays.data().stays;

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

					if (doc.data().date != "" && doc.data().date != undefined) {
						date.innerHTML = doc.data().date;
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
