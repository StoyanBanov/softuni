function createComputerHierarchy() {
    class Device {
        constructor(manufacturer) {
            this.manufacturer = manufacturer
        }

        static validate(instance, of) {
            if (!(instance instanceof of))
                throw new TypeError()
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

            Device.validate(battery, Battery)
            this._battery = battery
        }

        get battery() {
            return this._battery
        }

        set battery(val) {
            Device.validate(val, Battery)
            this._battery = val
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)

            Device.validate(keyboard, Keyboard)
            this._keyboard = keyboard

            Device.validate(monitor, Monitor)
            this._monitor = monitor
        }

        get keyboard() {
            return this._keyboard
        }

        set keyboard(val) {
            Device.validate(val, Keyboard)
            this._keyboard = val
        }


        get monitor() {
            return this._monitor
        }

        set monitor(val) {
            Device.validate(val, Monitor)
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