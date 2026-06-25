//in dsa mainly two type of searching one is binary search and another one is linear search which perform with the array 
//1- linear search
//2- binary search


let arr =[2,4,6,3,34,23,231,12]
//example of linear search
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1
}

const result = linearSearch(arr,340)
// console.log(result)