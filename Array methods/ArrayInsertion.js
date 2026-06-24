// first  insert at specific position 
let arr = [1,2,4,3,5]
function insertionatspecific(arr,pos,element){
    for(let i =arr.length-1;i>=pos-1;i--){
        //  console.log(arr[i])   
         arr[i+1]=arr[i]
         
         
         
     

    }
arr[pos-1]=element;
    console.log(arr)

}

insertionatspecific(arr,2,10)