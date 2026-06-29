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

// const result = getMaximum(arr)
// console.log(result)


// average 
function getaverage(arr){
    let total=0;
    for(let i =0;i<arr.length;i++){
        total = total+arr[i]
    }
    return Math.floor(total/arr.length)
}

// const result = getaverage(arr)
// console.log(result)


function getmin(arr){
    let min=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }
    return min
}

// const result = getmin(arr)
// console.log(result)

// reversing a array 

function reversearray(arr){
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i])
    }

}
// reversearray(arr)

// reversing the array using  the swap method
//function reversing the array with another method
function reverseanothemethod(arr){
   for (let i=0,j=arr.length-1; i<j;i++,j--){
        let temp  = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
   }
   return arr
}

// result = reverseanothemethod(arr)
// console.log(result)