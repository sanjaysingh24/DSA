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
function checkduplicatedigit(numbers){
    let number = numbers.toString().split('');
    let numberSet = new Set(number);
    return numberSet.size !== numbers.length;
}
const result = checkduplicatedigit(12344);
if(result){
    console.log("There are no duplicate digits");
}
else{
    console.log("There are duplicate digits");
}
