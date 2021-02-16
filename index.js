const express = require('express');
const merge = require('./merge-sort');

const port = 4000;
const app = express();

merge.mergeSort([10, 24, 76, 73]);

app.listen(port),
  () => {
    console.log('server started on localhost:4000');
  };
