# Data Strictures and Algorithms repository

This will be the documentation of my learning proccess of data structures and algorithms. This repository will be covering since my DSA implementations until exercises that uses these concepts.
Here some of the concepts i've learned until now:

## Big O Notation
It concerns to the complexity that will be required from a algorithm to acomplish a process. the complexity can be typed in two ways:
### Time Complexity
The amount of time that will require from an algorithm to complete a task. There are some things to consider when it comes to time complexity. Its important to avoid Time complexity that is bigger than O(n). With "O" being the amount of time to finish code execution and "n" being the number of operations in the program.

For convention, if the program has a constant number of iterations, the Big O of it will be O(1). in the same way, for programs that have the time complexity of O(3n), the notation can be simplified to O(n). Usually, the program has a O(n) complexity when the number of operations is given by the size of the entry.

Example: given an entry of [1,2,6,5,5,7,9] for a program that must find the first recurring number in the array. the worst case scenario for a O(n) algorithm to finish running would be O(7), that correspond to the size of the array.
### Space Complexity
Space complexity is related to the amount of memory needed to execute an algorithm. Usually space complexity and time complexity act together to find the equilibrium between both of them. Space complexity can be used to improve time complexity and vice versa.
Example: Hash Tables can be used to store data that will be verified later by an algorithm, reducing the amount of operations that the algorithm would have to do comparing all possible data (O(n^2) algorithms). In this way, the program trades space complexity to O(n), to have a time complexity of O(n)
### Bad Big O complexity
## Data Structures
### Arrays
### Hash Tables
### LinkedLists
