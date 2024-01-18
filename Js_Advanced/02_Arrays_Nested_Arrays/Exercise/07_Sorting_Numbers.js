function solve(arr) {
    arr.sort((a, b) => a - b)

    return new Array(arr.length).fill(0).map((_, i) => i % 2 ? arr.pop() : arr.shift())
}
