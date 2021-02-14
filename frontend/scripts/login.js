import { provider } from "./firebase.js";

document.getElementById("btnLogin").addEventListener("click", login);
var headerName = document.getElementById("name");
var headerEmail = document.getElementById("email");

function login() {
	console.log("Sign In Sequence Initiated");

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

			console.log(user);
			headerName.textContent = "Name: " + user.displayName;
			headerEmail.textContent = "Email: " + user.email;
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
