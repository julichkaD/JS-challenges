function numberRange(startNum, endNum) {
 if(startNum === endNum) {
    return [startNum];
 }
 let numbers = numberRange(startNum, endNum-1);
 numbers.push(endNum);
 return numbers;
 console.log(numbers)
}

module.exports = numberRange;
