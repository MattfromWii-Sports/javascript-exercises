const palindromes = function (a) {
    aRev = a.split('').reverse().join('').toLowerCase().replace(/[.,!? ]/g, '');
    return (aRev == a.toLowerCase().replace(/[.!?, ]/g, '')) ? true : false;
}

// Do not edit below this line
module.exports = palindromes;
