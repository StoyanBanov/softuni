function solve(params) {
    const products = {}

    for (let p of params) {
        const [town, pr, price] = p.split(' | '),
            newInfo = { town, price: Number(price) };

        (!products[pr] || products[pr].price > newInfo.price) && (products[pr] = newInfo)
    }

    console.log(
        Object.entries(products)
            .map(([k, v]) => `${k} -> ${v.price} (${v.town})`)
            .join('\n')
    );
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])