
"use strict";

function countTakenSpaces(grid, rows, cols, gridEncoding) {
	let takenSpaces = 0;
	for(let i = 0; i < rows; i++) {
		for(let j = 0; j < cols; j++) {
			if(grid[i][j] == gridEncoding.takenNormal || grid[i][j] == gridEncoding.takenDisabled) {
				takenSpaces ++;
			}
		}
	}
	return takenSpaces;
}

function start(data) {
    console.error(data);
    const grid = MainData.grid;
    const rows = MainData.rows;
    const cols = MainData.cols;
    const gridEncoding = MainData.gridEncoding;
    const isDisabled = MainData.isDisabled;

    const takenSpaces = countTakenSpaces(grid, rows, cols, gridEncoding);
    updateTakenSpaces(takenSpaces);

    initializeGridRotation(rows, cols);
    loadImages(grid, rows, cols, gridEncoding, isDisabled, "showParking"); // add also start
    //randomData(grid, gridEncoding);
    
    function initializeGridRotation(rows, cols) {
        let uid = new String(MainData.uid);
        while(uid.length < rows*cols) {
            uid += uid;
        }
        uid = uid.split("");

        for(let i = 0; i < rows; i++) {
            gridRotation[i] = [];
            for(let j = 0; j < cols; j++) {
                const rand = Math.floor(Math.random()*uid.length);
                gridRotation.push(uid[rand].charCodeAt()%2==0);
                uid[rand] = uid[uid.length - 1];
                uid.pop();
            }
        }
    }
}


loadDataBaseInfo();

function HandleEvent(type) {

    const grid = MainData.grid;
    const rows = MainData.rows;
    const cols = MainData.cols;
    const gridEncoding = MainData.gridEncoding;
    const isDisabled = MainData.isDisabled;

    switch(type) {
        case "showExit":
            visualize(grid, rows, cols, gridEncoding, isDisabled, "showExit");
            break;
        case "parkCar":
            visualize(grid, rows, cols, gridEncoding, isDisabled, "parkCar");
            break;
        case "showCar":
            visualize(grid, rows, cols, gridEncoding, isDisabled, "showCar");
            break;
        case "showParking":
            visualize(grid, rows, cols, gridEncoding, isDisabled, "showParking");
            break;
        case "confirmSpot":
            updateDB("confirm");
            break;
        case "done":
            updateDB("done");
            break;
        default:
            console.error("Invalid event");
            break;
    }
}
/*
HandleEvent("showParking");
<a class="btn btn-primary" onclick=HandleEvent("confirm") role="button" style="background-color: #004AAD; color: white;">Confirm Spot</a>
*/