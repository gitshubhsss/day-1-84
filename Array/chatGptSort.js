// Sample array
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Implementing bubble sort without using functions
var len = arr1.length;
for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
        if (arr1[j] > arr1[j + 1]) {
            // Swap the elements
            var temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
        }
    }
}

// Printing the sorted array
console.log("sorted array " + arr1);
