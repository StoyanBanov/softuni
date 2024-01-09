(function solution() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }

    Array.prototype.skip = function (n) {
        return this.slice(n)
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }

    Array.prototype.sum = function () {
        return this.reduce((t, c) => t + c)
    }

    Array.prototype.average = function () {
        return this.sum() / this.length
    }
})()


let a = [1, 3, 5]

console.log(a.last(1));