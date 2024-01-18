function solve(arr, n) {
    while (n--) {
        arr.unshift(arr.pop())
    }

    console.log(arr.join(' '));
}