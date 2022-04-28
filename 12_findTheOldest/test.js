const findTheOldest = function(name) {
    let aliveList=[]
    let todayDate = new Date().getFullYear()
    let currentAge =0
    let oldestDeadAge =0
    let oldestAliveAge =0
    let oldest =''
    let oldestDead =''
    for (x of people) {
        if (x.yearOfDeath == undefined){
            aliveList.push(x)
        }
    }
    console.log(aliveList)
    if (aliveList.length == 0){
        console.log('empty alive')
        for (x of people){
            if (currentAge == 0){
                currentAge = x.yearOfDeath - x.yearOfBirth
                oldest = x.name
            }
            if (currentAge< (x.yearOfDeath - x.yearOfBirth)){
                currentAge = (x.yearOfDeath = x.yearOfBirth)
                oldest = x.name
            }
        } return oldest
    } else {
        for (x of aliveList){
            if (currentAge == 0){
                currentAge = todayDate - x.yearOfBirth
                oldest = x.name
            }
            if (currentAge < (todayDate - x.yearOfBirth)){
                oldestAliveAge = (todayDate - x.yearOfBirth)
                oldest = x.name
            }
        } 
        for (x of people){
            if (currentAge == 0 && x.yearOfDeath == undefined){
                currentAge = todayDate - x.yearOfBirth
                oldestDead = x.name
                
            }
            else if (x.yearOfDeath != undefined && currentAge < (x.yearOfDeath - x.yearOfBirth)){
                oldestDeadAge = (x.yearOfDeath - x.yearOfBirth)
                currentAge = oldestDeadAge
                console.log(currentAge, oldestDeadAge, x.name)
                oldestDead = x.name
                console.log(oldestDead)
                return oldestDead
            }
            else{
                return oldest
            }
        }
     
    }
    
    
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

a = findTheOldest((people).name)
console.log(a)