const sumAll = function(a, b) {
    let sum=0;
    if (typeof a == 'number' && typeof b == 'number' && a >= 0 && b >= 0) {
        if (a <= b) {
            for (let i = a; i <= b; i++) {
                sum = sum + i;
            }

        } else {
            for (let i = b; i <= a; i++) {
                sum = sum + i;
            }
        }
        return sum;
    } else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
