# **COMPARISON OF ALGORITHMS**

## **INTRODUCTION**
### **1. Task.**
Find and reconstruct the shortest path from an entrance to the closest free slot in parking.

### **2. Comparison.**
Compare different approaches given the context of a parking.
<br> Different **graph representation**: adjacency list, adjacency matrix or table.
<br> Different **algorithms** given the representation: BFS/DFS, Dijkstra, Manhattan distance, precomile.

### **3. Implemention.**
Only **Dijkstra** is impelmented. The others just have been considered and are to be implemented.

### **4. Notation.**
**V** - number of vertexes
<br> **E** - number of edges
<br> By saying that the edges are with **weight of K**, I mean that they are all the same, which is equivalent to the graph being unweighted.
 
### **5. Literature.**
https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
<br> https://stackoverflow.com/questions/50856391/what-is-the-space-complexity-of-dijkstra-algorithm
<br> https://github.com/manmaybarot/algorithms-data-structures/blob/master/graph/directed-graph/sp_dijkstra.py
<br> https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/
<br> https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
<br> https://www.geeksforgeeks.org/printing-paths-dijkstras-shortest-path-algorithm/
<br> https://stackoverflow.com/questions/26547816/understanding-time-complexity-calculation-for-dijkstra-algorithm
<br> https://www.hackerearth.com/practice/algorithms/graphs/shortest-path-algorithms/tutorial/#:~:text=Time%20Complexity%20of%20Dijkstra's%20Algorithm,E%20l%20o%20g%20V%20)%20.
<br><br>
##
## **IMPLEMENTATION WITH GRAPH AND ADJACENCY LIST**
**V** = number of all car slots + number of entrances + number of crossroads
<br> **E** = almost V^2 because the graph is almost full 

### **1. Additional class Edge.**

### **2. Transform the input table to the graph.**
This connects each cell to each cell.
<br> Time complexity: O(V * V)
 
### **3. Dijkstra.**
**TIME complexity:**
<br> Average: O(V + E log V)
<br> Since E = V^2: O(V + V^2 log V)
<br> 
<br> **MEMORY complexity:**
<br> Array for the paths, heap with worst-case been full with all of the edges.
<br> Average: O(V + E)
<br> Since E = V^2: O(V + V^2)
<br> 
<br> **PROS:**
<br> Useful if we use real precise measurements of the distances, but I believe this is not what really matters. The graph/table can easily be transformed by adding vertexes so all of the weight of the edges is approximately K and then BFS can be used instead.
<br> 
<br> **CONS:**
<br> Worser in time and space complexity than BFS.
<br> 
<br> **TODO:**
<br> Return the vertexes in the shortest path.

### **4. BFS.**
**TIME complexity:**
<br> Average: O(V + E)
<br> Since E = V^2: O(V + V^2)
<br> 
<br> **MEMORY complexity:**
<br> Array for the paths, queue with worst-case been full with all of the vertexes.
<br> General: O(V + V) = O(2 * V)
<br> 
<br> **PROS:**
<br> A little bit better in time than Dijkstra in terms of time and memory.
<br> 
<br> **CONS:**
<br> Works only for edges with a length of K.
<br> 
<br> **TODO:**
<br> If the graph is weighted, add additional edges so all of the edges are with a weight of K.
<br> Time complexity: O( sum(all distances different from K))
<br> Memory complexity: O(1) because it is just adding some vertexes to the adjacency list. This should not be a lot, because, in reality, just the entrance can be further, but the distances between parks slots are almost the same. However, in some weird parking slots, this perhaps wouldn't work, but still, the PC is fast enough to calculate this and is made just once, so we can consider it amortized to O(1).

### **5. Reconstructing the path.**
This part is the same for both ideas (thanks Andrej). Additionally, it needs to remember the parent of each vertex, not only the distance to it. The path would be finish, parent[finish], par[par[f]], etc. where par is short for parent and f is short for finish. Pseudocode:
<br> x = finish
<br> while(x!=start) {
<br>     print x
<br>     x = par[x]
<br> }
<br> 
<br> **TIME complexity:**
<br> Average: O(number of vertexes in the shortest path)
<br> Worst case: O(V) if all the vertexes are in the path
<br> 
<br> **MEMORY complexity:**
<br> Just one additional array is needed, so it is O(V).
 
### **6. TODO.**
Consider some optimizations in the graph. Do we need so many edges? Maybe the optimization is the variant with the table?
<br><br>
##   
## **IMPLEMENTATION WITH GRAPH AND ADJACENCY MATRIX**
**TODO:** consider this approach
<br><br>
##
## **IMPLEMENTATION WITH ENCODED GRID**
**V** = number of cells in the table
<br> **E** = V * 4 because each cell has 4 neighbours
<br> grid = table = map
 
### **1. Use Manhattan distance.**
Kind of Jiayou's idea to find the closest free space.
<br>
<br> **TIME complexity:**
<br> Average: O(free space) but the number of free spaces is less than V
<br> Worst case: O(V)
<br> 
<br> **MEMORY complexity:**
<br> Average: O(free space) but the number of free spaces is less than V
<br> Worst case: O(V)
<br> 
<br> **PROS:**
<br> Really good complexity both for time and space.
<br> 
<br> **CONS:**
<br> Works only for a really special case.
<br> 
<br> **TODO:** Some optimizations: Use a heap for the distances to the free spaces. Then time complexity for finding the closest will be O(1) but adding and removing a car will be O(log V). Still better, but requires a lot of changes. Do it later. Memory complexity is not changed.

### **2. Find a path in table - DFS/BFS.**
**TIME complexity:**
<br> Average: O(V + E)
<br> Since E = V * 4: O(V + V * 4) = O(5 * V)
<br> 
<br> **MEMORY complexity:**
<br> The additional table for remembering the used cells and queue/stack/rec.
<br> Average: O(V + E)
<br> Since E = V * 4: O(V + V * 4) = O(5 * V)
<br> 
<br> **PROS:**
<br> TODO: consider the pros
<br> 
<br> **CONS:**
<br> TODO: consider the cons
<br> 
<br> **TODO:**
<br> **0.** Finish the comparison and explanation. Compare the different constants for the different algorithms.
<br> **1.** Explain to the others the idea and integrate it into the project.
<br> **2.** Connect with the database - Jiayou.
<br> Ask Jiayo how to use the database. Create a program that connects to the database, perhaps write the information in a file, updates the file, when there is a change in the database, and update the database when the backend updates it. In this case, it is not necessary to update again the file, because updating the database should trigger updating the file.
<br> **3.** Update the database - Ady, Jayan, and Nadine.
<br> Tell them what to add to the database - the symbol encoding and the symbol grid.
The backend will give the path and the coordinates of the target slot. Add also this to the database.
<br> **4.** Implement and integrate into the backend.
<br> 
