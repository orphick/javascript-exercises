const leapYears = function (years) {
    let leapYear = null;
    if (years > 100 && leapYear / 4 == 0) {
        leapYear = years % 100;
        return true;
    } else if (years < 100 && years % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
