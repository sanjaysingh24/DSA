//finding duplicate charachter in one single string
const word = "finding"
function findduplicate(word){
   let count={}
   for(let char of word){
     if(count[char]){
        count[char]++;
     }
     else{
        count[char]=1;
     }
   }
console.log(count);
   for(let char in count){
    if(count[char]>1){
        console.log( `${char} -> ${count[char]}` )
    }
   }
}

findduplicate(word)