
"use strict";

function shortestPath(grid, rows, cols, gridEncoding, pathEncoding, startRow, startCol, isDisabled, isParking) {
	///INITIALIZATION
	let distances = [];
	let parents = [];
	for (let i = 0; i < rows; i++) {
		distances.push([]);
		parents.push([]);
		for (let j = 0; j < cols; j++) {
			distances[i].push(-1);
			parents[i].push(-1);
		}
	}

	let path = [];
	let minDist = -1;
	const deltaRow = [1, -1, 0, 0];
	const deltaCol = [0, 0, -1, 1];

	let targetRow = -1, targetCol = -1;

	///CALL ALGORITHMS
	bfs(startRow, startCol, isParking);
	findPath(startRow, startCol, targetRow, targetCol);

	///UPDATE DATABASE
	updateTargetSpot(targetRow, targetCol);
	
	return {
		targetRow: targetRow,
		targetCol: targetCol,
		path: path
	};

	///ALGORITHMS
	function bfs(startRow, startCol, isParking) {
		let queue = [{ row: startRow, col: startCol }];
		parents[startRow][startCol] = { row: startRow, col: startCol };
		distances[startRow][startCol] = 0;

		while (queue.length > 0) {
			const curr = queue[0];
			queue.shift();
			for (let i = 0; i < 4; i++) {
				const row = curr.row + deltaRow[i];
				const col = curr.col + deltaCol[i];
				if (row < 0 || col < 0 || row >= rows || col >= cols) {
					continue;
				}
				if (distances[row][col] === -1 && grid[row][col] !== gridEncoding.border &&
					grid[row][col] !== gridEncoding.takenNormal && grid[row][col] !== gridEncoding.takenDisabled) 
				{
					distances[row][col] = distances[curr.row][curr.col] + 1;
					parents[row][col] = { row: curr.row, col: curr.col };
					if (grid[row][col] === gridEncoding.road) {
						queue.push({ row: row, col: col });
					}
					if (canParkHere(grid[row][col], isDisabled, isParking) && (minDist === -1 || distances[row][col] < minDist)) {
						minDist = distances[row][col];
						targetRow = row;
						targetCol = col;
					}
				}
			}
		}
	}

	function findPath(startRow, startCol, targetRow, targetCol) {
		//console.error(startRow, startCol, targetRow, targetCol, "find path START");
		let curr = { row: targetRow, col: targetCol };
		while (curr.row !== startRow || curr.col !== startCol) {
			let parent = parents[curr.row][curr.col];
			if (parent.row + 1 === curr.row) {
				path.push(pathEncoding.down);
			} else if (parent.row - 1 === curr.row) {
				path.push(pathEncoding.up);
			} else if (parent.col + 1 === curr.col) {
				path.push(pathEncoding.right);
			} else if (parent.col - 1 === curr.col) {
				path.push(pathEncoding.left);
			} else {
				console.error("INVALID PATH");
			}
			curr = { row: parent.row, col: parent.col };
		}
		path.push("#");
		path.reverse();
	}

	function canParkHere(where, isDisabled, isParking) {
		if (!isParking) {
			return where == gridEncoding.exit;
		}

		if (isDisabled) {
			return (
				where === gridEncoding.freeNormal ||
				where === gridEncoding.freeDisabled
			);
		}
		return where === gridEncoding.freeNormal;
	}
}

