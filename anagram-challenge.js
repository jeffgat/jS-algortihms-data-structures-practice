//// PROBLEM ================================================
  // given two strings, write a function to determine if the second string is an anagram of the first

//// MY SOLUTION ================================================
function validAnagram (str1, str2) {

  if (str1.length !== str2.length) {
    console.log("this is NOT an anagram");
    return false
  };

  let word1 = {}
  let word2 = {}

  let string1 = str1.split('')
  let string2 = str2.split('')

  string1.map(ltr => {
    word1[ltr] = (word1[ltr] || 0 ) + 1;
  });

  string2.map((ltr) => {
    word2[ltr] = (word2[ltr] || 0) + 1;
  });
  
  for(let key in word1) {
    if(word1[key] !== word2[key]) {
      console.log('this is NOT an anagram');
      return false
    }
  }
  console.log('this IS an anagram!');
  return true
}

validAnagram('dude', 'edud')


//// SOLUTION ================================================

function validAnagram(first, second) {
  if (first.length !== second.length) {
    console.log("this is NOT an anagram");
    return false;
  }

// so here he only makes one object
  const lookup = {};

// he populates the object with this incrementing loop
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
// now he has an object with that has the occurence amount of each letter

// he uses this loop to match each letter from the second word and bring the values down to zero
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero, then it's not an anagram
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -=1;
    }
    return true
  }

}

// my solution took 3 loops, his took 2.


validAnagram("dude", "edud");