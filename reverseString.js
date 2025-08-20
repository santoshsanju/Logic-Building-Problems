
function reverseString(str,ind=str.length-1){
    
// solution-1
//   ans=''
//   for(let i=str.length;i>=0;i--){
//       ans+=str.charAt(i)
//   }
//   return ans

// solution-2
// return str.split('').reverse().reduce((acc,nxt)=>{
//     acc+=nxt
//     return acc
// },'')

// solution-3
// return str.split('').reverse().join('')

// solution-4
// return [...str].reverse().join('')

// solution-5
// return [...str].reverse().reduce((acc,nxt)=>acc+nxt,'')

// solution-6
// ans=[]
// for(let i=str.length-1;i>=0;i--){
//     ans.push(str[i])
// }
// return ans.join('')

// solution-7
// ans=[]
// for(let i=str.length-1;i>=0;i--){
//     ans.push(str[i])
// }

// result=''
// for(let i=0;i<ans.length;i++){
//     result+=ans[i]
// }
// return result

// solution-8
// ans=[]
// for(let i=0;i<str.length;i++){
//     ans.push(str[i])
// }

// left=0,right=ans.length-1
// while(left<right){
//     temp=ans[right]
//     ans[right]=ans[left]
//     ans[left]=temp
//     left++
//     right--
// }

// result=''
// for(let i=0;i<ans.length;i++){
//     result+=ans[i]
// }
// return result

// solution-9
// ans=[]
// for(let i=0;i<str.length;i++){
//     ans.push(str[i])
// }

// left=0,right=ans.length-1
// while(left<right){
//     [ans[left],ans[right]]=[ans[right],ans[left]]
//     left++
//     right--
// }

// result=''
// for(let i=0;i<ans.length;i++){
//     result+=ans[i]
// }
// return result

// solution-10
if(ind<0) return ''
return str[ind]+reverseString(str,ind-1)
}

console.log(reverseString("hello"))
