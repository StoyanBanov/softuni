(function extend() {
    String.prototype.ensureStart = function (s) {
        return this.startsWith(s) ? this.toString() : s + this.toString()
    }

    String.prototype.ensureEnd = function (s) {
        return this.endsWith(s) ? this.toString() : this.toString() + s
    }

    String.prototype.isEmpty = function () {
        return this.toString().length <= 0
    }

    String.prototype.truncate = function (n) {
        let str = this.toString()

        if (str.length <= n) return str

        if (n < 4) return '.'.repeat(n)

        if (!str.includes(' ') || str.indexOf(' ') + 3 >= n) return str.substring(0, n - 3) + '...'

        const words = str.split(' ')
        let currentLength = 0, i = 0
        for (w of words) {
            if ((currentLength += w.length + 1) + 2 <= n) i++
            else break
        }

        return words.slice(0, i).join(' ') + '...'
    }

    String.format = function (string, ...params) {
        let result = string

        for (let i = 0; i < params.length; i++) {
            while (result.includes(`{${i}}`))
                result = result.replace(`{${i}}`, params[i])
        }

        return result
    }
})()

let str = 'my string';
console.log((str = str.ensureStart('my')));
console.log(''.truncate(6));

console.log((str = str.ensureStart('hello ')));

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

console.log(str = str.truncate(2));

str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}',
    'dog');

console.log(str);