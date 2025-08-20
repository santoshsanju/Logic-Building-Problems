function countVowelsAndConsonants(str){
    vowelsChar=["a","e","i","o","u"]
    // vowels=0
    // solution-1
    // for(let i=0;i<str.length;i++){
    //     if(vowelsChar.includes(str[i])) vowels+=1
    // }
    // consonants=str.length-vowels
    // return {vowels,consonants}
    
    //solution-2
    //  vowels = [...str].reduce((acc, nxt) => {
    //  if (vowelsChar.includes(nxt)) acc += 1
    //      return acc
    //  }, 0)
    // consonants=str.length-vowels
    // return {vowels,consonants}
    
    // solution-3
    // vowels=0
    // for(let i=0;i<str.length;i++){
    //     for(let j=0;j<vowelsChar.length;j++){
    //         if(str[i]===vowelsChar[j]){
    //             vowels+=1
    //         }
    //     }
    // }
    // consonants=str.length-vowels
    // return {vowels,consonants}
    
    // solution-4
    vowels=[...str].filter(e=>vowelsChar.includes(e)).length
    consonants=str.length-vowels
    return {vowels,consonants}
}
console.log(countVowelsAndConsonants("hello"))
