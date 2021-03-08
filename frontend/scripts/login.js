document.getElementById("btn-google").addEventListener("click", login);
document.getElementById("btn-twitter").addEventListener("click", login);
document.getElementById("btn-facebook").addEventListener("click", login);

const txtEmail = document.getElementById("txt-email");
const password = document.getElementById("pass-password");
const password1 = document.getElementById("pass-password1");
const password2 = document.getElementById("pass-password2");

const loginButton = document.querySelector("#btn-login");
const signUpButton = document.querySelector("#btn-sign-up");
const errorLog = document.querySelector("#error-text");
const container = document.querySelector(".container");

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
			window.location = "index.html";
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

	e.preventDefault();
	let email = txtEmail.value;
	let p1 = password1.value;
	let p2 = password2.value;
	if (p1 == p2) {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, p1)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				window.location = "index.html";
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				errorLog.innerHTML = errorMessage;
				// clearFields();
			});
	} else {
		errorLog.innerHTML = "Passwords don't match!";
	}
});

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
			var credential = result.credential;

			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = credential.accessToken;

			// The signed-in user info.
			var user = result.user;

			console.log(user.displayName);
			window.location = "index.html";
		})
		.catch((error) => {
			// Handle Errors here.
			console.log(error);
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
		});
}

function clearFields() {
	txtEmail.value = "";
	password.value = "";
}
