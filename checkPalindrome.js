function checkPalindrome(str){
    // solution-1
    // return str.split('').reverse().join('')===str
    
    // solution-2
    // return str.split('').reverse().reduce((acc,nxt)=>acc+nxt,'')===str
    
    // solution-3
    // ans=''
    // for(let i=str.length-1;i>=0;i--){
    //     ans+=str[i]
    // }
    // return ans===str
    
    // solution-4
    // ans=[]
    // for(let i=0;i<str.length;i++){
    //     ans[i]=str[i]
    // }
    // left=0
    // right=str.length-1
    // while(left<right){
    //     [ans[left],ans[right]]=[ans[right],ans[left]]
    //     left++
    //     right--
    // }
    // result=''
    // for(let i=0;i<ans.length;i++){
    //     result+=ans[i]
    // }
    // return result===str
    
    // solution-5
    // ans=[]
    // for(let i=0;i<str.length;i++){
    //     ans[i]=str[i]
    // }
    // left=0
    // right=str.length-1
    // while(left<right){
    //     temp=ans[left]
    //     ans[left]=ans[right]
    //     ans[right]=temp
    //     left++
    //     right--
    // }
    // result=''
    // for(let i=0;i<ans.length;i++){
    //     result+=ans[i]
    // }
    // return result===str
    
    // solution-6
    // return [...str].reverse().join('')===str
    
    // solution-7
    // for(let i=0;i<str.length;i++){
    //     if(str.charAt(str.length-1-i)!==str.charAt(i)){
    //         return false
    //     }
    // }
    // return true
    
    // solution-8
    for(let i=0;i<str.length;i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true
}
console.log(checkPalindrome("eye"))
