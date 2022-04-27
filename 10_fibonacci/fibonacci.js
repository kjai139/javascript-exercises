const fibonacci = function(num) {
    let n1 = 0
    let n2 = 1
    let nextNum = 0
    if (num < 0) {
        return 'OOPS'
    } else{
        for (let i = 1; i<= num; i++){
            nextNum = n1 + n2
            n1 = n2
            n2 = nextNum
        }

    }

    
    return n1

};

// Do not edit below this line
module.exports = fibonacci;
