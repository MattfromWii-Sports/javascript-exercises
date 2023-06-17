const palindromes = function (a) {
    aRev = a.toLowerCase().replace(/[.,!? ]/g, '');
    return aRev == aRev.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;
