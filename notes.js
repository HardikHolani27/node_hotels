console.log('jai jhulelal');
var age = 24;  //tried accessing this variable directly in another file but it was showing undefined while trying to print in the another file, so we gotta do module.exports else we cant use elements like this directly
const addNumber = function (a,b) {
    return a+b
}

module.exports = {
    age,
    addNumber
}