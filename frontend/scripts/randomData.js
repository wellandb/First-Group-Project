function randomData(grid, rows, cols, gridEncoding) {

    freeSpaces =[];
    for(i=0; i<rows; i++){
        for(j=0; j<cols; j++){
            if (grid[i,j] == gridEncoding.freeNormal){
                freeSpaces.append((i,j));
            }else if(grid[i,j] == gridEncoding.freeDisabled){
                freeSpaces.append((i,j));
            }
        }
    }

    randomCars = [];

    function addCars(){
        for(i=0; i<2; i++){
            space = Math.floor(Math.random() * freeSpaces.length());
            row, collumn = freeSpaces[space];
            if(grid[row,collumn] = gridEncoding.freeNormal){
                grid[row,collumn] = gridEncoding.takenNormal;
                // Update database here
                updateSpace(row, collumn, false, gridEncoding, true);
            }
            else{
                grid[row,collumn] = gridEncoding.takenDisabled;
                updateSpace(row, collumn, true, gridEncoding, true);
            }
            randomCars.append((row,collumn));
            freeSpaces.remove(space);
        }
        redraw(grid, rows, cols, gridEncoding);
    }

    function removeCar(){
        space = Math.floor(Math.random() * randomCars.length());
        (row, collumn) = randomCars[space];

        if (grid[row,collumn] == gridEncoding.takenNormal){
            grid[row,collumn] = gridEncoding.freeNormal;
                    
            // Update database here
            updateSpace(row, collumn, false, gridEncoding, false);
            
        }else if(grid[row,collumn] == gridEncoding.takenDisabled){
            grid[row,collumn]= gridEncoding.freeDisabled;
                
            updateSpace(row, collumn, true, gridEncoding, false);
            
        }
        freeSpaces.append(randomCars[space]);
        randomCars.remove(space);
        
        redraw(grid, rows, cols, gridEncoding);
    }
    
    // Set interval to add car every minute
    setInterval(addCars(), 60 * 1000); // 60 * 1000 milsec

    // Set interval to remove car every few minutes to stop overcrowding
    setInterval(removeCar(), 60 * 1000 * 2); // 60 * 1000 milsec


}