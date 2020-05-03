// PROBLEM ================================================
  // write a function called same
    // it accepts 2 arrays
    // returns true is every value in the array has it's corresponding value squared in the scond array
    // frequency of values must be the same

// SOLUTION 1 ================================================
  // N^2 - nested loops

function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1)
  }
  console.log('success!');
  return true;
}
same([1,2,3, 2], [9,4,1,4])

// SOLUTION 2 ================================================
  // O(n) - multiple but separate loops

function same2 (arr1, arr2) {
  // if the the array lengths are diff its false
  if(arr1.length !== arr2.length) {
    return false;
  }

  // declare our empty objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // loop through array
  for(let val of arr1) {
    // + 1 to frequencyCounter, if does not exist, start it off at 1
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  console.log('success!');
  return true
}

same2([1,2,3,2,6], [9,1,4,4,29])

// BY THE WAY BRACKET NOTATION object[value] CAN BE USED JUST LIKE DOT NOTATION object.value
  // dot notation:
    // CANNOT contain VARIABLES
    // cannot start with a number
    // can only be alphanumeric

  // bracket notation:
    // CAN use variables, spaces, strings
    // have to be a string or variable that references a string

    