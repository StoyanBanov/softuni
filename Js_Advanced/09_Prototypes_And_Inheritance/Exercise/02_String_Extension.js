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