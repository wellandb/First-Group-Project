
"use strict";

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { setTimeout (callback, 1000 / 30);};
const canvas = document.getElementById("canvas-id");
const context = canvas.getContext("2d");

const carRight = new Image(), carLeft = new Image();
/*const carUp = new Image();
const carDown = new Image();*/

// ##################################
// Important: do not touch this START; done some calculations so it looks like the presentation

const pathEncoding = {
    up: 'U',
    down: 'D',
    left: 'L',
    right: 'R'
};

const pathWidth = 8;
const lastLineWithCars = 13; //TODO: use algorithm to find this
const lineWidth = 3, freeSpace = 4, carWidth = 50;

//the carWidth/carHeight = 40/25 = 8/5 -> this is a proportion //old was 5/8
const carProportion = 1/2;

const carHeight = carProportion * carWidth;
const cellWidth = carWidth + 2*freeSpace + lineWidth, cellHeight = carHeight + 2*freeSpace + lineWidth;

//TODO: think about this
canvas.width = cellWidth * 6;
canvas.height = cellHeight * 16;
context.translate(canvas.width/2, canvas.height/2);
context.rotate(Math.PI);
context.translate(-canvas.width/2, -canvas.height/2);

// Important: do not touch this END
// ################################

function loadImages(grid, rows, cols, gridEncoding, isDisabled, type) {
	carRight.src = "car_right.png"; //car looking to the right
	carLeft.src = "car_left.png"; //car looking to the left
	/*carUp.src = "car_up.png"; //car looking to the right
	carDown.src = "car_down.png"; //car looking to the left*/
	let counter = 0;
	const imagesCount = 2; //change if you add more images TODO: use the lenght of the image array
	
	function onImageLoaded (){
		counter++;
		if (counter == imagesCount) {
			visualize(grid, rows, cols, gridEncoding, isDisabled, type);
		}
	}
	
	carRight.onload = onImageLoaded;
	carLeft.onload = onImageLoaded;
	/*carUp.onload = onImageLoaded;
	carDown.onload = onImageLoaded;*/
}
