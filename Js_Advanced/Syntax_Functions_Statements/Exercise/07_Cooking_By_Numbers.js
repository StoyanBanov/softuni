function solve(n, ...operations) {
    n = Number(n)

    const opr = {
        chop: () => n /= 2,
        dice: () => n = Math.sqrt(n),
        spice: () => n++,
        bake: () => n *= 3,
        fillet: () => n *= 0.8
    }

    for (const o of operations) {
        opr[o]()
        console.log(n);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')