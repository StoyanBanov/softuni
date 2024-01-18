console.log(((n, k) => new Array(n)
    .fill(null)
    .reduce((arr, _, i) => {
        arr[i] = i > 0
            ? arr.slice(Math.max(i - k, 0), i)
                .reduce((t, c) => t + c)
            : 1

        return arr
    }, new Array(n)))(8, 2))