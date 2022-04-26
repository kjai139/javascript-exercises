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

// Do not edit below this line
module.exports = palindromes;
