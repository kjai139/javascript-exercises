const getTheTitles = function(book) {
    let titles =[]
    book.map((book) => {
        titles.push(book.title)
    })
    return titles
};


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


a = getTheTitles(books)
console.log(a)