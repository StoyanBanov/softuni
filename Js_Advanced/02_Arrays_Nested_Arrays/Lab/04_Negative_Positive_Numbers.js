arr => arr.reduce((t, c) => {
    c < 0 ? t.unshift(c) : t.push(c)
    return t
}, []).join('\n')