function solve(params) {
    console.log(
        JSON.stringify(
            params.map(p => {
                p = p.split(' / ')
                p[2] ? p[2] = p[2].split(', ') : p.push([])
                const [name, level, items] = p

                return { name, level: Number(level), items }
            })
        )
    );
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])