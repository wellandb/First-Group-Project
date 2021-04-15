
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
    console.log(data);
    const grid = data.grid;
    const rows = data.rows;
    const cols = data.cols;
    const gridEncoding = data.gridEncoding;
    const isDisabled = data.isDisabled;

    const takenSpaces = countTakenSpaces(grid, rows, cols, gridEncoding);
    updateTakenSpaces(takenSpaces);

    loadImages(grid, rows, cols, gridEncoding, isDisabled); // add also start
    //randomData(grid, gridEncoding);
}

loadDataBaseInfo();