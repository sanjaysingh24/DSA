let arr =[7,12,9,11,3]
function insertion_sort(arr){
    for (let i=1;i<arr.length;i++){
        x=arr[i] // take the current value
        j=i-1 // the previous value
        while(arr[j]>x && j>-1){
            arr[j+1]=arr[j]
            j--;
        }
    arr[j+1]=x
    }
    console.log(arr)
}
insertion_sort(arr)