let word = "hello"
let another ="words"

function checkanagram(word,another){
    const hash={}
    //first check the both string length
    if(word.length!==another.length){
         return false;
    }
    for(let char of word){
       if(hash[char]){
        hash[char]++;
       }
       else{
        hash[char]=1;
       }
        
    }
  

   
    for( let compare of another){

        if(hash[compare]){

            hash[compare]--;

        }
        else{
            return false;
        }
    
    }
   
 for (let key in hash){
    if(hash[key]!==0){
        return false;
    }
}
return true

  
}
const result = checkanagram(word,another)
if(result){
    console.log("strings are anagram")
}
else{
    console.log("string are not anagram")
}