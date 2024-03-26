// function generateHashtag(str) {
//   if (str.trim() === "") {
//     return false;
//   }
//   let hashtag = str
//     .trim()
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join("");

//   return hashtag.length > 140 ? false : `#${hashtag}`;
// }
function generateHashtag(str) {
  let hashtag = str.split(" ").reduce((acc, word) =>{
    return acc + word.charAt(0).toUpperCase() + word.slice(1) 
  }, "#")
  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
