function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);

  let missedChar = arr
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }
      start = current;
      return false;
    });
  return missedChar ? String.fromCharCode(missedChar - 1) : "";
}

module.exports = findMissingLetter;
