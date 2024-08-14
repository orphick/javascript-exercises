const sumAll = function (firstNumber, secondNumber) {
    let myArray = [];
    let sumOfArray = null;
    if (firstNumber < 1 || secondNumber < 1) {
        return 'ERROR'
    } else if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return 'ERROR'
    } else if (secondNumber < firstNumber) {
        for (let i = secondNumber; i <= firstNumber; i++) {
            myArray.push(i);
        }
        for (let i = 0; i < myArray.length; i++) {
            sumOfArray += myArray[i];
        }
        return sumOfArray;
    } else {
        for (let i = firstNumber; i <= secondNumber; i++) {
            myArray.push(i);
        }
        for (let i = 0; i < myArray.length; i++) {
            sumOfArray += myArray[i];
        }
        return sumOfArray;
    }
};

// Do not edit below this line
module.exports = sumAll;
