(params) => {
    const obj = {}

    for (let i = 0; i < params.length; i += 2) {
        obj[params[i]] = Number(params[i + 1])
    }

    console.log(obj)
}