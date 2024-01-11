function createCar(params) {
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]

    return {
        model: params.model,
        engine: Object.assign({}, engines.find(e => e.power >= params.power)),
        carriage: {
            type: params.carriage,
            color: params.color
        },
        wheels: new Array(4)
            .fill(params.wheelsize % 2
                ? params.wheelsize
                : params.wheelsize - 1
            )
    }
}