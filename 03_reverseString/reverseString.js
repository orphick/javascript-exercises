const reverseString = function (string) {
    let convertedString = string.split('');
    let reversedArray = convertedString.reverse();
    let reversedString = reversedArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
