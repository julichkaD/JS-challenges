function areAllCharactersUnique(arr) {
   let uniqueSet = new Set(arr);

   if(uniqueSet.size === arr.length) {
    return true;
   }else{
    return false;
   }
}

module.exports = areAllCharactersUnique;
