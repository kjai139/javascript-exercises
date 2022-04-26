const sum = function(numbers) {
    
    return numbers.reduce((total, numbs) => {
    return total + numbs
    
  }, 0)
  
  
};


const factorial = function(num) {
    if (num == 0 || num == 1){
      return 1;
  
    }else {
      return num * factorial(num-1)
    }
      
  };

console.log(factorial(10))
console.log(sum([]))