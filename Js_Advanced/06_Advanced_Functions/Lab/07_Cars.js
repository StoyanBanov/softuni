function solution(params) {
    const cars = {}

    const commands = {
        create(name, _, parentName) {
            cars[name] = {}

            if (!parentName) return

            cars[name]._parent = cars[parentName]
        },
        set(name, key, value) {
            let current = cars[name]

            while (current && !current.hasOwnProperty(key))
                current = current._parent

            current
                ? current[key] = value
                : cars[name][key] = value
        },
        print(name) {
            let result = [],
                current = cars[name]

            while (current) {
                const carString = carToString.apply(current)

                carString && result.push(carString)

                current = current._parent
            }

            console.log(result.join(','));
        }
    }

    for (const prm of params) {
        const [cmnd, ...vals] = prm.split(' ')
        commands[cmnd](...vals)
    }

    function carToString() {
        return Object.entries(this)
            .filter(([k]) => k != '_parent')
            .map(([k, v]) => `${k}:${v}`)
            .join(',')
    }
}