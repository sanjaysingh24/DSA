arr=[7,12,9,11,3]
n = len(arr)

def selection_sort(arr):
    for i in range(n):
        k=i
        for j in range(i+1,n):
            if arr[j]<arr[k]:
                k=j
        
        arr[i],arr[k]=arr[k],arr[i]
    print(arr)
    
selection_sort(arr)