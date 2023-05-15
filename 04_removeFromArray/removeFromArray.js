const removeFromArray = function(arrayInput, ...args) {
    arrayFilter=arrayInput.filter(x => !args.includes(x))
    return arrayFilter;
};

// Do not edit below this line
module.exports = removeFromArray;
