const repeatString = function (string, num) {
    let con = "";
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            con += string;
        }
    } else if (num === 0) {
        return "";
    } else {
        return "ERROR";
    }
    return con;
};

// Do not edit below this line
module.exports = repeatString;
