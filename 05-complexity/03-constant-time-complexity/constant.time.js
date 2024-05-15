/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

function accessEl(arr, index) {
  return arr[index];
}
const arr1 = [1, 2, 3, 4];
console.time("Access Element 1");
console.log(accessEl(arr1, 2));
console.timeEnd("Access Element 1");

const arr2= Array.from({ length: 10000}, (_, index)=> index+1);
console.time("Access Element 100");
console.log(accessEl(arr2, 100));
console.timeEnd("Access Element 100");