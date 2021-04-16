
"use strict";

//to fix: give a path between start and target

function shortestPath(grid, rows, cols, gridEncoding, pathEncoding, startRow, startCol, targetRow, targetCol, isDisabled, type) {
	///INITIALIZATION
	console.log(arguments, type)
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

	///CALL ALGORITHMS
	bfs(startRow, startCol);
	console.error("WHY NOT");
	console.log(distances)
	console.log(parents)
	console.error("STUPID");
	findPath(startRow, startCol, targetRow, targetCol);

	///UPDATE DATABASE
	if(type === "parkCar") {
		console.log("asdfghjklkjhgfdsdfghjklkjhgfdsdfghjklkjhgfxz");
		updateTargetSpot(targetRow, targetCol);
	}

	console.warn(type, "maaaaaaaaaaaaan");
	
	return {
		targetRow: targetRow,
		targetCol: targetCol,
		path: path
	};

	///ALGORITHMS
	function bfs(startRow, startCol) {
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
					(grid[row][col] !== gridEncoding.takenNormal && grid[row][col] !== gridEncoding.takenDisabled)) 
				{
					distances[row][col] = distances[curr.row][curr.col] + 1;
					parents[row][col] = { row: curr.row, col: curr.col };
					if (grid[row][col] === gridEncoding.road) {
						queue.push({ row: row, col: col });
					}
					if (canGoHere(grid[row][col], isDisabled, type) && (minDist === -1 || distances[row][col] < minDist)) {
						minDist = distances[row][col];
						targetRow = row;
						targetCol = col;
						console.log("update")
					}
				}else if(type === "showCar" && row === targetRow && col === targetCol) {
					distances[row][col] = distances[curr.row][curr.col] + 1;
					parents[row][col] = { row: curr.row, col: curr.col };
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

	function canGoHere(where, isDisabled, type) {
/*		if (type == "showExit") {
			return where == gridEncoding.exit;
		}

		if (type == "showCar") {
			return where == gridEncoding.exit;
		}
*/
		if (type !== "parkCar") {
			return false;
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

