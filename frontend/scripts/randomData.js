function randomData(grid, gridEncoding) {

    const rows = grid.length, cols = grid[0].length;

    randomCars = [];

    function addCars(){
        for(i=0; i<2; i++){
            check = False;
            while(not(check)){
                row = Math.floor(Math.random() * rows);
                collumn = Math.floor(Math.random() * cols);
                if (grid[row,collumn] == gridEncoding.freeNormal){
                    check = True;
                    grid[row,collumn]= gridEncoding.takenNormal;
                    
                    // Update database here
                    updateSpace(row, collumn, False, gridEncoding, True);
                    randomCars.append((row,collumn))
                }
            }
        }
        startDrawing(grid);
    }

    function removeCar(){
        check = False;
        while(not(check)){
            (row,collumn) = Math.floor(Math.random() * randomCars.length());

            if (grid[row,collumn] == gridEncoding.takenNormal){
                check = True;
                grid[row,collumn]= gridEncoding.freeNormal;
                    
                // Update database here
                updateSpace(row, collumn, False, gridEncoding, False);
            }
        }
        startDrawing(grid);
    }
    
    // Set interval to add car every minute
    setInterval(addCars(), 60 * 1000); // 60 * 1000 milsec

    // Set interval to remove car every few minutes to stop overcrowding
    setInterval(removeCar(), 60 * 1000 * 2); // 60 * 1000 milsec


}