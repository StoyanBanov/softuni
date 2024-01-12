class Stringer {
    constructor(string, initialLength) {
        this.innerString = string
        this.innerLength = initialLength
    }

    increase(val) {
        this.innerLength += val
        if (this.innerLength < 0) this.innerLength = 0
    }

    decrease(val) {
        this.innerLength -= val
        if (this.innerLength < 0) this.innerLength = 0
    }

    toString() {
        return this.innerLength < this.innerString.length
            ? this.innerString.substring(0, this.innerLength) + '...'
            : this.innerString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
