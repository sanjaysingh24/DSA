// so we have two ways to merge array according to the requirement or situtation so if we have an unsorted array then here is the example how we  will merge them 
// so first we have to take two arrays and then simple we copy the array element from one array to the new array and same for the second array

let arr1=[10,3,4,5,6]
let arr2=[7,8,9,1,2]


function mergeArray(arr1,arr2){
    let i=0;
    let j=0;
    let k=0;
    let mergedArray = new Array(arr1.length+arr2.length)
    while(i<arr1.length){
    mergedArray[k++] = arr1[i++];
  
}
while(j<arr2.length){
      mergedArray[k++] = arr2[j++];
}

    return mergedArray
}

result = mergeArray(arr1,arr2)
console.log(result)