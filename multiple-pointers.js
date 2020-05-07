// write  a function called sumZero which accepts a SORTED array of integers
// the function should ifnd the first pair where the sum is 0, else return undefined

// SOLUTION 1
  // O(N^2) quadratic
function sumZero (arr) {
  for (let i = 0; i < arr.length; i++) {
    // i at 0, is going to trigger a FULL LOOP of j

    for (let j = i + 1; j < arr.length; j++) {
      // this goes 1,2,3,4,5,6
        // on 6, we get success
        // if there was no match, i would go from 0 to 1
        // then repeat
      if(arr[i] + arr[j] === 0) {
        console.log('success');
        return [arr[i], arr[j]];
      }

    }
  }
}

// sumZero([-3, -2, -1, 0, 1, 2 ,3])

// SOLUTION 2
  // O(N) - linear

function sumZero2 (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];

    console.log(sum);

    if (sum === 0) {
      console.log('success');
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10])