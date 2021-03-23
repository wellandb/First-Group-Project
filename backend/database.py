
# TODO:
# GET INFO FROM THE DATABASE INSTEAD OF HARDCODING

rows = 14
cols = 6
isDisabled = False
targetRow = -1
targetCol = -1
startRow = 0
startCol = 1

grid = [
['#', 'E', '#', '#', '#', '#'],
['.', '.', '.', '.', '.', '.'],
['F', '.', 'C', 'C', '.', 'F'],
['F', '.', 'F', 'D', '.', 'C'],
['C', '.', 'F', 'C', '.', 'F'],
['F', '.', 'F', 'C', '.', 'D'],
['F', '.', 'F', 'C', '.', 'D'],
['C', '.', 'C', 'F', '.', 'C'],
['F', '.', 'F', 'F', '.', 'C'],
['C', '.', 'F', 'F', '.', 'T'],
['F', '.', 'F', 'C', '.', 'D'],
['F', '.', 'F', 'C', '.', 'D'],
['.', '.', '.', '.', '.', '.'],
['#', '#', '#', '#', 'E', '#']]

gridEncoding = {
    "freeSlotNormal": 'F',
    "freeSlotDisabled": 'D',
    "takenSlot": 'C',
    "targetSlot": 'T',
    "entrance": 'E',
    "road": '.',
    "border": '#'
}

# DFS returns these
path = []

pathEncoding = {
    "up": 'U',
    "down": 'D',
    "right": 'R',
    "left": 'L'
}

# function for updating used in DFS
def updateTarget(row, col):
    targerRow = row
    targetCol = col
    grid[row][col] = gridEncoding["targetSlot"]

def updatePath(newPath):
    path = newPath

# test
# updateTarget(2,3)
# updatePath("asdfghjk");
