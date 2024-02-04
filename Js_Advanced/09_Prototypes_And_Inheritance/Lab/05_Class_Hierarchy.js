function classHierarchy() {
    class Figure {
        constructor(units) {
            this.units = units || 'cm'
        }

        get unitsMult() {
            let multiplier

            switch (this.units) {
                case 'm':
                    multiplier = 0.1
                    break;
                case 'cm':
                    multiplier = 1
                    break;
                case 'mm':
                    multiplier = 10
                    break;
            }

            return multiplier
        }

        get area() { }

        changeUnits(units) {
            this.units = units
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super()
            this.radius = radius
        }

        get area() {
            return Math.PI * Math.pow(this.radius * this.unitsMult, 2)
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius * this.unitsMult}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units)
            this.width = width
            this.height = height
        }

        get area() {
            return this.width * this.unitsMult * this.height * this.unitsMult
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width * this.unitsMult}, height: ${this.height * this.unitsMult}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}