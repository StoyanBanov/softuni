import { expect } from "chai"

class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be a string');
    }

    toString() {
        return this._stringArray.join('');
    }
}


describe('StringBuilder', () => {
    describe('constructor', () => {
        it('throw TypeError if not a string', () => {
            expect(() => new StringBuilder(1)).to.throw()
        })

        it('should append string chars', () => {
            const sb = new StringBuilder('123')
            expect(sb.toString()).to.equal('123')
        })

        it('should instantiate empty array', () => {
            const sb = new StringBuilder()
            expect(sb.toString()).to.equal('')
        })
    })

    describe('append', () => {
        it('throw TypeError if not a string', () => {
            expect(() => new StringBuilder().append(1)).to.throw()
        })

        it('should append string chars', () => {
            const sb = new StringBuilder()
            sb.append('123')
            expect(sb.toString()).to.equal('123')
        })

        it('should append string chars', () => {
            const sb = new StringBuilder('abc')
            sb.append('123')
            expect(sb.toString()).to.equal('abc123')
        })

        it('should append string chars', () => {
            const sb = new StringBuilder('abc')
            sb.append('123')
            expect(sb._stringArray.slice(3).join('')).to.equal('123')
        })
    })

    describe('prepend', () => {
        it('throw TypeError if not a string', () => {
            expect(() => new StringBuilder().prepend(1)).to.throw()
        })

        it('should prepend string chars', () => {
            const sb = new StringBuilder()
            sb.prepend('123')
            expect(sb.toString()).to.equal('123')
        })

        it('should prepend string chars', () => {
            const sb = new StringBuilder('abc')
            sb.prepend('123')
            expect(sb.toString()).to.equal('123abc')
        })

        it('should prepend string chars', () => {
            const sb = new StringBuilder('abc')
            sb.prepend('123')
            expect(sb._stringArray.slice(0, 3).join('')).to.equal('123')
        })
    })

    describe('insertAt', () => {
        it('throw TypeError if not a string', () => {
            expect(() => new StringBuilder().insertAt(1)).to.throw()
        })

        it('should insert string chars', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.insertAt('123', 1)
            expect(sb._stringArray.slice(1, 4).join('')).to.equal('123')
        })

        it('should insert string chars', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.insertAt('123', 1)
            expect(sb.toString()).to.equal('a123bc')
        })

        it('should insert string chars', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.insertAt('123', 0)
            expect(sb.toString()).to.equal('123abc')
        })

        it('should insert string chars', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.insertAt('123', 3)
            expect(sb.toString()).to.equal('abc123')
        })

        it('should insert string chars', () => {
            const sb = new StringBuilder()
            sb.insertAt('123', 0)
            expect(sb.toString()).to.equal('123')
        })
    })

    describe('remove', () => {
        it('should remove', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.remove(1, 1)
            expect(sb.toString()).to.equal('ac')
        })

        it('should remove', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.remove(1, 1)
            expect(sb._stringArray.join('')).to.equal('ac')
        })

        it('should remove', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.remove(1, 0)
            expect(sb._stringArray.join('')).to.equal('abc')
        })

        it('should remove', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.remove(0, 1)
            expect(sb._stringArray.join('')).to.equal('bc')
        })

        it('should remove', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            sb.remove(0, 3)
            expect(sb._stringArray.join('')).to.equal('')
        })
    })

    describe('_verifyParam', () => {
        it('throw TypeError if not a string', () => {
            expect(() => StringBuilder._vrfyParam(1)).to.throw()
        })
    })

    describe('toString', () => {
        it('returns as string', () => {
            const sb = new StringBuilder()
            sb.append('abc')
            expect(sb.toString()).to.equal('abc')
        })

        it('returns empty string', () => {
            const sb = new StringBuilder()
            expect(sb.toString()).to.equal('')
        })
    })
})