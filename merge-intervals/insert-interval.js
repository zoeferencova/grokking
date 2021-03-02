// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

// My solution
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
  
    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}
  
const insert = function(intervals, new_interval) {
    let merged = [];
    let next = 0;
    while (intervals[next].end < new_interval.start) {
        merged.push(intervals[next]);
        next++;
    }
  
    while (intervals[next] !== undefined && intervals[next].start <= new_interval.end) {
        new_interval.start = Math.min(intervals[next].start, new_interval.start);
        new_interval.end = Math.max(intervals[next].end, new_interval.end);
        next++;
    }
  
    merged.push(new_interval);
    for (let i = next; i < intervals.length; i++) {
        merged.push(intervals[i]);
    }
    return merged;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
new Interval(1, 3),
new Interval(5, 7),
new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
new Interval(1, 3),
new Interval(5, 7),
new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

// Given solution
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
  
    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}
  
function insert(intervals, new_interval) {
    let merged = [], i = 0;
  
    // skip and add to output) all intervals that come before the 'new_interval'
    while (i < intervals.length && intervals[i].end < new_interval.start) {
        merged.push(intervals[i]);
        i += 1;
    }
  
    // merge all intervals that overlap with 'new_interval'
    while (i < intervals.length && intervals[i].start <= new_interval.end) {
        new_interval.start = Math.min(intervals[i].start, new_interval.start);
        new_interval.end = Math.max(intervals[i].end, new_interval.end);
        i += 1;
    }
  
    // insert the new_interval
    merged.push(new_interval);
  
    // add all the remaining intervals to the output
    while (i < intervals.length) {
        merged.push(intervals[i]);
        i += 1;
    }
  
    return merged;
}

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
new Interval(1, 3),
new Interval(5, 7),
new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
new Interval(1, 3),
new Interval(5, 7),
new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
    result[i].print_interval();
}
console.log();

// Time complexity: O(N)
// Space complexity: O(N)