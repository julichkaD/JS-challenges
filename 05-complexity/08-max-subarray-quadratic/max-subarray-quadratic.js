function maxSubarraySum(arr, k) {
  let sumArr = -Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    sumArr = Math.max(sumArr, currentSum)
  }
  return sumArr;
}

module.exports = maxSubarraySum;
