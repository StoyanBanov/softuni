function solution(params) {
    class Car {
        constructor(brand, model, produced) {
            this.brand = brand
            this.model = model
            this.produced = Number(produced)
        }
    }

    class CarRegister {
        constructor(cars) {
            this.brands = cars.reduce((r, { brand, model, produced }) => {
                r[brand]
                    ? r[brand][model] = (r[brand][model] || 0) + produced
                    : r[brand] = { [model]: produced }

                return r
            }, {})
        }

        print() {
            console.log(Object.entries(this.brands).map(([k, v]) => `${k}\n${Object.entries(v).map(([k1, v1]) => `###${k1} -> ${v1}`).join('\n')}`).join('\n'));
        }
    }

    new CarRegister(params.map(p => new Car(...p.split(' | ')))).print()
}

solution(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])