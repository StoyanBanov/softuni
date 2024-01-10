function orbit(params) {
    [height, width, y, x] = params
    const matrix = Array.from({ length: height }, () => new Array(width))

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            matrix[i][j] = Math.max(Math.abs(y - i), Math.abs(x - j)) + 1
        }
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'))
}

orbit([3, 3, 2, 2])