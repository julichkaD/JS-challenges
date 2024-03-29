function arraySum(num) {
    if(num.length === 0) {
        return 0;
    }
    return num[0] + arraySum(num.slice(1));
   
}

module.exports = arraySum;
