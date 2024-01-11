function solve(matrix) {
    const checkSum = getArrSum(matrix[0])

    if (matrix.some(r => getArrSum(r) != checkSum))
        return false

    for (let i = 0; i < matrix[0].length; i++) {
        let arr = []
        for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i])
        }

        if (getArrSum(arr) != checkSum)
            return false
    }

    return true

    function getArrSum(arr) {
        return arr.reduce((t, c) => t + c)
    }
}

console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));