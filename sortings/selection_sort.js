let arr =[7,12,9,11,3]
//selection sort find the lowest one then swap it same as bubble but reverse uno
function selection_sort(arr){
    
    for (let i=0;i<arr.length;i++){
        let k=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[k]){
               k=j
            }
        }

     [arr[i],arr[k]]=[arr[k],arr[i]]
   
    
     console.log(arr);
     break;
    }
}
selection_sort(arr)