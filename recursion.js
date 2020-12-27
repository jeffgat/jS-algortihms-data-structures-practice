function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(4);

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// exponent is like the counter
function power(base, exponent) {
  if (exponent === 0) return 1;

  console.log(`base: ${base}`);
  console.log(`exponent: ${exponent}`);

  // i'm returning base until exponent === 0
  // so power(2, 4) === 2*2*2*2
  return base * power(base, exponent - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

function sumZero2(arr) {
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
