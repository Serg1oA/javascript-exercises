const reverseString = function(stringy) {
    
    // transform the string into an array
    // create an array that is the reverse of the above array
    // transform this new array into a string


    const arrayFromStringy = Array.from(stringy);

    const reversing = arrayFromStringy.reverse();

    const stringyReversed = reversing.join("");

    return stringyReversed;
};

// Do not edit below this line
module.exports = reverseString;
