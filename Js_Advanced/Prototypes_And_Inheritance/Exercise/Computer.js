function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            this.manufacturer = manufacturer
        }
    }

    class Keyboard extends Device {
        constructor(manufacturer, responseTime) {
            super(manufacturer)
            this.responseTime = responseTime
        }
    }

    class Monitor extends Device {
        constructor(manufacturer, width, height) {
            super(manufacturer)
            this.width = width
            this.height = height
        }
    }

    class Battery extends Device {
        constructor(manufacturer, expectedLife) {
            super(manufacturer)
            this.expectedLife = expectedLife
        }
    }

    class Computer extends Device {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            super(manufacturer)

            if (this.constructor == Computer)
                throw new Error()

            this.processorSpeed = processorSpeed
            this.ram = ram
            this.hardDiskSpace = hardDiskSpace
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = weight
            this.color = color

            if (!(battery instanceof Battery))
                throw new TypeError()
            this._battery = battery
        }

        get battery() {
            return this._battery
        }

        set battery(val) {
            if (!(val instanceof Battery))
                throw new TypeError()

            this._battery = val
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)

            if (!(keyboard instanceof Keyboard) || !(monitor instanceof Monitor))
                throw new TypeError()
            this._keyboard = keyboard
            this._monitor = monitor
        }

        get keyboard() {
            return this._keyboard
        }

        set keyboard(val) {
            if (!(val instanceof Keyboard))
                throw new TypeError()

            this._keyboard = val
        }


        get monitor() {
            return this._monitor
        }

        set monitor(val) {
            if (!(val instanceof Monitor))
                throw new TypeError()

            this._monitor = val
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
