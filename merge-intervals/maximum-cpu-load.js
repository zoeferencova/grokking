// We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. 
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

// My solution
class Job {
    constructor(start, end, cpu_load) {
        this.start = start;
        this.end = end;
        this.cpu_load = cpu_load;
    }
};
  
const find_max_cpu_load = function(jobs) {
    jobs.sort((a, b) => a.end - b.end);
    let maxLoad = jobs[0].cpu_load;
    let currentLoad = jobs[0].cpu_load;
    let windowStart = 0;
    for (let windowEnd = 1; windowEnd < jobs.length; windowEnd++) {
        while (jobs[windowStart].end <= jobs[windowEnd].start) {
            currentLoad -= jobs[windowStart].cpu_load;
            windowStart++;
        } 
        currentLoad += jobs[windowEnd].cpu_load;
        maxLoad = Math.max(currentLoad, maxLoad)
    }
    return maxLoad;
};
  
  
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
    [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
    [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
    [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)


// Given solution
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}

function find_max_cpu_load(jobs) {
    // sort the jobs by start time
    jobs.sort((a, b) => a.start - b.start);

    let maxCPULoad = 0, currentCPULoad = 0;
    const minHeap = new Heap([], null, ((a, b) => b.end - a.end));

    for (j = 0; j < jobs.length; j++) {
        // remove all the jobs that have ended
        while (minHeap.length > 0 && jobs[j].start >= minHeap.peek().end) {
        currentCPULoad -= minHeap.pop().cpuLoad;
        }
        // add the current job into min_heap
        minHeap.push(jobs[j]);
        currentCPULoad += jobs[j].cpuLoad;
        maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
    }
    return maxCPULoad;
}


console.log(`Maximum CPU load at any time: ` +
  `${find_max_cpu_load([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`);
console.log(`Maximum CPU load at any time: ` +
  `${find_max_cpu_load([new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`);
console.log(`Maximum CPU load at any time: ` +
  `${find_max_cpu_load([new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`);

// Time complexity: O(N log(N))
// Space complexity: O(N)