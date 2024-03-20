function isPalindrome(word) {
  let formattedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedWord = formattedWord.split("").reverse().join("");

  for (let i = 0; i <= word.length; i++) {
    if (reversedWord === formattedWord) {
      return true;
    } else {
      return false;
    }
  }
}


module.exports = isPalindrome;
