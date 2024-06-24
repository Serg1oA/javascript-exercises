const palindromes = function(argStr) {
    let cleanStr = argStr.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();

    let reversedStr = cleanStr.split("").reverse().join("");

    return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
