"use strict";
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { setTimeout (callback, 1000 / 30);};
const canvas = document.getElementById("canvas-id");
const context = canvas.getContext("2d");

const carParkA = db.collection("carParkSpaces").doc("carParkA");
    var AcolAlist = [];
    var AcolBlist = [];
    var AcolClist = [];
    var AcolDlist = [];
    var AcolElist = [];
    var AcolFlist = [];
carParkA.get().then((doc) => {
    if (doc.exists) {
        let AcolA = doc.data().A;
        let AcolB = doc.data().B;
        let AcolC = doc.data().C;
        let AcolD = doc.data().D;
        let AcolE = doc.data().E;
        let AcolF = doc.data().F;
        var i;
        for (i=0; i<16; i++){
            let keyA = Object.keys(AcolA)[i];
            AcolAlist.push(AcolA[keyA].symbol);
            let keyB = Object.keys(AcolB)[i];
            AcolBlist.push(AcolB[keyB].symbol);
            let keyC = Object.keys(AcolC)[i];
            AcolClist.push(AcolC[keyC].symbol);
            let keyD = Object.keys(AcolD)[i];
            AcolDlist.push(AcolD[keyD].symbol);
            let keyE = Object.keys(AcolE)[i];
            AcolElist.push(AcolE[keyE].symbol);
            let keyF = Object.keys(AcolF)[i];
            AcolFlist.push(AcolF[keyF].symbol);

        }
        var Arow1 = []
        Arow1.push(AcolAlist[0]);
        Arow1.push(AcolBlist[0]);
        Arow1.push(AcolClist[0]);
        Arow1.push(AcolDlist[0]);
        Arow1.push(AcolElist[0]);
        Arow1.push(AcolFlist[0]);
        var Arow1string = Arow1.join('').toString();
        var Arow2 = []
        Arow2.push(AcolAlist[1]);
        Arow2.push(AcolBlist[1]);
        Arow2.push(AcolClist[1]);
        Arow2.push(AcolDlist[1]);
        Arow2.push(AcolElist[1]);
        Arow2.push(AcolFlist[1]);
        var Arow2string = Arow2.join('').toString();
        var Arow3 = []
        Arow3.push(AcolAlist[2]);
        Arow3.push(AcolBlist[2]);
        Arow3.push(AcolClist[2]);
        Arow3.push(AcolDlist[2]);
        Arow3.push(AcolElist[2]);
        Arow3.push(AcolFlist[2]);
        var Arow3string = Arow3.join('').toString();
        var Arow4 = []
        Arow4.push(AcolAlist[3]);
        Arow4.push(AcolBlist[3]);
        Arow4.push(AcolClist[3]);
        Arow4.push(AcolDlist[3]);
        Arow4.push(AcolElist[3]);
        Arow4.push(AcolFlist[3]);
        var Arow4string = Arow4.join('').toString();
        var Arow5 = []
        Arow5.push(AcolAlist[4]);
        Arow5.push(AcolBlist[4]);
        Arow5.push(AcolClist[4]);
        Arow5.push(AcolDlist[4]);
        Arow5.push(AcolElist[4]);
        Arow5.push(AcolFlist[4]);
        var Arow5string = Arow5.join('').toString();
        var Arow6 = []
        Arow6.push(AcolAlist[5]);
        Arow6.push(AcolBlist[5]);
        Arow6.push(AcolClist[5]);
        Arow6.push(AcolDlist[5]);
        Arow6.push(AcolElist[5]);
        Arow6.push(AcolFlist[5]);
        var Arow6string = Arow6.join('').toString();
        var Arow7 = []
        Arow7.push(AcolAlist[6]);
        Arow7.push(AcolBlist[6]);
        Arow7.push(AcolClist[6]);
        Arow7.push(AcolDlist[6]);
        Arow7.push(AcolElist[6]);
        Arow7.push(AcolFlist[6]);
        var Arow7string = Arow7.join('').toString();
        var Arow8 = []
        Arow8.push(AcolAlist[7]);
        Arow8.push(AcolBlist[7]);
        Arow8.push(AcolClist[7]);
        Arow8.push(AcolDlist[7]);
        Arow8.push(AcolElist[7]);
        Arow8.push(AcolFlist[7]);
        var Arow8string = Arow8.join('').toString();
        var Arow9= []
        Arow9.push(AcolAlist[8]);
        Arow9.push(AcolBlist[8]);
        Arow9.push(AcolClist[8]);
        Arow9.push(AcolDlist[8]);
        Arow9.push(AcolElist[8]);
        Arow9.push(AcolFlist[8]);
        var Arow9string = Arow9.join('').toString();
        var Arow10= []
        Arow10.push(AcolAlist[9]);
        Arow10.push(AcolBlist[9]);
        Arow10.push(AcolClist[9]);
        Arow10.push(AcolDlist[9]);
        Arow10.push(AcolElist[9]);
        Arow10.push(AcolFlist[9]);
        var Arow10string = Arow10.join('').toString();
        var Arow11= []
        Arow11.push(AcolAlist[10]);
        Arow11.push(AcolBlist[10]);
        Arow11.push(AcolClist[10]);
        Arow11.push(AcolDlist[10]);
        Arow11.push(AcolElist[10]);
        Arow11.push(AcolFlist[10]);
        var Arow11string = Arow11.join('').toString();
        var Arow12= []
        Arow12.push(AcolAlist[11]);
        Arow12.push(AcolBlist[11]);
        Arow12.push(AcolClist[11]);
        Arow12.push(AcolDlist[11]);
        Arow12.push(AcolElist[11]);
        Arow12.push(AcolFlist[11]);
        var Arow12string = Arow12.join('').toString();
        var Arow13= []
        Arow13.push(AcolAlist[12]);
        Arow13.push(AcolBlist[12]);
        Arow13.push(AcolClist[12]);
        Arow13.push(AcolDlist[12]);
        Arow13.push(AcolElist[12]);
        Arow13.push(AcolFlist[12]);
        var Arow13string = Arow13.join('').toString();
        var Arow14= []
        Arow14.push(AcolAlist[13]);
        Arow14.push(AcolBlist[13]);
        Arow14.push(AcolClist[13]);
        Arow14.push(AcolDlist[13]);
        Arow14.push(AcolElist[13]);
        Arow14.push(AcolFlist[13]);
        var Arow14string = Arow14.join('').toString();
        var Arow15= []
        Arow15.push(AcolAlist[14]);
        Arow15.push(AcolBlist[14]);
        Arow15.push(AcolClist[14]);
        Arow15.push(AcolDlist[14]);
        Arow15.push(AcolElist[14]);
        Arow15.push(AcolFlist[14]);
        var Arow15string = Arow15.join('').toString();
        var Arow16= []
        Arow16.push(AcolAlist[15]);
        Arow16.push(AcolBlist[15]);
        Arow16.push(AcolClist[15]);
        Arow16.push(AcolDlist[15]);
        Arow16.push(AcolElist[15]);
        Arow16.push(AcolFlist[15]);
        var Arow16string = Arow16.join('').toString();
        var grid =[Arow1string,Arow2string,Arow3string,Arow4string,Arow5string,Arow6string,Arow7string,Arow8string,Arow9string,Arow10string,Arow11string,Arow12string,Arow13string,Arow14string,Arow15string,Arow16string];
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
// })
// .catch((error) => {
//     console.log("Error getting document:", error);
// });

//############################################
//TODO: get this info from the database START

const rows = 16, cols = 6;

const encoding = {
    freeSlot: 'F',
    takenSlot: 'C',
    targetSlot: 'T', //this is given as additional info in the database - freeSpace coords
    disabled: 'D',
    entrance: 'E',
    road: '.',
    shortestPath: '#',
    border: '_'
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
                case encoding.border:
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
})
.catch((error) => {
    console.log("Error getting document:", error);
});
