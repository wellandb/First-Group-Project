grid1 = [
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
]

grid2 = [
['#', '-', 'E', '-', '-', '-', '-', '-'],
['|', 'F', '.', 'C', 'C', '.', 'F', '|'],
['|', 'F', '.', 'F', 'D', '.', 'C', '|'],
['|', 'C', '.', 'F', 'C', '.', 'F', '|'],
['|', 'F', '.', 'F', 'C', '.', 'D', '|'],
['|', 'F', '.', 'F', 'C', '.', 'D', '|'],
['|', 'C', '.', 'C', 'F', '.', 'C', '|'],
['|', 'F', '.', 'F', 'F', '.', 'C', '|'],
['|', 'C', '.', 'F', 'F', '.', 'T', '|'],
['|', 'F', '.', 'F', 'C', '.', 'D', '|'],
['|', 'F', '.', 'F', 'C', '.', 'D', '|'],
['-', '-', '.', '-', '-', 'E', '-', '-']]

grid3 = [['#', '#', 'E', '#', '#', '#', '#', '#'], ['#', 'F', '.', 'C', 'C', '.', 'F', '#'], ['#', 'F', '.', 'F', 'D', '.', 'C', '#'], ['#', 'C', '.', 'F', 'C', '.', 'F', '#'], ['#', 'F', '.', 'F', 'C', '.', 'D', '#'], ['#', 'F', '.', 'F', 'C', '.', 'D', '#'], ['#', 'C', '.', 'C', 'F', '.', 'C', '#'], ['#', 'F', '.', 'F', 'F', '.', 'C', '#'], ['#', 'C', '.', 'F', 'F', '.', 'T', '#'], ['#', 'F', '.', 'F', 'C', '.', 'D', '#'], ['#', 'F', '.', 'F', 'C', '.', 'D', '#'], ['#', '#', '.', '#', '#', 'E', '#', '#']]

rows = 12
cols = 8

# transforms array of strings to array of arrays of chars
def arrstrToArrArr(grid):
    for row in range(0, rows):
        print("[", end='')
        for col in range(0, cols):
            print("\'"+grid[row][col]+"\'", end='')
            if col != cols - 1:
                print(", ", end='')
            else:
                print("]", end='')

        if(row != rows - 1):
            print(",")

def borders(grid):
    for row in range(0, rows):
        for col in range(0, cols):
            if grid[row][col] == '-' or grid[row][col] == '|':
                grid[row][col] = '#'

    print(grid)

def addNewLines(grid):
    for arr in grid:
        print(arr, ',')

borders(grid2)
addNewLines(grid3)
