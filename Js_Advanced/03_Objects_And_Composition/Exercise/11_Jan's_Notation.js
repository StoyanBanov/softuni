function solve(props) {
    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    let res = []

    for (const p of props) {
        if (Number.isInteger(p)) {
            res.push(p)
        } else {
            let [a, b] = res.splice(-2, 2)

            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                console.log("Error: not enough operands!");
                return
            }

            res.push(calculator[p](a, b))
        }
    }

    console.log(res.length == 1 ? res[0] : "Error: too many operands!");
}

solve([7,
    33,
    8,
    '-',
    '*',
    '+'])