let arr = [10, 12, 3, 5, 11, 1];

function partition(arr, l, h) {
    let pivot = arr[l];
    let i = l + 1;
    let j = h;

    while (true) {
        while (i <= h && arr[i] <= pivot) {
            i++;
        }

        while (j > l && arr[j] > pivot) {
            j--;
        }

        if (i >= j) break;

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    [arr[l], arr[j]] = [arr[j], arr[l]];

    return j;
}

function quick_sort(arr, l, h) {
    if (l < h) {
        let pivotIndex = partition(arr, l, h);

        quick_sort(arr, l, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, h);
    }
}

quick_sort(arr, 0, arr.length - 1);

console.log(arr);