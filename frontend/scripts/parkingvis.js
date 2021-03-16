"use strict";
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { setTimeout (callback, 1000 / 30);};
const canvas = document.getElementById("canvas-id");
const context = canvas.getContext("2d");

//############################################
//TODO: get this info from the database START

const rows = 10, cols = 6;

let grid = [
"F.CC.F",
"F.FD.C",
"C.FC.F",
"F.FC.D",
"F.FC.D",
"C.CF.C",
"F.FF.C",
"C.FF.T",
"F.FC.D",
"F.FC.D",
];

const encoding = {
    freeSlot: 'F',
    takenSlot: 'C',
    targetSlot: 'T', //this is given as additional info in the database - freeSpace coords
    disabled: 'D',
    entrance: 'E',
    road: '.',
    shortestPath: '#'
};

//TODO: get also from the database freeSpace coords, shortest path

//get this info from the database END 
//####################################

const lineWidth = 3, freeSpace = 4, carWidth = 40;

/*
##################################
Important: do not touch this START
done some calculations so it looks like the presentation
*/

//the carWidth/carHeight = 40/25 = 8/5 -> this is a proportion
const carProportion = 5/8;

const carHeight = carProportion * carWidth;
const cellWidth = carWidth + 2*freeSpace + lineWidth, cellHeight = carHeight + 2*freeSpace + lineWidth;

//just calculated it with some numbers - 360/100 = 36/10 = 18/5
const offsetProportion = 5/18;

const offset = cellHeight*rows*offsetProportion;

//TODO: think about this
canvas.width = cellWidth * cols;
canvas.height = cellHeight * rows + 2*offset;

/*
Important: do not touch this END
################################
*/

const carRight = new Image(); 
carRight.src = "car_right.png"; //car looking to the right
const carLeft = new Image();
carLeft.src = "car_left.png"; //car looking to the left
//TODO: add the car in the other directions; use an array; move it to a function

let counter = 0;
const imagesCount = 2; //change if you add more images TODO: use the lenght of the image array

function onImageLoaded (){
        counter++;
    if (counter == imagesCount) {
        draw();
    }
}

carRight.onload = onImageLoaded;
carLeft.onload = onImageLoaded;

function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    
    //TODO: use a container instead of adding offset everywhere
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            //TODO: remove some of the cases in the switch-case
            switch(grid[i][j]) {
                case encoding.freeSlot:
                    break;
                case encoding.takenSlot:
                    let car = carRight;
                    //TODO: make this outside the draw
                    if (Math.random() < 0.5) {
                        car = carLeft;
                    }
                    context.drawImage(car, lineWidth + freeSpace + j*cellWidth, offset + lineWidth + freeSpace +  + i*cellHeight, carWidth, carHeight);
                    break;
                case encoding.entrance:
                    break;
                case encoding.road:
                    break;
                case encoding.targetSlot:
                    context.fillStyle = "green";
                    context.fillRect(lineWidth + freeSpace + j*cellWidth, offset + lineWidth + freeSpace +  + i*cellHeight, carWidth, carHeight);
                    break;
                case encoding.disabled:
                    context.fillStyle = "blue";
                    context.fillRect(lineWidth + freeSpace + j*cellWidth, offset + lineWidth + freeSpace +  + i*cellHeight, carWidth, carHeight);
                    break;
                case encoding.shortestPath:
                    break;
                default:
                    break;
            }
            
            //draws horizontal lines
            if(grid[i][j] != '.') {
                context.fillStyle = "black";
                context.fillRect(j*cellWidth, offset + i*cellHeight, cellWidth, lineWidth);
                if(i + 1 == rows) {
                    context.fillRect(j*cellWidth, offset + (i + 1)* cellHeight, cellWidth, lineWidth);
                }
            }
        }
    }
    
    //TODO: make it to depend on the number of rows
    //draws vertical line
    context.fillStyle = "black";
    context.fillRect(cols/2*cellWidth, offset, lineWidth, rows*cellHeight);

    //requestAnimationFrame(draw); //uncomment this when you add update feature for the grid
}