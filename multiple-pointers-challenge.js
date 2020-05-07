// create a function called count unique values
// accepts a SORTED array
// counts the unique values in the array

//// MY SOLUTION (incomplete) ================================================
function countUniqueValues(arr) {
  let positionj = 0;
  let positioni = 0;

  let i = arr[positioni];
  let j = arr[positionj + 1];

  while (i === j) {
    j = arr[positionj++];
    console.log(`j: ${j}`);
    if (j > i) {
      // move i over one
      i = arr[positioni++];

      // set i's position on array to j
      arr[positioni] = j;

      // move j over one
      j = arr[positionj++];
      console.log(j);
      console.log(i);
    }
  }
}

// countUniqueValues([1,1,1,2,3,3,4,4,5,6]);

//// SOLUTION ================================================
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  // set j at 1 index 'above' i
  for (let j = 1; j < arr.length; j++) {

    // if the numbers are diff, increment i, and set it arr[i] to arr[j]
      // when the numbers are the same, the loop just continues and this if is not executed
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}
countUniqueValues2([1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7]);
