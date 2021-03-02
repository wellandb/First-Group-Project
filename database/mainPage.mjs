// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKHK-m6o-_VvudaoB08zhB1riBZ498r2c",
  authDomain: "parkez-database.firebaseapp.com",
  projectId: "parkez-database",
  storageBucket: "parkez-database.appspot.com",
  messagingSenderId: "380773207260",
  appId: "1:380773207260:web:fcd465d1b410b5db963819",
  measurementId: "G-0G8FN83ZN3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("car-park-A").addEventListener("click", carPark);
document.getElementById("car-park-B").addEventListener("click", carPark);
document.getElementById("car-park-C").addEventListener("click", carPark);

function carPark(e) {
	switch (e.target.id) {
		case "car-park-A":
			takeCarPark("A");
			// take the document from the database
			// return the car park Name
		case "car-park-B":
			takeCarPark("B");		
		case "car-park-C":
			takeCarPark("C");
	}
}

function takeCarPark(carParkName)
{
	switch(carParkName){
		case "A":
			const carparkRef = firebase
  							.firestore()
  							.collection("prices")
  							.doc("fjtz79VVIyFxk5qiPCIs");

			carparkRef.get().then((doc) => {
  										if (!doc.exists) return;
  											console.log("Document data:", doc.data());
																				});
		case "B":
			const carparkReff = firebase
  							.firestore()
  							.collection("prices")
  							.doc("n4czB11LMqKzi6Pf7mQD");

			carparkReff.get().then((doc) => {
  										if (!doc.exists) return;
  											console.log("Document data:", doc.data());
																				});

		case "C":
			const carparkRefff = firebase
  							.firestore()
  							.collection("prices")
  							.doc("zTh4PKg9cTURcjOQprob");

			carparkRefff.get().then((doc) => {
  										if (!doc.exists) return;
  											console.log("Document data:", doc.data());
																				});

	}
}

