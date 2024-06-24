const getTheTitles = function(inputBooks) {
    titlesArray = [];

    inputBooks.forEach(book => {
        titlesArray.push(book.title);
    });
    
    return titlesArray;
}

// Do not edit below this line
module.exports = getTheTitles;
