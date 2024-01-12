class Hex {
    constructor(value) {
        this.value = value
    }

    valueOf() {
        return this.value
    }

    toString() {
        return '0X' + this.value.toString(16).toUpperCase()
    }

    plus(hex) {
        return new Hex(this.value + hex)
    }

    minus(hex) {
        return new Hex(this.value - hex)
    }

    parse(str) {
        return parseInt(str, 16)
    }
}