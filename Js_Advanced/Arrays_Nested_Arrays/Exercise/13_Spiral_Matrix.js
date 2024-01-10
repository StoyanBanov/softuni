function solve(width, height) {
    const matrix = Array.from({ length: height }, () => new Array(width)), lastVal = width * height

    let i = 0, j = 0, n = 1, w = width, h = height
    while (n <= lastVal) {
        circle()
    }

    function circle() {
        while (n <= lastVal) {
            matrix[i][j] = n++

            if (j < w - 1) j++
            else if (i < h - 1) i++
            else {
                h--
                j--
                break
            }
        }

        while (n <= lastVal) {
            matrix[i][j] = n++

            if (j > width - w) j--
            else if (i > height - h) i--
            else {
                w--
                j++
                break
            }
        }

    }

    console.log(matrix.map(r => r.join(' ')).join('\n'))
}

solve(3, 3)