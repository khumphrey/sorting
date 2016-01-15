'use strict';
var bubbleSort = function(array){
    bubbleSort.counter = 0;
    //you can name for loops -- this is not usually used, but helpful so you can break out of a specific loop
    passes: for (var j = array.length - 1; j > 0; j--) {
        var switched = false;
        for (var i = 0; i <= j; i++) {
            //instead of this and the counter we could make a new function to do this so we can spy on it
            if(array[i]>array[i+1]){
                bubbleSort.counter++;
                switched = true;
                var store = array[i];
                array[i] = array[i+1];
                array[i+1] = store;
            }
        }
        if(!switched) {return array;}
    }

    return array;
};
//this is off somewhere watch later and fix
// function bubbleSort (array) {
//   var sorted = false;
//   for (var end = array.length; end > 0 && !sorted; end--) { // passes
//     sorted = true; // assume until proven incorrect
//     for (var j = 0; j < end; j++) { // bubbling
//       if (!inOrder(array, j)) {
//         swap(array, j);
//         sorted = false;
//       }
//     }
//   }
//   return array;
// }
// function inOrder(array, index) { //pure function
//     if(index === array.length -1 ) return true;
//     return array[index] < array[index+1];
// }

// function swap(array, index) { //array is passed by reference so this function has side effects and the array doesn't need to be returned
//     var oldLeftVal = array[index];
//     array[index] = array[index+1]
//     array[index+1] = oldLeftVal;
// }