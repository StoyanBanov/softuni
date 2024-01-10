function solve(params) {
    params = params.map(p => p.split(' ').map(Number))

    let sum = 0, value = 0
    for (let j = 0; j < params.length; j++) {
        value += params[j][j]
        sum += params[j][j] - params[j][params.length - j - 1]
    }

    if (sum == 0) {
        for (let i = 0; i < params.length; i++) {
            for (let j = 0; j < params.length; j++) {
                if (i != j && params.length - i - 1 != j)
                    params[i][j] = value
            }
        }
    }

    console.log(params.map(r => r.join(' ')).join('\n'));
}

solve(['1 1 1',
    '1 1 1',
    '1 1 0'])