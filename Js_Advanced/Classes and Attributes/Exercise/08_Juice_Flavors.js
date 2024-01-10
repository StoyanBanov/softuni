function solution(params) {
    console.log(
        [...params.reduce(([q, b], j) => {
            let [juice, quantity] = j.split(' => ')
            q.set(juice, (q.get(juice) || 0) + Number(quantity))

            q.get(juice) >= 1000 && (b.set(juice, q.get(juice)))

            return [q, b]
        }, [new Map(), new Map()])[1]
            .entries()]
            .map(([k, v]) => `${k} => ${Math.floor(v / 1000)}`)
            .join('\n')
    )
}

solution(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
