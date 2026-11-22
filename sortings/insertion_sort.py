arr = [3,10,12,4,18,2]
n = len(arr)
def insertion_sort(arr,n):
    for i in range(n):
        x =arr[i]
        j=i-1
        while(arr[j]>x and j>-1):
            arr[j+1] = arr[j]
            j-=1
        arr[j+1]=x
    print(arr)
insertion_sort(arr,n)
        