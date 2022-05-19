//create variable with const keyword, name should be returnFirstTwoDrivers
//anonymous function assigned to variable
//define parameter 
//return first two drivers 
const returnFirstTwoDrivers = (arryOfDrivers) => {
    return arryOfDrivers.slice(0,2)

}
//Declare a variable with `const` called returnLastTwoDrivers 
//then assign it to anonymous function. 
//define parameter drivers (call it whatever you want)
//get last 2 drivers-could use (-2) or (driver.length-2)
//return^

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

//This is an array containing functions that we previously defined (`returnFirstTwoDrivers()` and `returnLastTwoDrivers()`) (just the functions, functions are not invoked yet)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//NOTE:takes in a function and returns a function like this:
// function hello() {
//     return function() {

//     }
// }

//create a function that's called createFareMultiplier
//define parameter called multiplier
//return a function (used arrow function)
    //return function will define parameter called fare
    //the returned function will multiply fare by multiplier
function createFareMultiplier(multiplier = 1) {
    return (fare) => {
        return fare * multiplier
    }
}

//define variable with const called and fareDoubler
//assign to the function returned from createFareMultiplier (aka invoke the function)
//pass 2 as the argument to createFareMultiplier
const fareDoubler = createFareMultiplier(2)

//same as fareDoubler, but triple fare instead
const fareTripler = createFareMultiplier(3)

//define function called selectDifferentDrivers
//define two parameters: 
    //1st parameter called drivers
    //2nd parameter called returnTwoDriversFunction
//return returnTwoDriversFunction (2nd parameter) make sure it's invoked (add ())!
//pass the drivers parameter (1st parameter) in as the first argument to returnTwoDriversFunction

function selectDifferentDrivers(drivers, returnTwoDriversFunction) {
    return returnTwoDriversFunction(drivers);
}
