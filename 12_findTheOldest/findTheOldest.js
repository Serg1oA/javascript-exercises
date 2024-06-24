const findTheOldest = function(inputPeople) {
    let oldestPerson = inputPeople[0];

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    inputPeople.forEach(person => {
        // if the age of the of the person| is higher than the age of 
        // than the age of the oldestPerson, assign a new oldestPerson
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentYear;
        }

        if ((person.yearOfDeath - person.yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) {
            oldestPerson = person;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
