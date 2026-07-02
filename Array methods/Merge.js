// so we have two ways to merge array according to the requirement or situtation so if we have an unsorted array then here is the example how we  will merge them 
// so first we have to take two arrays and then simple we copy the array element from one array to the new array and same for the second array

// let arr1=[1,3,4,45,56]
// let arr2=[7,28,29,30,52]

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

// result = mergeArray(arr1,arr2)
// console.log(result)



//for sorted array we have to compare the both array element then push inside the array 

function sortedmerge(arr1,arr2){
  let i =0;
  let j=0;
  let result =[]

  while(i<arr1.length && j<arr2.length){
      if(arr1[i]<arr2[j]){
        result.push(arr1[i]);
        i++;
      }
      else{
        result.push(arr2[j]);
        j++;
      }
  }
  while(i<arr1.length){

    result.push(arr1[i]);
    i++;  
}
while(j<arr2.length){
    result.push(arr2[j]);
    j++;
}
return result;
}

// const result =  sortedmerge(arr1,arr2)
// console.log(result)


//lets find missing element from the sorted array  its continuous array  so we have easy solution for this one
//continuous sorted array missing element 
let a =[1,2,3,4,5,6,8,9,10]
function findMissingElement(arr){
    let last = arr.length;
    let sum=0;
    let n = arr[last-1];
    let total = n* (n+1)/2;
   for(let i =0;i<last;i++){
      sum = sum + arr[i];
   }
   let missingelement = total-sum;
   console.log("missing element is ",missingelement)
}

findMissingElement(a)