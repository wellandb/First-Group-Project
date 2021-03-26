
"use strict";

function startDrawing(grid) {
    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { setTimeout (callback, 1000 / 30);};
    const canvas = document.getElementById("canvas-id");
    const context = canvas.getContext("2d");
    //####################################
    // TODO: get from the database
    const rows = grid.length, cols = grid[0].length;

    const gridEncoding = {
        freeSlot: 'F',
        disabled: 'D',
        entrance: 'E',

        road: '.',

        takenSlot: 'C',
        border: '-',

        targetSlot: 'T' //this is given as additional info in the database - freeSpace coords
    };

    const pathEncoding = {
        up: 'U',
        down: 'D',
        left: 'L', //this is given as additional info in the database - freeSpace coords
        right: 'R'
    };


    const pathWidth = 8;
    const startRow3 = 0, startCol3 = 1;
    const startRow4 = 15, startCol4 = 4;
    const lastLineWithCars = 13; //TODO: use algorithm to find this

    const startRow = startRow4, startCol = startCol4;

    //console.log(grid);
    const path1 = "#DDDDDRRRUUUL";
    const path2 = "#DDDDDRRRDDDL";
    const path3 = "#DDDDDDRRRDDDLLLDDDR";
    const path4 = "#UUUUUULLLUUURRRUL";

    const obj = shortestPath(grid, gridEncoding, pathEncoding, startRow, startCol, false);
    const path = obj.path;
    const targetRow = obj.targetRow, targetCol = obj.targetCol;

    //TODO: get also from the database freeSpace coords, shortest path

    //get this info from the database END
    //####################################

    const lineWidth = 3, freeSpace = 4, carWidth = 50;

    /*
    ##################################
    Important: do not touch this START; done some calculations so it looks like the presentation
    */

    //the carWidth/carHeight = 40/25 = 8/5 -> this is a proportion
    //old 5/8
    const carProportion = 1/2;

    const carHeight = carProportion * carWidth;
    const cellWidth = carWidth + 2*freeSpace + lineWidth, cellHeight = carHeight + 2*freeSpace + lineWidth;

    //TODO: think about this
    canvas.width = cellWidth * cols;
    canvas.height = cellHeight * rows;

    /*
    Important: do not touch this END
    ################################
    */

    const carRight = new Image();
    carRight.src = "car_right.png"; //car looking to the right
    const carLeft = new Image();
    carLeft.src = "car_left.png"; //car looking to the left
    const carUp = new Image();
    carUp.src = "car_up.png"; //car looking to the right
    const carDown = new Image();
    carDown.src = "car_down.png"; //car looking to the left
    //TODO: add the car in the other directions; use an array; move it to a function

    let counter = 0;
    const imagesCount = 4; //change if you add more images TODO: use the lenght of the image array

    function onImageLoaded (){
            counter++;
        if (counter == imagesCount) {
            draw();
        }
    }

    carRight.onload = onImageLoaded;
    carLeft.onload = onImageLoaded;
    carUp.onload = onImageLoaded;
    carDown.onload = onImageLoaded;

    function draw()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.globalAlpha = 1;

        //TODO: use a container instead of adding offset everywhere
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                //TODO: remove some of the cases in the switch-case
                switch(grid[i][j]) {
                    case gridEncoding.freeSlot:
                        break;
                    case gridEncoding.takenSlot:
                        let car = carRight;
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
                    case gridEncoding.road:
                        break;
                    case gridEncoding.border:
                        break;
                    case gridEncoding.targetSlot:
                        context.fillStyle = "#3df58d";
                        context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
                        break;
                    case gridEncoding.disabled:
                        context.fillStyle = "blue";
                        context.fillRect(j*cellWidth + (cellWidth - carWidth)/2, i*cellHeight + (cellHeight - carHeight)/2, carWidth, carHeight);
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
                if(grid[i][j] != gridEncoding.road && grid[i][j] != gridEncoding.entrance) {
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
        //console.log(path, path.length)
        for(let i = 1; i < path.length; i ++) {
            //console.log("yo")
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
}