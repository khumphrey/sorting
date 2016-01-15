var merge = function(array, array2) {
    var arrOut = [];
    if(array[0]>array2[0]){arrOut.push(array2.shift());}
    else{arrOut.push(array.shift());} //with shift we are using memory to shift and making this the worst kind of time case for a mergesort
    if(!array.length || !array2.length) {
        return arrOut.concat(array).concat(array2);
    }
    arrOut = arrOut.concat(merge(array, array2));
    return arrOut;
};

var split = function(wholeArray){
    if(wholeArray.length===1) {return wholeArray;}
    var sliceSpot = Math.ceil(wholeArray.length/2);
    return [wholeArray.slice(0,sliceSpot), wholeArray.slice(sliceSpot)]; // don't need to do Math.ceil because slice does Math.floor naturally
};
var mergeSort = function (array) {
    if(array.length<2) return array;
    return merge(mergeSort(split(array)[0]),mergeSort(split(array)[1])); 
}

// //SOLUTION IN CLASS
// 'use strict';

// function mergeSort (array) {
//   if (array.length < 2) return array; // base case
//   var splits = split(array),
//       left = splits[0],
//       right = splits[1];
//   return merge(mergeSort(left), mergeSort(right)); // merge sorted!
// }

// function split (array) {
//   var center = array.length / 2;
//   var left = array.slice(0, center);
//   var right = array.slice(center);
//   return [left, right];
// }

// function merge (left, right) {
//   var merged = [],
//       leftIdx = 0,
//       rightIdx = 0,
//       leftVal,
//       rightVal;
//   // admittedly pretty convoluted; but we do this in order to avoid shift.
//   while (leftIdx < left.length || rightIdx < right.length) {
//     leftVal = left[leftIdx];
//     rightVal = right[rightIdx];
//     if (leftVal < rightVal || rightVal === undefined) {
//       merged.push(leftVal);
//       leftIdx++;
//     } else {
//       merged.push(rightVal);
//       rightIdx++;
//     }
//   }
//   return merged;
// }
