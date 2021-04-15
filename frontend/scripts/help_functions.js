function countTakenSpaces(grid, gridEncoding, rows, cols) {
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