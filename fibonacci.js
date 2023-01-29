// using iteration
function fibs(n) {
    if (n == 0) {
        return []
    } else if (n == 1) {
        return [0]
    } else if (n == 2) {
        return [0, 1]
    } else {
        nums = [0, 1]
        for (let i = 2; i < n; i++) {
            nums = nums.concat(nums[i-2] + nums[i-1])
        };
        return nums;
    };
};

console.log(fibs(8));

// using recursion
function fibsRec(n, arr = [0,1]) {
    if (n == 0) {
        return [];
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return arr;
    } else {
        newElement = arr[arr.length - 1] + arr[arr.length - 2]
        return fibsRec(n - 1, arr.concat([newElement]))
    }
};

console.log(fibsRec(8));