// Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

// My solution - sliding window
const min_meeting_rooms = function(meetings) {
    meetings.sort((a, b) => a.end - b.end);
    let minRooms = 1;
    let windowStart = 0;
    for (let windowEnd = 1; windowEnd < meetings.length; windowEnd++) {
        if (meetings[windowStart].end > meetings[windowEnd].start) {
            minRooms++;
        } else if (windowEnd - windowStart > 1 && windowEnd !== meetings.length-1) {
            minRooms--;
            windowStart++;
        }
    }
    
    return minRooms;
};

// Given solution
function min_meeting_rooms(meetings) {
    // sort the meetings by start time
    meetings.sort((a, b) => a.start - b.start);
  
    let minRooms = 0, minHeap = new Heap([], null, ((a, b) => b.end - a.end));
    for (i = 0; i < meetings.length; i++) {
        // remove all the meetings that have ended
        while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
            minHeap.pop();
        }
        // add the current meeting into min_heap
        minHeap.push(meetings[i]);
        // all active meetings are in the min_heap, so we need rooms for all of them.
        minRooms = Math.max(minRooms, minHeap.length);
    }
    return minRooms;
}

// Time complexity: O(N log(N))
// Space complexity: O(N)