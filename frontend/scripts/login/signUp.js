const fn = document.getElementById("fname");
const ln = document.getElementById("lname");
const errorLog = document.getElementById("error");

const buttonYes = document.getElementById("disable-yes");
const buttonNo = document.getElementById("disable-no");
document.getElementById("submit").addEventListener("click", addToDatabase);

buttonYes.addEventListener("click", setSelected);
buttonNo.addEventListener("click", setSelected);

var db = firebase.firestore();
// let user = JSON.parse(sessionStorage.getItem("user"));
var user, email;
firebase.auth().onAuthStateChanged(function (u) {
	if (u) {
		user = u;
		console.log(user);
		email = user.email;
		console.log(email);
		sessionStorage.removeItem("user");
		fn.value = user.displayName.split(" ")[0];
		ln.value = user.displayName.split(" ")[1];
	}
});

// var email = user.email;
// console.log(email);
// sessionStorage.removeItem("user");
// fn.value = user.displayName.split(" ")[0];
// ln.value = user.displayName.split(" ")[1];

function addToDatabase(event) {
	event.preventDefault();

	let d = false;

	if (buttonYes.classList.contains("selected")) {
		d = true;
	} else if (buttonNo.classList.contains("selected")) {
		d = false;
	}

	if (fn.value == "" || ln.value == "") {
		errorLog.innerHTML = "Enter first and last name!";
	} else {
		db.collection("userData")
			.doc(sessionStorage.getItem("currentUser"))
			.set({
				email: email,
				first_name: fn.value,
				last_name: ln.value,
				disabled: d,
			})
			.then((docRef) => {
				console.log("Document written with ID: ");

				if (sessionStorage.getItem("next") == "account") {
					window.location = "../account.html";
				} else if (sessionStorage.getItem("carPark") == "A") {
					window.location = "../../parking-visualization/drawA.html";
				} else if (sessionStorage.getItem("carPark") == "B") {
					window.location = "../../parking-visualization/drawB.html";
				} else if (sessionStorage.getItem("carPark") == "C") {
					window.location = "../../parking-visualization/drawC.html";
				}
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	}
}

function setSelected(e) {
	e.preventDefault();
	if (e.target.id == "disable-yes") {
		buttonYes.classList.add("selected");
		buttonNo.classList.remove("selected");
	}
	if (e.target.id == "disable-no") {
		buttonNo.classList.add("selected");
		buttonYes.classList.remove("selected");
	}
}

// {
// 	disabled: false,
// 	email: "test@gmail.com",
// 	first_name: "test",
// 	last_name: "user",
// }
