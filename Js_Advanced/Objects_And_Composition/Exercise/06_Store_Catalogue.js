function solve(params) {
    const products = {}

    for (const p of params) {
        const k = p[0],
            item = p.replace(' :', ':')

        products[k]
            ? products[k].push(item)
            : products[k] = [item]
    }

    console.log(
        Object.entries(products)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([k, v]) => `${k}\n   ${v.sort((a, b) => a.localeCompare(b)).join('\n   ')}`).join('\n')
    );
}

solve(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'])