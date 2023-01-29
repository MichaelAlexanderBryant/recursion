function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    };
    let half = Math.ceil(arr.length / 2);
    let left = arr.slice(0, half);
    let right = arr.slice(half);
    return mergeHelper(mergeSort(left), mergeSort(right));
};

function mergeHelper(a, b) {
    let sortedArr = [];
    while ((a.length > 0) && (b.length > 0)) {
        if (a[0] <= b[0]) {
            sortedArr.push(a.shift());
        } else {
            sortedArr.push(b.shift())
        };
    };
    if (a.length > 0) {
        sortedArr = sortedArr.concat(a);
    } else {
        sortedArr = sortedArr.concat(b);
    };
    return sortedArr;
};