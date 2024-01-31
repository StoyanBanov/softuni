import { expect } from "chai"

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('isSymmetric', () => {
    it('returns false for non-array param', () => {
        expect(isSymmetric('s')).to.be.false
    })

    it('returns true', () => {
        expect(isSymmetric([1])).to.be.true
    })

    it('returns false', () => {
        expect(isSymmetric([1, 2])).to.be.false
    })

    it("returns true for different types of input", function () {
        expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.be.true;
    });

    it("returns false for different types of input", function () {
        expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { x: 5 }, 'hi', 5])).to.be.false;
    });
})