// function sumOfNaturals(num){
//     sum=0
//     for(i=1;i<=num;i++){
//         sum+=i
//     }
//     return sum
// }
// function sumOfNaturals(num){
//     return num*(num+1)/2
// }
function sumOfNaturals(num,i=1,sum=0){
    if(i>num) return sum;
    return sumOfNaturals(num,i+1,sum+i)
}
console.log(sumOfNaturals(10))
