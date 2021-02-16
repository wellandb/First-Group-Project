// import { provider } from "./firebase.js";

document.getElementById("btn-google").addEventListener("click", login);
document.getElementById("btn-twitter").addEventListener("click", login);
document.getElementById("btn-facebook").addEventListener("click", login);
document.getElementById("btn-apple").addEventListener("click", login);

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
		// case "btn-apple":
		// 	var provider = new firebase.auth.AppleAuthProvider();
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
