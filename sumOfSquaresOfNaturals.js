// function sumOfSquaresOfNaturals(num){
//     sum=0
//     for(i=1;i<=num;i++){
//         sum+=i*i
//     }
//     return sum
// }
// function sumOfSquaresOfNaturals(num){
//     return num*(num+1)*(2*num+1)/6
// }
function sumOfSquaresOfNaturals(num,i=1,sum=0){
    if(i>num) return sum;
    return sumOfSquaresOfNaturals(num,i+1,sum+i*i)
}
console.log(sumOfSquaresOfNaturals(10))
