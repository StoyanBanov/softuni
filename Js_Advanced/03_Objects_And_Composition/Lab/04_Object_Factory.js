(lib, orders) => orders.map(o => Object.assign(o.template, o.parts
    .reduce((t, c) => Object.assign(t, { [c]: lib[c] }), {})))