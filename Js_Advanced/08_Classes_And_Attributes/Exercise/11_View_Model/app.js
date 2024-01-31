class Textbox {
    constructor(selector, regex) {
        this._invalidSymbols = regex
        this._elements = document.querySelectorAll(selector)

        for (const e of this.elements) {
            e.addEventListener('keyup', event => {
                this.value = event.target.value
            })
        }
    }

    get value() {
        return this._value
    }

    set value(v) {
        this._value = v
        for (let e of this.elements) {
            e.value = this.value
        }
    }

    get elements() {
        return this._elements
    }

    isValid() {
        for (let e of this.elements) {
            if (this._invalidSymbols.test(e.value))
                return false
        }

        return true
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');
