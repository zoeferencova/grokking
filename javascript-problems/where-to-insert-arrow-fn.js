const getIndex = (arr, number) =>
    arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

var inputsA = [[10,5,1,3],[16,4,5]];
var inputsB = [2,13]
console.log(getIndex(inputsA[0],inputsB[0]))