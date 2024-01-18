(r) =>
    console.log(
        typeof r != 'number'
            ? `We can not calculate the circle area, because we receive a ${typeof r}.`
            : (r * r * Math.PI).toFixed(2)
    )