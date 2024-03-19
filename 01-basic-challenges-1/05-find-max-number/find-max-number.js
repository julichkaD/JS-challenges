// function findMaxNumber(arr) {
//     return Math.max(...arr);
// }

function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = findMaxNumber;
