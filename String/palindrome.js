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
// const word = "racecar"
// const result = checkpalindrome(word);
// if(result){
//     console.log("String is Palindrome")
// }
// else{

//     console.log("String is not palindrome")
// }

//another method
const word ="racecar"

function check(word){
    let i=0;
    let j =word.length-1
    while(i<j){
        if(word[i]!==word[j]){
        return false
        }
        i++;
        j--;

    }
    return true
}
const result = check(word)

if(result){
    console.log("string is Palindrome")
}
else{
    console.log("String is not Palindrome")
}