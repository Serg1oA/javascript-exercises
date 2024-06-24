const fibonacci = function(indexNumber) {
    
    if (indexNumber < 0) {
        return "OOPS";
    }
    
    const fibonacciArray = [0, 1];
    
    for (let i = 2; i <= indexNumber; i++) {
        fibonacciArray.push(fibonacciArray[i - 1]
            + fibonacciArray[i - 2]);
    }

    return fibonacciArray[indexNumber];
};

// Do not edit below this line
module.exports = fibonacci;
