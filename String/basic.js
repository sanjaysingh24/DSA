// so from here we  will learn the string part 
// lets start from the basic
//finding the length of the string
// let s = 'sanjay'
let i;
// for(i=0;i<s.length;i++){

// }
// console.log(i)


//changing upper case to lower case
function changeupper(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {

        let code = s.charCodeAt(i)
        if (code >= 97 && code <= 127) {
            result += String.fromCharCode(code - 32);
        } else {
            result += s[i]
        }


    }
    console.log(result)
}
// changeupper(s)
let s = "Hanuman"
function changelower(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i)
        console.log(code)
        if (code >= 65 && code < 97) {
            result += String.fromCharCode(code + 32)
        } else {
            result += s[i]
        }


    }
    console.log(result)

}
// changelower(s)

//now toggle 
function togglealphabates(s) {
    let result = ""
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        if (code >= 65 && code < 97) {
            result += String.fromCharCode(code + 32)
        }
        else if (code >= 97 && code < 123) {
            result += String.fromCharCode(code - 32)
        }
        else {
            restult += s[i]
        }
    }
    console.log(result)
}
// togglealphabates(s)

//vowels ={a,e,i,o,u}
let map = new Map([["a", 97], ["e", 101], ["i", 105], ["o", 111], ["u", 117],["A",65],["E",69],["I",73],["O",79],["U",85]])
//contants=remainings
function countinvowels(s) {
    let vowel = 0;
    let constant = 0;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i)
        if (code == map.get(s[i])) {
            vowel++;
        }
        else {
            constant++;
        }
    }
    console.log(vowel);
    console.log(constant)
}
// countinvowels(s)
//count words 
let myword = "hello sanju baba how are you iamfine"
function countword(myword){
    let word=0;
    for(let i=0;i<myword.length;i++){
        if(myword[i]!==" " && (i===0 || myword[i-1]===" ") ){
            word++;
        }
            
        
    }

    console.log(word)
}
// countword(myword)


//validate a string
function validString(word){

    for(let i=0;i<word.length;i++){
        let code = word.charCodeAt(i);
        

        if(!((code>=65&&code<=90)|| (code>=97 && code<=122))){
        return false
        }
        
        
    }
    return true;
}
// const check = validString("sanjay12")
//let check the string is valid or not

function checkvalidation(word){

    const check = validString(word);
    if(check){
        console.log("given string is valid")
    }
    else{
        console.log("string is not valid")
    }
}
// checkvalidation("samnjau")