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

function stringSearch (str) {
  let count = 0;
  let searchTerm = 'omg'

  for (let i = 0; i < str.length; i++) {
    console.log(`str: ${str[i]}`);
      for (let j = 0; j < searchTerm.length; j++) {
        if (str[i] === searchTerm[j]) {
          console.log(`searchTErm: ${searchTerm[j]}`);
        }
      }
  }

}

stringSearch('omgsfomslfkgfsklomg')