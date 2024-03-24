function sumOfEvenSquares(arr) {
  const sumEvenNums = arr
  .filter((num) => num % 2 ===0)
  .map((num) => num ** 2)
  .reduce((acc, currentValue) => acc + currentValue,0);
  return sumEvenNums;
}

module.exports = sumOfEvenSquares;
