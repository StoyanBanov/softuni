function solve(params) {
    const arr = [params[0]]

    for (const p of params.slice(1)) {
        if (p >= arr[arr.length - 1])
            arr.push(p)
    }

    return arr
}