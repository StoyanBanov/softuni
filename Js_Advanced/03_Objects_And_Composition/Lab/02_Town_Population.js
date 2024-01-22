params => Object.entries(params.reduce((t, c) => Object.assign(t, {
    [c.split(' <-> ')[0]]: Number(c.split(' <-> ')[1]) + (t[c.split(' <-> ')[0]] || 0)
}), {})).map(([k, v]) => `${k} : ${v}`).join('\n')