function permutations(str) {
  let result = [];
  if (str.length === 0) {
    result.push("");
    return result;
  }
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfStr = str.slice(0, i) + str.slice(i + 1);
    const subPermut = permutations(restOfStr);

    for (let j = 0; j < subPermut.length; j++) {
      result.push(firstChar + subPermut[j]);
    }
  }
  return result;
}

module.exports = permutations;
