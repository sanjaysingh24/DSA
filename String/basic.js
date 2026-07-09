// so from here we  will learn the string part 
// lets start from the basic
//finding the length of the string
// let s = 'sanjay'
let i;
// for(i=0;i<s.length;i++){
    
// }
// console.log(i)


//changing upper case to lower case
function changeupper(s){
    let result  ="";
    for(let i=0;i<s.length;i++){
        
        let code = s.charCodeAt(i)
        if(code>=97 && code<=127){
            result +=String.fromCharCode(code-32);
        }else{
            result+=s[i]
        }
        
       
    }
    console.log(result)
}
// changeupper(s)
let s ="SANJaY"
function changelower(s){
    let result = "";
    for(let i =0;i<s.length;i++){
        let code = s.charCodeAt(i)
        console.log(code)
        if(code>=65 && code<97){
            result+=String.fromCharCode(code+32)
        }else{
            result+=s[i]
        }


    }
console.log(result)
    
}
// changelower(s)

//now toggle 
function togglealphabates(s){
    let result =""
    for(let i=0;i<s.length;i++){
        let code = s.charCodeAt(i);
        if(code>=65 && code<97){
            result +=String.fromCharCode(code+32)
        }
        else if(code>=97 && code<123){
            result+=String.fromCharCode(code-32)
        }
        else{
            restult+=s[i]
        }
    }
    console.log(result)
}
togglealphabates(s)