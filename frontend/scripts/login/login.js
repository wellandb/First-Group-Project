document.getElementById("btn-google").addEventListener("click", login);
document.getElementById("btn-twitter").addEventListener("click", login);
document.getElementById("btn-facebook").addEventListener("click", login);
document
	.querySelector("#btn-sign-up-screen")
	.addEventListener("click", nextScreen);

const txtEmail = document.getElementById("txt-email");
const txtEmailSignup = document.getElementById("sign-up-email");
const password = document.getElementById("pass-password");
const password1 = document.getElementById("pass-password1");
const password2 = document.getElementById("pass-password2");

const loginButton = document.querySelector("#btn-login");
const signUpButton = document.querySelector("#btn-sign-up");
const errorLog = document.querySelector(".error");
const errorLog2 = document.querySelector(".error2");
const container = document.querySelector(".container");

var db = firebase.firestore();
localStorage.clear();

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	let email = txtEmail.value;
	let p = password.value;

	container.classList.remove("sign-up-mode");

	firebase
		.auth()
		.signInWithEmailAndPassword(email, p)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			console.log(user);
			sessionStorage.setItem("currentUser", user.uid);
			window.location = "../index.html";
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorMessage);
			errorLog.innerHTML = errorMessage;
			clearFields();
		});
});

signUpButton.addEventListener("click", (e) => {
	e.preventDefault();
	container.classList.add("sign-up-mode");

	let email = txtEmailSignup.value;
	let p1 = password1.value;
	let p2 = password2.value;
	if (p1 == p2) {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, p1)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				sessionStorage.setItem("currentUser", user.uid);
				sessionStorage.setItem("user", JSON.stringify(user));
				window.location = "signUp.html";
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				errorLog2.innerHTML = errorMessage;
				// clearFields();
			});
	} else {
		errorLog2.innerHTML = "Passwords don't match!";
	}
});

function nextScreen(e) {
	e.preventDefault();
	container.classList.add("sign-up-mode");
}

function login(e) {
	console.log("Sign In Sequence Initiated");
	switch (e.target.id) {
		case "btn-google":
			var provider = new firebase.auth.GoogleAuthProvider();
			firebasePopup(provider);
		case "btn-twitter":
			var provider = new firebase.auth.TwitterAuthProvider();
			firebasePopup(provider);
		case "btn-facebook":
			var provider = new firebase.auth.FacebookAuthProvider();
			firebasePopup(provider);
	}
}

function firebasePopup(provider) {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			/** @type {firebase.auth.OAuthCredential} */

			// The signed-in user info.
			var user = result.user;
			sessionStorage.setItem("currentUser", user.uid);
			sessionStorage.setItem("user", JSON.stringify(user));
			var docRef = db.collection("userData").doc(user.email);

			docRef
				.get()
				.then((doc) => {
					if (doc.exists) {
						console.log("Document data:", doc.data());
						window.location = "../index.html";
					} else {
						// doc.data() will be undefined in this case
						console.log("No such document!");
						window.location = "signUp.html";
					}
				})
				.catch((error) => {
					console.log("Error getting document:", error);
				});
		})
		.catch((error) => {
			// Handle Errors here.
			console.log(error);
		});
}

function clearFields() {
	txtEmail.value = "";
	password.value = "";
}
