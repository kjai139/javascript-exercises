const palindromes = function (str) {
    newStr = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    newStr = newStr.toLowerCase()
    console.log(newStr)
    splitStr = newStr.split('')
    reverseStr = splitStr.reverse().join('')
    console.log(reverseStr)
    if (newStr == reverseStr){
        return true
    } else {
        return false
    }
    
};


a = palindromes('racecar!')
b = palindromes('ZZZZ car, a man, a maracaz.')

console.log(a, b)