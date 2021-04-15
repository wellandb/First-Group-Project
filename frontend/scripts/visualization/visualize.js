
"use strict";

function visualize(grid, rows, cols, gridEncoding, isDisabled) {
    //make fun to find entr and exit
    const startRow = 0, startCol = 1;
    const isParking = true;
	
	const obj = shortestPath(grid, rows, cols, gridEncoding, pathEncoding, startRow, startCol, isDisabled, isParking);
	const path = obj.path;
	const targetRow = obj.targetRow, targetCol = obj.targetCol;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;

    context.translate(canvas.width/2, canvas.height/2);
    context.rotate(Math.PI);
    context.translate(-canvas.width/2, -canvas.height/2);

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            //TODO: remove some of the cases in the switch-case

            let car = carRight;
            //console.log(grid[i][j], i, j)
            switch(grid[i][j]) {
                case gridEncoding.freeNormal:
                    break;
                case gridEncoding.takenNormal:
                    //let car = carRight;
                    //TODO: make this outside the draw
                    if (Math.random() < 0.5) {
                        car = carLeft;
                    }
                    context.drawImage(car, j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                    break;
                case gridEncoding.entrance:
                    context.fillStyle = "yellow";
                    context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                    break;
                case gridEncoding.exit:
                    context.fillStyle = "yellow";
                    context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                    break;
                case gridEncoding.road:
                    break;
                case gridEncoding.border:
                    break;
                case gridEncoding.targetSlot:
                    context.fillStyle = "#3df58d";
                    context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                    break;
                case gridEncoding.freeDisabled:
                    context.fillStyle = "blue";
                    context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                    break;
                case gridEncoding.takenDisabled:
                    context.fillStyle = "blue";
                    context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                    //let car = carRight;
                    //TODO: make this outside the draw
                    if (Math.random() < 0.5) {
                        car = carLeft;
                    }
                    context.drawImage(car, j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                    break;
                case gridEncoding.shortestPath:
                    break;
                default:
                    break;
            }

            if(i == targetRow && j == targetCol) {
                context.fillStyle = "#3df58d";
                context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
            }

            //draws horizontal lines
            if(grid[i][j] != gridEncoding.road && grid[i][j] != gridEncoding.entrance && grid[i][j] != gridEncoding.exit) {
                context.fillStyle = "black";
                if(i <= lastLineWithCars) {
                    context.fillRect(j*cellWidth, i*cellHeight - lineWidth/2, cellWidth, lineWidth);
                }
                if(i == lastLineWithCars || i + 1 == rows) {
                    context.fillRect(j*cellWidth, (i + 1)* cellHeight - lineWidth/2, cellWidth, lineWidth);
                }
            }
        }
    }

    //TODO: make it to depend on the number of rows
    //draws vertical line
    context.fillStyle = "black";
    context.fillRect(cols/2*cellWidth - lineWidth/2, 2*cellHeight, lineWidth, (rows-4)*cellHeight);

    context.fillStyle = "#49c4f5";
    let row = startRow, col = startCol;

    /*//thiss adds circle also at the start point
    context.beginPath();
    context.arc(col*cellWidth + cellWidth / 2, row*cellHeight + cellHeight / 2, pathWidth / 2, 0, 2 * Math.PI);
    context.fill();*/

    for(let i = 1; i < path.length; i ++) {
        let height = cellHeight, width = cellWidth, offsetRow = 0, offsetCol = 0;
        if(path[i] != path[i-1]) {
            height = cellHeight / 2;
            width = cellWidth / 2;
            offsetRow = height;
            offsetCol = width;

            switch (path[i-1]) {
                case pathEncoding.up:
                    context.fillRect(col*cellWidth + (cellWidth - pathWidth) / 2, offsetRow + row*cellHeight, pathWidth, height);
                    break;
                case pathEncoding.down:
                    context.fillRect(col*cellWidth + (cellWidth - pathWidth) / 2, row*cellHeight, pathWidth, height);
                    break;
                case pathEncoding.right:
                    context.fillRect(col*cellWidth, row*cellHeight + (cellHeight - pathWidth) / 2, width, pathWidth);
                    break;
                case pathEncoding.left:
                    context.fillRect(offsetCol + col*cellWidth, row*cellHeight + (cellHeight - pathWidth) / 2, width, pathWidth);
                    break;
                default:
                    break;
            }

        }

        if(i + 1 >= path.length) {
            width = cellWidth/3;
            height = cellHeight/3;
            offsetCol = 1/6*cellWidth;
            offsetRow = 1/6*cellHeight;

            switch (path[i]) {
                case pathEncoding.up:
                    context.fillRect(col*cellWidth + (cellWidth - pathWidth) / 2, offsetRow + row*cellHeight, pathWidth, height);
                    break;
                case pathEncoding.down:
                    context.fillRect(col*cellWidth + (cellWidth - pathWidth) / 2, row*cellHeight, pathWidth, height);
                    break;
                case pathEncoding.right:
                    offsetCol = 1/2*cellWidth;
                    context.fillRect(offsetCol + col*cellWidth, row*cellHeight + (cellHeight - pathWidth) / 2, width, pathWidth);
                    break;
                case pathEncoding.left:
                    offsetCol = 1/6*cellWidth;
                    context.fillRect(offsetCol + col*cellWidth, row*cellHeight + (cellHeight - pathWidth) / 2, width, pathWidth);
                    break;
                default:
                    break;
            }
            break;
        }

        switch (path[i]) {
            case pathEncoding.up:
                context.fillRect(col*cellWidth + (cellWidth - pathWidth) / 2, row*cellHeight, pathWidth, height);
                row --;
                break;
            case pathEncoding.down:
                context.fillRect(col*cellWidth + (cellWidth - pathWidth) / 2, offsetRow + row*cellHeight, pathWidth, height);
                row ++;
                break;
            case pathEncoding.right:
                context.fillRect(offsetCol + col*cellWidth, row*cellHeight + (cellHeight - pathWidth) / 2, width, pathWidth);
                col ++;
                break;
            case pathEncoding.left:
                context.fillRect(col*cellWidth, row*cellHeight + (cellHeight - pathWidth) / 2, width, pathWidth);
                col --;
                break;
            default:
                break;
        }

        context.beginPath();
        context.arc(col*cellWidth + cellWidth / 2, row*cellHeight + cellHeight / 2, pathWidth / 2, 0, 2 * Math.PI);
        context.fill();
    }

    context.beginPath();
    const arrowSize = cellHeight/2;
    const arrowRow = row*cellHeight + cellHeight / 2;
    let arrowCol;
    switch (path[path.length - 1]) {
        /*//TODO: add vertical parkings
        case pathEncoding.up:
            context.moveTo(arrowCol, arrowRow);
            context.lineTo(arrowCol - arrowSize/2, arrowRow - arrowSize);
            context.lineTo(arrowCol + arrowSize/2, arrowRow - arrowSize);
            break;
        case pathEncoding.down:
            context.moveTo(arrowCol, arrowRow);
            context.lineTo(arrowCol - arrowSize/2, arrowRow + arrowSize);
            context.lineTo(arrowCol + arrowSize/2, arrowRow + arrowSize);
            break;
        */
        case pathEncoding.right:
            arrowCol = (col + 1) * cellWidth;
            context.moveTo(arrowCol, arrowRow);
            context.lineTo(arrowCol - arrowSize, arrowRow - arrowSize/2);
            context.lineTo(arrowCol - arrowSize, arrowRow + arrowSize/2);
            break;
        case pathEncoding.left:
            arrowCol = col * cellWidth;
            context.moveTo(arrowCol, arrowRow);
            context.lineTo(arrowCol + arrowSize, arrowRow - arrowSize/2);
            context.lineTo(arrowCol + arrowSize, arrowRow + arrowSize/2);
            break;
        default:
    }
    context.fill();
    //requestAnimationFrame(draw); //uncomment this when you add update feature for the grid
}
