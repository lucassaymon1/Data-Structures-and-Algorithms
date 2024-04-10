// #1 - Sort 10 schools around your house by distance:

// R: Insertion sort, Because its simple to implement and it won't have trouble when sorting small inputs.

// #2 - eBay sorts listings by the current Bid amount:

// R: Radix sort if the bids would not have decimals, otherwise, quick sort would be the choise

// #3 - Sport scores on ESPN:

// R: Quick sort. If scores are not decimals, then radix sort.

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data:

// R: Merge Sort. if data can't be stored on memory. merge sort can sort and return data outside its memory. Otherwise quick sort would be a better solution.

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews:

// R: Selection sort, because of its great time complexity when dealing with almost sorted data, and its simplicity to implement.

// #6 - Temperature Records for the past 50 years in Canada:

// R: Merge sort, because its a very stable algorithm when it comes to time complexity, despite any minor temperatures tendencies on the input. If temperatures are not decimal, i would go for radix sort, because of its more eficiency of time complexity, dealing with integers, in comparasion with the other most eficient ones.

// #7 - Large user name database needs to be sorted. Data is very random:

// R Quick Sort, because of it's low cost of memory, and stable time complexity when dealing with very random data.

// #8 - You want to teach sorting for the first time:

// R: Bubble sort. It is very simple to implement and to understand concepts, and that is because it deals with only one type of operation: compare the current element with the next one, and if the next is smaller, just swap those two.
