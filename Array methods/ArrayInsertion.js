// first  insert at specific position 
let arr = [1,2,3,5,6]
function insertionatspecific(arr,pos,element){
    for(let i =arr.length-1;i>=pos-1;i--){
        
         arr[i+1]=arr[i];
         
    }
    arr[pos-1]=element;
    console.log(arr)

}



// insertionatspecific(arr,2,10)

//insertion at the mid
function insertioninmid(arr,element){
    let mid = Math.floor(arr.length/2);
    for(let i=arr.length-1;i>=mid-1;i--){
        arr[i+1]=arr[i]

    }
    arr[mid-1]=element
console.log(arr)
}

// insertioninmid(arr,30)


//insertion at first

function insertionatfirst(arr,element){
    for(let i = arr.length-1;i>=0;i--){
        arr[i+1]=arr[i]
    }
    arr[0]=element
    console.log(arr)
}
// insertionatfirst(arr,-12)

//sorted insertion according to the element
function sortedinsertion(arr,element){
    let i;
    for(i = arr.length-1;i>=0 && arr[i]>=element;i--){
        arr[i+1]=arr[i];
    
    }
    arr[i]=element;
    console.log(arr)

}
sortedinsertion(arr,4)