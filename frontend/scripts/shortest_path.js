
"use strict";

function shortestPath(grid, gridEncoding, pathEncoding, startRow, startCol, isDisabled) {
    isDisabled = isDisabled ? 1 : 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let distances = [];
    let parents = [];
    for(let i = 0; i < rows; i ++) {
        distances.push([]);
        parents.push([]);
        for(let j = 0; j < cols; j ++) {
            distances[i].push(-1);
            parents[i].push(-1);
        }
    }

    let path = [];
    let targetRow = -1, targetCol = -1, minDist = -1;
    const deltaRow = [1, -1, 0, 0];
    const deltaCol = [0, 0, -1, 1];

    bfs(startRow, startCol, 0);
    findPath(startRow, startCol, targetRow, targetCol);

    //grid[targetRow][targetCol] = gridEncoding.targetSlot;
    /*
    console.log(grid);
    console.log(distances);
    console.log(parents);
    console.log(targetRow, targetCol);
    */

    return {
        targetRow: targetRow,
        targetCol: targetCol,
        path: path//"#DDDDDRRRDDDL#" //path
    };

    function bfs(startRow, startCol) {
        let queue = [{row: startRow, col: startCol}];
        parents[startRow][startCol] = {row: startRow, col: startCol};
        distances[startRow][startCol] = 0;

        while(queue.length > 0) {
            const curr = queue[0];
            queue.shift();
            for(let i = 0; i < 4; i ++) {
                const row = curr.row + deltaRow[i];
                const col = curr.col + deltaCol[i];
                if(row < 0 || col < 0 || row >= rows || col >= cols) {
                    //console.log("continue", row, col)
                    continue;
                }
                if(distances[row][col] === -1 && grid[row][col] !== gridEncoding["border"] &&
                grid[row][col] !== gridEncoding["takenNormal"] && grid[row][col] !== gridEncoding["takenDisabled"]) {
                    distances[row][col] = distances[curr.row][curr.col] + 1;
                    parents[row][col] = {row: curr.row, col: curr.col};
                    if(grid[row][col] === gridEncoding["road"]) {
                        queue.push({row: row, col: col});
                    }
                    //console.log(gridEncoding[freeSlot[isDisabled]], isDisabled)
                    if(canParkHere(grid[row][col], isDisabled) && (minDist === -1 || distances[row][col] < minDist)) {
                        //console.log("here")
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
        let curr = {row: targetRow, col: targetCol};
        while(curr.row !== startRow || curr.col !== startCol) {
            let parent = parents[curr.row][curr.col];
            if(parent.row + 1 === curr.row) {
                path.push(pathEncoding.down);
            }else if(parent.row - 1 === curr.row) {
                path.push(pathEncoding.up);
            }else if(parent.col + 1 === curr.col) {
                path.push(pathEncoding.right);
            }else if(parent.col - 1 === curr.col) {
                path.push(pathEncoding.left);
            }else{
                console.error("INVALID PATH");
            }
            curr = {row: parent.row, col: parent.col};
            //console.log("step: ", parent, curr);
        }
        path.push("#");
        path.reverse();
        //console.error("find path END", path);
    }

    function canParkHere(where, isDisabled) {
        if(isDisabled) {
            return where === gridEncoding["freeNormal"] || where === gridEncoding["freeDisabled"];
        }
        return where === gridEncoding["freeNormal"];
    }
}
