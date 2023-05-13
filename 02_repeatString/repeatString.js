const repeatString = function(string, num) {
    let answerAdded='';
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i=0; i < num; i++) {
            answer=string + answerAdded;
            answerAdded=answer;
        }
        return answerAdded;
    }
};

// Do not edit below this line
module.exports = repeatString;
