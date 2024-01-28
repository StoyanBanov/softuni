(area, vol, inp) => JSON
    .parse(inp)
    .map(o => ({ area: area.call(o), volume: vol.call(o) }))