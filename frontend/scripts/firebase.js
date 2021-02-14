var firebaseConfig = {
	apiKey: "AIzaSyCaug1waRU1k9Uqxk3Utm80PeG4YWXL6tc",
	authDomain: "park-ez-36240.firebaseapp.com",
	projectId: "park-ez-36240",
	storageBucket: "park-ez-36240.appspot.com",
	messagingSenderId: "746541177430",
	appId: "1:746541177430:web:b773ea0974b6558b28f9f7",
	measurementId: "G-J597TZ6SP5",
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
