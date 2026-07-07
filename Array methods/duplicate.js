//here we have to find the duplicate array element from the given array

let arr = [1,3,3,4,5,6,7,8,9,9,9,9,10]

function findingduplicate(arr){
    let lastduplicate =0;
    for(let i=0;i<arr.length;i++){
   if(arr[i]==arr[i+1] && arr[i]!=lastduplicate){
    console.log(arr[i])
    lastduplicate=arr[i]
   }
    }
}
findingduplicate(arr)