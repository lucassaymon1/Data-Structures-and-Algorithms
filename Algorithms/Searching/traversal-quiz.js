// If you know a solution is not far from the root of the tree:

// R: breadth first search, because it can go directly through the path where the element is located, without need to go very deep in the tree.

// If the tree is very deep and solutions are rare:

// R: breadth first search. If the tree is very deep, depth first search would traverse a lot of elements at once, and would take long to do so

// If the tree is very wide:

// R: depth first search. BFS would take much memory by copying every children.

// If solutions are frequent but located deep in the tree:

// R: depth first search. because if we'd take long to arrive on the bottom of the tree and starting find the solutions, wasting memory on the process.

// Determining whether a path exists between two nodes:

// R: depth first search. because of its algorithm involves find the direct paths between nodes.

// Finding the shortest path:

// R: Depth first search, because its implementation involves following a strait path down to the deep of the tree, in this way we could find the shortest path to a solution.
