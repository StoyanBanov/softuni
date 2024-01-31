import { expect } from "chai"

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

describe('sum', () => {
    it('returns sum for an array of numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6)
    })

    it('returns sum for a mixed array of string numbers and numbers', () => {
        expect(sum(['1', 2, 3])).to.equal(6)
    })

    it('returns sum for an array of string numbers', () => {
        expect(sum(['1', '2', '3'])).to.equal(6)
    })

    it('returns sum for an array of bools', () => {
        expect(sum([true, false])).to.equal(1)
    })

    it('throws if the param is not iterable', () => {
        expect(() => sum(true)).to.throw()
    })

    it('returns NaN array\'s values are nor of type number or string numbers', () => {
        expect(sum(['a', 'b'])).be.NaN
    })
})