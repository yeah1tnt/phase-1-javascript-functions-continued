// code your solution here
function saturdayFun(a = `roller-skate`){
    return `This Saturday, I want to ${a}!`;
}
function mondayWork(a = `go to the office`){
    return `This Monday, I will ${a}.`;
}
function wrapAdjective(a){
    return function result(b){
        return `You are ${a}${b}${a}!`;
    }
}