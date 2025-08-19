// function checkEvenOrOdd(num){
//     if(typeof(num)!=='number'||!isFinite(num)||isNaN(num)||num<0) return 'Invalid'
//     return num%2===0?'Even':'Odd'
// }
function checkEvenOrOdd(num){
    if(typeof(num)!=='number'||!isFinite(num)||isNaN(num)||num<0) return 'Invalid'
    return (num & 1)===0?'Even':'Odd'
}

console.log(checkEvenOrOdd(3))
