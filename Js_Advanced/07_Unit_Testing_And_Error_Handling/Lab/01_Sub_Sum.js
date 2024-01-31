function solution(params, start, end) {
    if (!Array.isArray(params)) return NaN

    params = params.map(Number)

    if (start < 0) start = 0
    if (end >= params.length) end = params.length - 1

    return params.slice(start, end + 1).reduce((t, c) => t + c, 0)
}