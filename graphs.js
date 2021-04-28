class Graph {
  constructor() {
    this.adjancencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjancencyList[v1].push(v2);
    this.adjancencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(
      v => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjancencyList[vertex].length) {
      const adjacentVertex = this.adjancencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjancencyList = this.adjancencyList(function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjancencyList[vertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjancencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}
