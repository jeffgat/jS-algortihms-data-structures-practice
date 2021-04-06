class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = newNode(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (element.priority <= parent) break;

      this.values[parentIdx] = element;
      this.values[idxparentIdx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    this.values[0] = end;
    this.sikDown();
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      // heap children equation
      let leftChildIdx = 2 * idx - 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;

      // what the max value will be assigned to
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
        if (rightChild > element) {
          rightChild = this.values[rightChildIdx];
          swap = rightChildIdx;
          if (
            (swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = parentIdx;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
