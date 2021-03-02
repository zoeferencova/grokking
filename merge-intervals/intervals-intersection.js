// Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

// My solution
const merge = function(intervals1, intervals2) {
    let result = [];
    for (let i = 0; i < intervals2.length; i++) {
        const currentInterval = intervals2[i];
        let j = 0;
        while (intervals1[j].end <= currentInterval.start) {
            j++;
        }
        let nextInterval = intervals1[j];
        while (nextInterval !== undefined && nextInterval.start <= currentInterval.end) {
            result.push(new Interval(Math.max(currentInterval.start, nextInterval.start), Math.min(currentInterval.end, nextInterval.end)))
            j++;
            nextInterval = intervals1[j];
        }
    }
    return result;
};

// Given solution
function merge(intervals_a, intervals_b) {
    let result = [],
      i = 0,
      j = 0;
  
    while (i < intervals_a.length && j < intervals_b.length) {
        // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
        a_overlaps_b = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;
    
        // check if intervals overlap and intervals_a[j]'s start time lies within the other intervals_b[i]
        b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;
    
        // store the the intersection part
        if (a_overlaps_b || b_overlaps_a) {
            result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start),
            Math.min(intervals_a[i].end, intervals_b[j].end)));
        }
        // move next from the interval which is finishing first
        if (intervals_a[i].end < intervals_b[j].end) {
            i += 1;
        } else {
            j += 1;
        }
    }
  
    return result;
}

// Time complexity: O(N+M)
// Space complexity: O(1)