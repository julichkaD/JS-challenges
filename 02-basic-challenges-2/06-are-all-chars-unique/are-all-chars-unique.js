function areAllCharactersUnique(arr) {
  let uniqueSet = new Set(arr);
  if (arr.length !== uniqueSet.size) {
    return false;
  } else {
    return true;
  }
}

module.exports = areAllCharactersUnique;
