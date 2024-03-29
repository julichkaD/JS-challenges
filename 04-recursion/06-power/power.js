// function power(base, exponent) {
//     return base ** exponent;
// }
function power(base, exponent) {
    if(exponent === 0){
        return 1;
    }
    return base * power(base, exponent-1);
}

module.exports = power;
