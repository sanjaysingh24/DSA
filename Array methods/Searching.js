//in dsa mainly two type of searching one is binary search and another one is linear search which perform with the array 
//1- linear search algorithm- it search the target element one by one and when it got the target element then it return its position and if the target item is not found then it return -1
//2- binary search


let arr =[2,4,6,8,34,223,235,240]
//example of linear search
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1
}

// const result = linearSearch(arr,340)
// console.log(result)



//now comes to binary search 
// the first condition for binary search is that the array should be sorted 
// in binary search  first it find the middle element of the array  and then simply compare the target element with the middle one and if the target element is less than the middle one then perfor search in the left side and if the target element is greater than the middle one then it perform the search on right side
// the one condition for binary search is that the array must be sorted


function binarySearch(arr,target){
    let l = 0;
    let h = arr.length-1;
    while (l <= h){
        let middle = Math.floor((l+h)/2);
        console.log(middle);
        if(arr[middle]===target){
            return middle;
        }
        if(target > arr[middle]){
            l = middle + 1;
        }
        else{
            h = middle - 1;
        }
    }
    return -1

}
const result = binarySearch(arr,34)
console.log(result)