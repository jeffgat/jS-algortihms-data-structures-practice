// SOLUTION 1

function maxSubarraySum (arr, num) {
  if (num > arr.length) { // if num bigger then array, no thanks
    return null;
  }
  let max = -Infinity; // max will start at -infinity in case array is all negative nums
                        // don't really get it but max will be overwritten anyway

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0; // this is our 'placeholder' var


    for (let j = 0; j < num; j++) { // this runs as many times as 'num', for 1 isntance of i
      temp += arr[i + j];
    }

    if (temp > max) { // if temp is higher than max, max takes that value now
      max = temp;
    }

  }
  return max;
}

// SOLUTION 2
function maxSubarraySum2 (arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum+= arr[i];
  }

  tempSum = maxSum;
  
  for (let i = num; i < arr.length; i++) {

    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;

}

// Sliding Window Pattern
// [1, 2, 3, 4, 5, 6, 7, 8]
//  -     -

// if 'num' is 3, we add 1 + 2 + 3
// then we 'slide' the 'window' over

// [1, 2, 3, 4, 5, 6, 7, 8]
//     -     -

// and now it is 2 + 3 + 4, and we loop till the end