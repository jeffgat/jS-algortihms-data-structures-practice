function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  // this is comparing arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }

    // these 2 while loops just run unconditionally because we've hit the end of one array
    // therefore we can just push the tail end of the other array onto the one we've finished looping through
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      results.push(arr1[j]);
      j++;
    }
  }

  return results;
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  // recursive cases
  // going to keep looping through these until they split into single elements
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log(merge(left, right));
  return merge(left, right);
}

// mergeSort([10, 24, 76, 73, 72, 1, 9]);

exports.mergeSort = mergeSort;
