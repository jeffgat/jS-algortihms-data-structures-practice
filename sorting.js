// O(n)
function bubbleSort(arr) {
  // i starts at array length
  // it's just a reverse for loop
  for (let i = arr.length; i > 0; i--) {
    // declare this to stop the loop if nothing has been swapped, because it's sorted
    let hasSwapped;
    // j runs until it hits i - 1 (length of array)
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      hasSwapped = false;
      if (arr[j] > arr[j + 1]) {
        // this sequence here is pretty much setting arr[j] to arr [j + 1] (next in the array) and vice versa
        // it's swapping them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSwapped = true;
      }
    }
    console.log('one pass through');
    if (!hasSwapped) break;
  }
  return arr;
}

bubbleSort([1, 5, 12, 2, 535, 2, 1, 4, 2]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // swap
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
