// 6kyu Mexican Wave

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Steps:
// 1. Initialize array to hold final results
// 2. iterate over string
// 3. If character == " ", skip it
// 4. If its a char, push to the array > starting slice + Uppercased letter + ending slice

// Solution One - Standard for loop
function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter == " ") {
      continue;
    } else {
      result.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
    }
  }

  return result;
}

console.log(wave("hello"));

// Solution Two - Using forEach and regex tetsing
function waveOne(str) {
  let result = [];

  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });

  return result;
}
console.log(waveOne("hello"));
