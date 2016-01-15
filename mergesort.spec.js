describe('Merge Sort', function(){
   it('is able to merge two sorted arrays', function(){
      expect(merge([4, 23],[8, 15])).toEqual([4,8,15,23]);
   });
});

describe('Split Array function', function() {
 it('is able to split an array into two halves', function() {
   expect(split([11, 15, 8, 50])).toEqual([[11, 15], [8, 50]]);
 });
});

describe('mergeSort Array', function() {
	it('takes in an array and returns a sorted array', function() {
	   	expect(mergeSort([4, 23, 8, 15])).toEqual([4, 8, 15, 23]);
	    expect(mergeSort([11, 15, 8, 2])).toEqual([2, 8, 11, 15]);
	   	expect(mergeSort([65, 23, 92, 14, 1, 305, 88, 18])).toEqual([1,14,18,23,65,88,92,305]);
	   	expect(mergeSort([65, 23, 92, 14, 1, 88, 18])).toEqual([1,14,18,23,65,88,92]);
	});
});
describe('mergeSort Array', function() {
	it('takes in an array of one or none', function() {
	   	expect(mergeSort([8])).toEqual([8]);
	   	expect(mergeSort([])).toEqual([]);
	});
});
//make a spy to make sure the merge works recursively
describe('mergeSort Array', function() {
	it('takes in an array of one or none', function() {
	   	expect(mergeSort([8])).toEqual([8]);
	   	expect(mergeSort([])).toEqual([]);
	});
});

describe('recursive approach', function() {
	it('calls itself recursively times', function() {
	    spyOn(window, 'merge').and.callThrough();
	    merge([0,1],[2,3]);
	    expect(merge.calls.count()).toEqual(2);
	    merge([0,3,5],[2,4,6]);
	    expect(merge.calls.count()).toEqual(7);
    });
});
//SOLUTION IN CLASS
// 'use strict';
// /* global mergeSort split merge */

// describe('Merge sort', function () {

//   describe('split', function () {

//     it('given one array, returns two arrays', function () {
//       expect(split([])).toEqual([[], []]);
//     });

//     it('splits array of even length', function () {
//       expect(split([5, 10])).toEqual([[5], [10]]);
//     });

//     it('splits array of odd length', function () {
//       expect(split([4, 10, 20])).toEqual([[4], [10, 20]]);
//     });

//   });

//   describe('merge', function () {

//     it('given two arrays, returns an array', function () {
//       expect(merge([], [])).toEqual([]);
//     });

//     it('given two already sorted arrays of equal length, returns sorted result array', function () {
//       expect(merge([1, 5, 10], [2, 4, 11])).toEqual([1, 2, 4, 5, 10, 11]);
//       expect(merge([1, 9, 10], [2, 3, 8])).toEqual([1, 2, 3, 8, 9, 10]);
//     });

//     it('works for arrays of unequal length', function () {
//       expect(merge([1, 5, 10, 20, 21], [2, 4, 100])).toEqual([1, 2, 4, 5, 10, 20, 21, 100]);
//     });

//   });

//   describe('mergeSort', function () {

//     it('with 1 or fewer elements, returns sorted array', function () {
//       expect(mergeSort([])).toEqual([]);
//       expect(mergeSort([1000])).toEqual([1000]);
//     });

//     it('does the thing its suppoed to do', function () {
//       var sorted = mergeSort([9, 1994, 18, 1, -90, 1234, 56]);
//       expect(sorted).toEqual([-90, 1, 9, 18, 56, 1234, 1994]);
//     });

//   });

// });
