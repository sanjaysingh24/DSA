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
checkarraysorted(array)