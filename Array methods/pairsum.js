// in this i have to find the pair of given sum for example if the sum is 10 than i have to search the  pair of the sum from the array

let arr = [6,3,8,10,16,7,5,2,9,14]
function findpairsum(arr,k){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==k){
                console.log(arr[i],arr[j])
            }
        }
    }
}
// findpairsum(arr,10)


//using hash 
// timecomplexity = O(n) 
let ex =[1,3,4,5,6,8,9,10,12,14]
function findPair(arr,sum){
    let hash  ={};
    for(let i=0;i<arr.length;i++){
        
        let need = sum-arr[i]
        if(hash[need]){
            console.log(need,arr[i])
        }
        hash[arr[i]]=true
    }
}
findPair(arr,15)