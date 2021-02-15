function linearSearch(arr, val) {
  arr.map((item, idx) => {
    if (item === val) {
      console.log(idx);
      return idx;
    }
    return -1;
  });
}

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.round((right + left) / 2);

  // while the middle is not equal to val, and the start is less than the end
  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.round((right + left) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4);

function stringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // console.log(short[j], long[i + j]);
      if (short[j] !== long[i + j]) {
        // console.log('break');
        break;
      }
      if(j === short.length - 1) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

stringSearch('omgsfomslfkggfsklomg', 'omg');
