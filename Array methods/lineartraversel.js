//1- method is linearTraversal
// a normal brute force method to traverse an array linearly specially for when we need to find the max minimum sum,count or validation in a single pass

//example find the largest number in an array
let array =[1,2,5,6,7,89];
function findlargestnumber(array){
    let max = array[0];
    for(let i=1;i<array.length;i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    console.log("The largest number is: " +max);

}

// findlargestnumber(array);

function checkarraysorted(array){
    let length = array.length;

    for(let i = 0; i<length;i++){
        if(array[i]<array[i-1]){
            console.log("Array is not sorted");
            return;
            
        }
        else{
            console.log("Array is sorted");
            return;
        }
    }
}
// checkarraysorted(array)

function checkdays(month){
    let days =[1,3,4,5,7,8,10,12];
    if(days.includes(month)){
        console.log("31 days");
        return;
    }
    else{
        console.log("30 days or 28/29 days");
        return;
    }
}
// checkdays(6);



// this one is only for the three digits if there is a constant number of digit so we can use this one
function checkcheck(number){
    let lastdigit = number%10;
    number = Math.floor(number/10);
    let secondlast = number%10;
    number = Math.floor(number/10);
    let thirdlast = number%10;
    if(lastdigit == secondlast || lastdigit == thirdlast || secondlast == thirdlast){
        console.log("There are duplicate digits");
    }else{
        console.log("No duplicate digits");
    }

}
//checkcheck(123);

// here is a refine method of doing this we use set and convert the number to string and then array
// function checkduplicatedigit(numbers){
//     let number = numbers.toString().split('');
//     let numberSet = new Set(number);
//     return numberSet.size !== numbers.length;
// }
// const result = checkduplicatedigit(12344);
// if(result){
//     console.log("There are no duplicate digits");
// }
// else{
//     console.log("There are duplicate digits");
// }

//one more method to solve this one 
function solveonemethod(number){
    let seen = new Set();
    while(number>0){
        let digit = number%10;
        if(seen.has(digit)){
            return false;
        }
        seen.add(digit);
        number = Math.floor(number/10);
        
    }
    return true;
}

// const myresult = solveonemethod(1234);
// if(myresult){
//     console.log("No duplicate digits");
// }
// else{
//     console.log("There are duplicate digits");
// }
// take a 3 digit number and check if the middle one is largest,smallest of neigther

// function checkmiddle(){
//     let number = 243;
//     let lastdigit = number%10;

//     number = Math.floor(number/10);

//     let middledigit = number%10;
    
//     number = Math.floor(number/10);
//     let firstdigit = number%10;
//     if(middledigit>firstdigit && middledigit>lastdigit)
// {
//     console.log("Middle digit is largest");
// }    
// else if(middledigit<firstdigit && middledigit<lastdigit){
//     console.log("Middle digit is smallest");
// }
// else{
//     console.log("Middle digit is neither largest nor smallest");
// }
    
// }
// checkmiddle();


//here the number of digits is constant
function checkfirstandlast(number){
    let lastdigit = number%10;
    number = Math.floor(number/10);
    let third = number%10
    number = Math.floor(number/10)
    let second = number%10
    number = Math.floor(number/10)
    let first = number%10;
    if(first == lastdigit){
        console.log("First and last digit are same");
    }
    else{
        console.log("First and last digit are different");
    
    }
}

// checkfirstandlast(1232);

//one best approach  to convert the number into string

function checkfirstandlastone(number){
    let numstr = number.toString();
    if(numstr[0]===numstr[numstr.length-1]){
        console.log("First and last digit are same");

    }
    else{
        console.log("First and last digit are different");
    }
}

// checkfirstandlastone(12316789291);


//check wheter the digit is single digit double digit or multidigit
function checkdigit(number){
    if(number>=0 && number<=9){
        console.log("single digit number")
    }
    else if(number>=10 && number <=99){
        console.log("double digit number")
    }
    else{
        console.log("multidigit number")
    }
}

// checkdigit(1);

function checkmultipleof7(number){
    let numstr = number.toString();
    if(numstr[numstr.length-1]==='7'){
        console.log("last digit is 7");
    }
    else if(number%7===0){
        console.log("number is multiple of 7");
    }

    else{
        console.log("number is not multiple of 7 or last digit is not 7");
    }
    
}
// checkmultipleof7(770);

// Take coordinates (x, y) and determine which quadrant the point lies in

function checkquadrant(x,y){
    if(x>0 &&y>0){
        console.log("Point lies in First Quadrant");
    }
    if(x<0 && y>0){
        console.log("Point lies in Second Quadrant");
    }
    if(x<0 && y<0){
        console.log("Point lies in Third Quadrant");
    }
    if(x>0 &&y<0){
        console.log("Point lies in Fourth Quadrant");
    }
    if(x===0 && y===0){
        console.log("Point lies at the Origin");
    }
    if(x==0 && y!==0){
        console.log("Point lies on Y axis");
    }
    if(x!==0 && y==0){
        console.log("Point lies on X axis");
    }
}
// checkquadrant(-7,10);

function divideamount(amount){
    if(amount %100!==0){
        console.log("Amount should be in multiples of 100");
        return;

    }
    let notes2000 = Math.floor(amount/2000);
    amount = amount % 2000;

    let notes500 = Math.floor(amount/500);
    amount = amount % 500;

    let notes200 = Math.floor(amount/200);
    amount = amount % 200;

    let notes100 =Math.floor(amount/100);
    console.log("2000 notes: " +notes2000);
    console.log("500 notes: " +notes500);
    console.log("200 notes: " +notes200);
    console.log("100 notes: " +notes100);
}
// divideamount(47000);


// check the number is lies between 100 and 999
function checknumberlies(number){
    if(number>=100 && number<=999){
        console.log("Number lies between 100 and 999");
    }
    else{
        console.log("Number does not lie between 100 and 999");
    }
}

// checknumberlies(1050);


// check two angles of a triangle are given find the third angle
function twoangles(a,b){
   
    let thirdangle = 180-(a+b);
    console.log("The third angle is: " +thirdangle);
}
// twoangles(0,0);

function isperfectsqure(number){
    if(number<0){
        console.log("Negative numbers cannot be perfect squares");
        return false;
    }
    for(let i = 0 ;i*i<=number;i++){
        
        if(i*i===number){
            
            return true;
        }
        console.log("hello");
    }
    return false;
}
// const result = isperfectsqure(25);
// if(result){
//     console.log("Number is a perfect square");
// }
// else{
//     console.log("Number is not a perfect square");

// }


// implement binary search
// it is a type of seaching algorithm that works on sorted arrays  to find the target element by repeatedly dividing the search interval in half
// first it divide the array into two halves and compare the target value with the middle element of the array if the element is less then the middle element then it search in the left half otherwise it search in the right half this process is repeated until the target element is found or the search interval is empty

function binarysearch(array,target){
    let low = 0;
    let high = array.length-1;
    while(low<=high)
        {
     let mid = Math.floor((low+high)/2);
     if(array[mid]===target){
        console.log("Element found at index: " +mid);
        return;
     }
     else if(array[mid]<target){
    low = mid+1;

     }
     else{
        high= mid-1;
     }


    }
}

// let arrays = [2,4,5,6,7,8,9,12,14,15];
// binarysearch(arrays,12);

// check perfect square using binary search 

function isperfectsquare(number){
    if(number<0){
        console.log("Negative numbers cannot be perfect squares");
        return false;
    }
   let low = 1;
   let high = number;
   while(low<=high){
    let mid = Math.floor((low+high)/2);
    let square = mid*mid;
    if(square===number){
        console.log("Number is a perfect square");
        return true;
    }
    else if(square<number){
        low = mid+1;
    }
    else{

     high = mid-1;
    }
    console.log("hello");
   }

}
// const result = isperfectsquare(25);
// console.log(result);
// take  a charachter  and check whether it is a letter , a digit  or neither 
function checkChar(ch) {
    if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
        console.log("It is a letter");
    }
    else if (ch >= '0' && ch <= '9') {
        console.log("It is a digit");
    }
    else {
        console.log("It is a special character");
    }
}

checkChar('&'); // letter
