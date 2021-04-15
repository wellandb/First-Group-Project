function randomData(grid, rows, cols, gridEncoding) {


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
                    updateSpace(row, collumn, false, gridEncoding, true);
                    randomCars.append((row,collumn))
                }else if(grid[row,collumn] == gridEncoding.freeDisabled){
                    check = True;
                    grid[row,collumn]= gridEncoding.takenDisabled;
                    
                    updateSpace(row, collumn, true, gridEncoding, true);
                    randomCars.append((row,collumn))
                }
            }
        }
        redraw(grid, rows, cols, gridEncoding);
    }

    function removeCar(){
        check = False;
        while(not(check)){
            (row,collumn) = Math.floor(Math.random() * randomCars.length());

            if (grid[row,collumn] == gridEncoding.takenNormal){
                check = True;
                grid[row,collumn]= gridEncoding.freeNormal;
                    
                // Update database here
                updateSpace(row, collumn, false, gridEncoding, false);
            }else if(grid[row,collumn] == gridEncoding.takenDisabled){
                check = True;
                grid[row,collumn]= gridEncoding.freeDisabled;
                
                updateSpace(row, collumn, true, gridEncoding, false);
                randomCars.append((row,collumn))
            }
        }
       redraw(grid, rows, cols, gridEncoding);
    }
    
    // Set interval to add car every minute
    setInterval(addCars(), 60 * 1000); // 60 * 1000 milsec

    // Set interval to remove car every few minutes to stop overcrowding
    setInterval(removeCar(), 60 * 1000 * 2); // 60 * 1000 milsec


}