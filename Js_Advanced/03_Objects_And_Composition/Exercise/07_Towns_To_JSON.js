function solve(params) {
    params.shift()
    row = (t, la, lo) => ({
        Town: t,
        Latitude: Number(Number(la).toFixed(2)),
        Longitude: Number(Number(lo).toFixed(2))
    })

    console.log(JSON.stringify(params.map(p => row(...p.slice(2, -2).split(' | ')))));
}