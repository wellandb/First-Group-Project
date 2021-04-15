
function randomData(grid, gridEncoding) {


    const rows = grid.length, cols = grid[0].length;

    const admin=require('firebase-admin');
    var serviceAccount = require('Users/jay/Documents/Ben/Javascript/key.json');
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });

    const db=admin.firestore();

    async function getDocument(db){
        var carParkRef=db.collection("carParkData").doc("exampleCarPark(A)");
        const doc = await carParkRef.get();
        if (!doc.exists) {
        console.log('No such document!');
        } else {
        console.log('Document data:', doc.data());
        }

    }

    getDocument(db);

    console.log('test');


    function addCars(){
        for(i=0; i<2; i++){
            check = False;
            while(not(check)){
                row = Math.floor(Math.random() * rows);
                collumn = Math.floor(Math.random() * cols);
                if (grid[row,collumn] == gridEncoding.freeNormal){
                    grid[row,collumn]= gridEncoding.takenNormal;
                    switch(collumn){
                        case 0:
                            collumnEncoded = 'A';
                            break;
                        case 1:
                            collumnEncoded = 'B';
                            break;
                        case 2:
                            collumnEncoded = 'C';
                            break;
                        case 3:
                            collumnEncoded = 'D';
                            break;
                        case 4:
                            collumnEncoded = 'E';
                            break;
                        case 5:
                            collumnEncoded = 'F';
                            break;
                    }
                    // Update database here
                }
            }
        }
        // Redraw the car Park here
    }
    // Set interval to add car every few minutes
    setInterval(addCars(), 60 * 1000); // 60 * 1000 milsec

}