function calculator(a, b, operator) {
    if(operator === "+") {
        return a + b;
    }else if(operator === "-") {
        return a - b;
    } else if(operator === "/") {
        return a / b;
    } else if(operator === "*") {
        return a * b;
    }else {
       return  new Error("Invalid operator")
    }
}

module.exports = calculator;
