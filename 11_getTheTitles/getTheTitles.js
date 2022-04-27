const getTheTitles = function(book) {
    let titles =[]
    book.map((book) => {
        titles.push(book.title)
    })
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
