function generateArray (size, lower, upper) {
    var randomArray = [];
    while (size--) {
        var randomNum = Math.floor(lower+Math.random()*upper);
        randomArray.push(randomNum);
    }
    return randomArray;
}
function numerically (a,b) {return a-b;}
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect(bubbleSort([])).toEqual([]);
    });
    //ToBe is a strict comparitor so these would fail if using that
    //toEqual is a loose comparitor
    it('sorts one single element', function(){
        expect(bubbleSort([-3])).toEqual([-3]);
    });

    it('sorts two element arrays', function(){
        expect(bubbleSort([23, 15])).toEqual([15, 23]);
    });
    it('sorts many element arrays', function(){
        expect(bubbleSort([4, 23, 8, 15, 1, 65, 32, 18, 10])).toEqual([1, 4, 8, 10, 15, 18, 23, 32, 65]);
    });

    it('when sorting it switches items the correct number of times', function(){
        bubbleSort([4, 23, 8, 15]);
        expect(bubbleSort.counter).toEqual(2);
    });

    for (var i = 2; i<103; i+=20) {
        it('sorts and array of ' + i + ' random items', function(){
            var arr = generateArray(i, 0, 100);
            var sorted = arr.slice(0).sort(numerically); //you have to to use slice because arrays are by reference so you need to make a new array
            expect(bubbleSort(arr)).toEqual(sorted)
        });
    }

    // it ('compares the expected number of times', function() {
    //     spyOn(window, 'inOrder').and.callThrough(); //this replaces the inOrder function with a new function that wraps it but we have to make sure it calls the other
    //     bubbleSort([4,6,5,1]);
    //     expect(inOrder.calls.count()).toEqual(10)
    // });
    // it ('swaps the expected number of times', function() {
    //     spyOn(window, 'swap').and.callThrough(); //this replaces the swap function with a new function that wraps it but we have to make sure it calls the other
    //     bubbleSort([4,6,5,1]);
    //     expect(swap.calls.count()).toEqual(4)
    // });
  // function spyOn (obj, method) {
  //   var counter = 0;
  //   var spy = function () {
  //     counter++;
  //   }
  //   obj[method] = spy;
  //   spy.calls = {
  //     count: function() { return counter; }
  //   };
  // }

});