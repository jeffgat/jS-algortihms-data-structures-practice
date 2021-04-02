class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (element <= parent) break;
      
      this.values[parentIdx] = element;
      this.values[idxparentIdx] = parent;
      idx = parentIdx;
    }
  }
}
