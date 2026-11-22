let arr =[8,5,7,3,2]


function bubblesort(arr){
    for(let  i=0;i<arr.length;i++){
        // the second loop for only the comparision and the first one for the iteration
         for(let j=0;j<arr.length-1-i;j++){
            //this loop run till the condition didnot fail j<arr.length
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
         }
    }
    console.log(arr)
}
bubblesort(arr)