class WeightedGraph {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjancencyList[v1].push({ node: v2, weight });
    this.adjancencyList[v2].push({ node: v1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distsances = {};
    const previous = {};
    let smallest;

    for (let vertex in this.adjancencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbour in this.adjancencyList[smallest]) {
          let nextNode = this.adjancencyList[smallest][neighbour];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbour = nextNode.node;
          if (candidate < distances[nextNeighbour]) {
            distances[nextNeighbour] = candidate;
            previous[nextNeighbour] = smallest;
            
          }
        }
      }
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
