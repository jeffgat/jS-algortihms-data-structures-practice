const express = require('express');
const merge = require('./merge-sort');
const quick = require('./quick-sort');
const radix = require('./radix-sort');
const nodes = require('./singly-linked-list');

const port = 4000;
const app = express();

// merge.mergeSort([10, 24, 76, 73]);
// quick.quickSort([4, 8, 2, 1, 5, 7, 6, 3])
// radix.radixSort([23, 345, 5467, 12, 2345, 9852])
let list = new nodes.SinglyLinkedList('hi');
list.push('hello')
list.push('goodbye')
list.push('maybe')
list.push('suh')
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);

app.listen(port),
  () => {
    console.log('server started on localhost:4000');
  };
