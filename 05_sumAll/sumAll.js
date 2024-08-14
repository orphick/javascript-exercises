const sumAll = function (firstNumber, secondNumber) {
    let myArray = [];
    let sumOfArray = null;
    for (let i = firstNumber; i <= secondNumber; i++) {
        myArray.push(i);
    }
    for (let i = 0; i < myArray.length; i++) {
        sumOfArray += myArray[i];
    }
    return sumOfArray;
};

// Do not edit below this line
module.exports = sumAll;
