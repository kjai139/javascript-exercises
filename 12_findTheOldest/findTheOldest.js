const findTheOldest = function(input1) {
    let aliveList=[]
    let todayDate = new Date().getFullYear()
    let currentAge =0
    let oldestDeadAge =0
    let oldest =''
    let oldestDead =''
    console.log(input1)
    input1.forEach(obj => {
        console.log(obj.yearOfDeath)
        if (obj.yearOfDeath == undefined){
            aliveList.push(obj)
            console.log('no year of death')
        }

    }) 
        
    
    console.log(aliveList)
    if (aliveList.length == 0){
        console.log('empty alive')
        input1.forEach(obj => {
            if (currentAge == 0){
                currentAge = obj.yearOfDeath - obj.yearOfBirth
                oldest = obj
            }
            if (currentAge< (obj.yearOfDeath - obj.yearOfBirth)){
                currentAge = (obj.yearOfDeath = obj.yearOfBirth)
                oldest = obj
                console.log('oldest', oldest)
            }
        })
        return oldest
    } else {
        aliveList.forEach(obj =>{
            if (currentAge == 0){
                currentAge = todayDate - obj.yearOfBirth
                oldestAliveAge = (todayDate - obj.yearOfBirth)
                oldest = obj
            }
            if (currentAge < (todayDate - obj.yearOfBirth)){
                oldestAliveAge = (todayDate - obj.yearOfBirth)
                console.log(oldestAliveAge, 'oldest alive age')
                oldest = obj
                
            }
        })
        console.log(oldest, 'oldest', currentAge)
     
        input1.forEach(obj => {
            if (currentAge == 0 && obj.yearOfDeath == undefined){
                currentAge = todayDate - obj.yearOfBirth
                oldestDead = obj
                
            }
            else if (obj.yearOfDeath != undefined && currentAge < (obj.yearOfDeath - obj.yearOfBirth)){
                currentAge = (obj.yearOfDeath - obj.yearOfBirth)
                oldestDeadAge = (obj.yearOfDeath - obj.yearOfBirth)
                console.log(currentAge, obj.name)
                oldestDead = obj
                console.log(oldestDead, 'returning oldestdead')
                
                
            } 
            
        })
        if (oldestAliveAge > oldestDeadAge) {
            return oldest
        } else {
            return oldestDead
        }
    }

    
    
    
};



// Do not edit below this line
module.exports = findTheOldest;
