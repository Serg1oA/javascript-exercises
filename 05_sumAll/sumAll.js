const sumAll = function(a, b) {
    
    var megaTotal = 0;

    if (typeof a === "number" && a > 0 && typeof b === "number" && b > 0) {

        if (a >= b) {
            while (a >= b) {
                megaTotal += b;
                b++;
            }
            return megaTotal;

        } else if (b > a) {
            while (b >= a) {
                megaTotal += a;
                a++;
            }
            return megaTotal;
        };

    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
