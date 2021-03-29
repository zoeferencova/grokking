// Given a set of investment projects with their respective profits, we need to find the most profitable projects. 
// We are given an initial capital and are allowed to invest only in a fixed number of projects. 
// Our goal is to choose projects that give us the maximum profit. 
// Write a function that returns the maximum total capital after selecting the most profitable projects.

// We can start an investment project only when we have the required capital. Once a project is selected, we can assume that its profit has become our capital.

// Solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

const find_maximum_capital = function(capital, profits, numberOfProjects, initialCapital) {
  const maxProfitHeap = new Heap([], null, ((a, b) => a[0] - b[0]));
  const minCapitalHeap = new Heap([], null, ((a, b) => b[0] - a[0]));
  capital.forEach((el, i) => minCapitalHeap.push([el, i]));

  let availableCapital = initialCapital;
  for (let i = 0; i < numberOfProjects; i++) {
    while (minCapitalHeap.length > 0 && minCapitalHeap.peek()[0] <= availableCapital) {
      const projectIndex = minCapitalHeap.pop()[1]
      maxProfitHeap.push([profits[projectIndex], projectIndex]);
    }

    if (maxProfitHeap.length === 0) break;

    availableCapital += maxProfitHeap.pop()[0];
  }
  return availableCapital;
};


console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`)
console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`)

// Time complexity: Since, at the most, all the projects will be pushed to both the heaps once, 
// the time complexity of our algorithm is O(NlogN + KlogN), where ‘N’ is the total number of projects and ‘K’ is the number of projects we are selecting.

// Space complexity: O(N)