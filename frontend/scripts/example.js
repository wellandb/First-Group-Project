var uid = sessionStorage.getItem("currentUser");

var stays = await db.collection("userData").doc(uid).get();
stays = stays.data().stays;

function addTicket() {
	stays = stays + 1;
	let path = "tickets." + stays;

	let data = {
		time: "14:12 | 24/03/2020",
		cost: 7.64,
		duration: "2:25",
		end: "15:37",
		parking_spot: "2C",
		start: "13:13",
		location: "Manchester Arndale",
	};

	db.collection("userData")
		.doc(uid)
		.update({ [path]: data });

	db.collection("userData").doc(uid).set({ stays: stays });
}

// time, spot, location start

function getDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + "/" + dd + "/" + yyyy;
	var d = new Date();
	var n = d.toLocaleTimeString();
	n = n.slice(0, -3);

	return n + " | " + today;
}

// addTicket();

// function addTicket() {
// 	stays = stays + 1;
// 	let path = "tickets." + stays;

// 	let data = {
// 		time: "14:12 | 24/03/2020",
// 		cost: 7.64,
// 		duration: "2:25",
// 		end: "15:37",
// 		parking_spot: "00",
// 		start: "13:13",
// 		location: "Manchester Arndale",
// 	};

// 	db.collection("userData")
// 		.doc(uid)
// 		.update({ [path]: data });

// 	db.collection("userData")
// 		.doc(uid)
// 		.update({ [path]: { cost: 7 } });

// 	db.collection("userData").doc(uid).set({ stays: stays });
// }

// var docRefTicket = db.collection("userData").doc(uid);
// 		docRefTicket
// 			.get()
// 			.then((doc) => {
// 				if (doc.exists) {
// 					let o = doc.data().tickets;
// 					o = o[stays];
// 					date.innerHTML = o.time;
// 					cost.innerHTML = "£" + o.cost;
// 					duration.innerHTML = o.duration;
// 					end.innerHTML = o.end;
// 					location.innerHTML = o.location;
// 					start.innerHTML = o.start;
// 				} else {
// 					// doc.data() will be undefined in this case
// 					console.log("No such document!");
// 				}
// 			})
// 			.catch((error) => {
// 				console.log("Error getting document:", error);
// 			});
