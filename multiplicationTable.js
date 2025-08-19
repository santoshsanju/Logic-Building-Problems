// function multiplicationTable(num,upto){
//     let result=''
//     for(let i=1;i<=upto;i++){
//         result+=num+'X'+i+'='+num*i+'\n'
//     }
//     return result
// }
// console.log(multiplicationTable(10,20))

function RecursiveMultiplicationTable(num,upto,i=1,result=''){
    if(i>upto) return result;
    result+=num+'X'+i+'='+num*i+'\n'
    return RecursiveMultiplicationTable(num,upto,i+1,result)
}
console.log(RecursiveMultiplicationTable(10,20))
