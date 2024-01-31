import { expect } from "chai"

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('lookupChar', () => {
    it('returns undefined for no string parameter 1', () => {
        expect(lookupChar([], 1)).to.be.undefined
    })

    it('returns undefined for no int parameter 2', () => {
        expect(lookupChar('a', '')).to.be.undefined
    })

    it('returns undefined for no int parameter 2', () => {
        expect(lookupChar('a', 1.5)).to.be.undefined
    })

    it('returns error message for invalid index', () => {
        expect(lookupChar('abc', 4)).to.equal("Incorrect index")
    })

    it('returns error message for invalid index', () => {
        expect(lookupChar('abc', 3)).to.equal("Incorrect index")
    })

    it('returns error message for invalid index', () => {
        expect(lookupChar('abc', -1)).to.equal("Incorrect index")
    })

    it('works', () => {
        expect(lookupChar('abc', 0)).to.equal("a")
    })
    it('works', () => {
        expect(lookupChar('abc', 2)).to.equal("c")
    })
})