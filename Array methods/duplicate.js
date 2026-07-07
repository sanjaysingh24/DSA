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
// findingduplicate(arr)


//duplicate counts 
let arr1 = [1,3,4,4,4,4,5,6,7,8,8,8,8,9]

function findduplicateelement(arr1){
    for(let i =0;i<arr1.length;i++){
        if(arr1[i]==arr1[i+1]){
            j=i+1;
            while(arr1[j]==arr1[i]){
                j++;
            }
            console.log(arr1[i],j-i)
            i=j-1
        }
    }
}
findduplicateelement(arr1)