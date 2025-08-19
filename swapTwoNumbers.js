// function swapTwoNumbers(a,b){
//     temp=a
//     a=b
//     b=temp
//     return "a: "+a+", b: "+b
// }
// function swapTwoNumbers(a,b){
//     [a,b]=[b,a]
//     return "a: "+a+", b: "+b
// }
// console.log(swapTwoNumbers(10,20))

// function swapTwoNumbersWithoutUsingThirdVariable(a,b){
//     a=a+b
//     b=a-b
//     a=a-b
//     return "a: "+a+", b: "+b
// }
function swapTwoNumbersWithoutUsingThirdVariable(a,b){
    a=a^b
    b=a^b
    a=a^b
    return "a: "+a+", b: "+b
}
console.log(swapTwoNumbersWithoutUsingThirdVariable(10,20))
