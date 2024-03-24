// function formatPhoneNumber(arr) {
//   let firstNum = arr.slice(0,3).join('');
//   let middleNum = arr.slice(3, 6).join("");
//   let lastNum = arr.slice(6).join("");

//   return `(${firstNum}) ${middleNum}-${lastNum}`;
  
// }

 function formatPhoneNumber(arr) {
    let formattedArr = arr.join('');
    return `(${formattedArr.substring(0, 3)}) ${formattedArr.substring(3, 6)}-${formattedArr.substring(6)}`;
    
 }

module.exports = formatPhoneNumber;

// "(123) 456-7890";
