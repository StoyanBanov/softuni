function solve(...params) {
    const occ = new Map()

    for (const p of params) {
        const type = typeof p

        occ.set(type, (occ.get(type) || 0) + 1)

        console.log(`${type}: ${p}`);
    }

    let a = Array.from(occ.entries()).sort((a, b) => b[1] - a[1])
    for (const o of a) {
        console.log(`${o[0]} = ${o[1]}`);
    }
}