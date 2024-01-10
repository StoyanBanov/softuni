import { expect } from "chai"

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe('isOddOrEven', () => {
    it('returns undefined if the parameter is not a string', () => {
        expect(isOddOrEven(1)).to.be.undefined
    })

    it('returns even', () => {
        expect(isOddOrEven('ab')).to.equal('even')
    })

    it('returns even', () => {
        expect(isOddOrEven('')).to.equal('even')
    })

    it('returns even', () => {
        expect(isOddOrEven('a')).to.equal('odd')
    })

    it('returns even', () => {
        expect(isOddOrEven('abc')).to.equal('odd')
    })
})