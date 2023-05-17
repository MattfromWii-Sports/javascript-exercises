const fibonacci = function(a) {
    if (a < 0) return 'OOPS';
    if (a == 0) return 0;
    let num1 = 0;
    let num2 = 1;
    let sumN = 1;
    for (i=1; i<a; i++) {
        sumN = num1 + num2;
        num1 = num2;
        num2 = sumN;
    }
    return sumN;
};

// Do not edit below this line
module.exports = fibonacci;
