function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = n*(n+1)/2;
  let currentSum = 0;

  for(let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
  }
   return expectedSum - currentSum;
}

module.exports = findMissingNumber;



