// get set avg min max function on array
//get the element on the given index

let arr=[4,3,4,211,11,1,230]
function getmethod(index){
    return arr[index]
   
}

// const result = getmethod(3)
// console.log(result)

//set method set the element on the specific index
function setMethod(index,element){
      arr[index]=element
   return arr;

}
// const result = setMethod(2,30)
// console.log(result)
// maximum function 
function getMaximum(arr){
    let max =arr[0];
    for(let i =0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}

const result = getMaximum(arr)
console.log(result)