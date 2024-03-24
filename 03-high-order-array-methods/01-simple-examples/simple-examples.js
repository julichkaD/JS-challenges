const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
let newArr = numbers.map((num)=> num * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
let sum = numbers.reduce((acc, currValue)=> acc + currValue,0);
console.log(sum)
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
 numbers.forEach((el) => console.log(el));
 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
let firstArr = numbers.find((num)=> num >3);
console.log(firstArr);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const evenNum = numbers.some((num) => num % 2===0);
console.log(evenNum);
 

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allNums = numbers.every((num)=> num < 0 );
console.log(allNums);

