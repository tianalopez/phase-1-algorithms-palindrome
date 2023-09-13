function isPalindrome(word) {
  let backwards = "";
  for (let i = word.length - 1; i >= 0; i--)  {
    backwards = backwards + word[i];
  }
  if (word === backwards) {
    return true;
  }
  else {
    return false;
  }
}

/*
  Add your pseudocode here
  define a function isPalindrome that takes in one parameter "word"
  initialize an empty string
  iterate over each letter in "word", starting with the last letter and decreasing each time
  (i--)
  concatenate the letter with the empty string
  if statement, where if the word matches the empty string
  return true
  else return false
*/

/*
  Add written explanation of your solution here
  Creates a function that checks if a string is a palindrome by comparing the original string to a new string of the backwards letters
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("anna"));

  console.log("Expecing: false");
  console.log("=>", isPalindrome("potato"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
