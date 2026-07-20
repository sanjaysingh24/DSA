let mystring ="sanjay"

function reverseString(word){
    let result="";
    for(let i=word.length-1;i>=0;i--){
         result+=word[i]
    }
    return result
}

function checkpalindrome(word){
    //reverse it
    const reverse = reverseString(word)
    if(reverse===word){
        return true
    }
    else{
        return false
    }
}
const word = "racecar"
const result = checkpalindrome(word);
if(result){
    console.log("String is Palindrome")
}
else{

    console.log("String is not palindrome")
}