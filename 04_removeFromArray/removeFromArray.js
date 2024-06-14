const removeFromArray = function(theArray, ...whatToRemove) {

    
    for (let i = 0; i < whatToRemove.length; i++) {
        let valueToRemove = whatToRemove[i];

        let indexToRemove = theArray.indexOf(valueToRemove);

        while (indexToRemove > -1) {
            theArray.splice(indexToRemove, 1);
            indexToRemove = theArray.indexOf(valueToRemove);
        }
    }

    return theArray;

};

// Do not edit below this line
module.exports = removeFromArray;
