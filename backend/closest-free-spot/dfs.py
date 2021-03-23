
# import the database - for now it is just hardcoded
import importlib.util
spec = importlib.util.spec_from_file_location("database", "../database.py")
db = importlib.util.module_from_spec(spec)
spec.loader.exec_module(db)

# initialize distances
distances = []
parents = []
for i in range(0, db.rows):
    distances.append([])
    parents.append([])
    for j in range(0, db.cols):
        distances[i].append(-1)
        parents[i].append(-1)

path = []
targetRow = -1
targetCol = -1
minDist = -1
freeSlot = ["freeSlotNormal", "freeSlotDisabled"]


# testing connection
# print(db.gridEncoding["border"])
# print(distances)
# print(db.grid)
# print(db.gridEncoding)

# butify printing
def addNewLines(grid):
    for arr in grid:
        print(arr)

addNewLines(db.grid)

def hash(row, col):
    return row * db.cols + col

def dehash(number):
    return [number / db.cols, number % db.cols]

# public dfs
def dfs(grid, row, col, isDisabled):
    distances[row][col] = 0
    parents[row][col] = hash(row, col)
    dfsInner(grid, row, col, isDisabled, 0)
    db.updateTarget(targetRow, targetCol)
    # findPath(grid, row, col, targetRow, targetCol)

# inner dfs
def dfsInner(grid, row, col, isDisabled, last):
    global minDist, distances, targetRow, targetCol, freeSlot

    if row < 0 or col < 0 or row >= db.rows or col >= db.cols:
        return

    if grid[row][col] == db.gridEncoding["border"]:
        return

    if distances[row][col] > 0:
        return

    distances[row][col] = last + 1
    if grid[row][col] != db.gridEncoding["road"] and distances[row][col] != 1:
        if grid[row][col] == db.gridEncoding[freeSlot[isDisabled]] and (minDist == -1 or distances[row][col] < minDist):
            minDist = distances[row][col]
            targetRow = row
            targetCol = col
        return

    dfsInner(grid, row + 1, col, isDisabled, distances[row][col])
    dfsInner(grid, row, col + 1, isDisabled, distances[row][col])
    dfsInner(grid, row - 1, col, isDisabled, distances[row][col])
    dfsInner(grid, row, col - 1, isDisabled, distances[row][col])


# test
dfs(db.grid, db.startRow, db.startCol, db.isDisabled)
addNewLines(distances)
print(targetRow, targetCol)
