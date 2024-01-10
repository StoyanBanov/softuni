import { expect } from "chai"

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe('MathEnforcer', () => {
    describe('addFive', () => {
        it('returns undefined if not a number parameter', () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined
        })

        it('returns parameter + 5', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6)
        })

        it('returns parameter + 5', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4)
        })

        it('returns parameter + 5', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5)
        })

        it('returns parameter + 5', () => {
            expect(mathEnforcer.addFive(1.4)).to.equal(6.4)
        })
    })

    describe('subtractTen', () => {
        it('returns undefined if not a number parameter', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined
        })

        it('returns parameter - 10', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0)
        })

        it('returns parameter -10', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        })

        it('returns parameter -10', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5)
        })

        it('returns parameter -10', () => {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5)
        })
    })

    describe('um', () => {
        it('returns undefined if not a number parameter 1', () => {
            expect(mathEnforcer.sum('a', 1)).to.be.undefined
        })

        it('returns undefined if not a number parameter 2', () => {
            expect(mathEnforcer.sum(1, 'a')).to.be.undefined
        })

        it('returns undefined if not a number parameters', () => {
            expect(mathEnforcer.sum([], 'a')).to.be.undefined
        })

        it('returns sum', () => {
            expect(mathEnforcer.sum(10, 5)).to.equal(15)
        })

        it('returns parameter -10', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0)
        })

        it('returns parameter -10', () => {
            expect(mathEnforcer.sum(-1, 2)).to.equal(1)
        })

        it('returns parameter -10', () => {
            expect(mathEnforcer.sum(2.5, 2)).to.equal(4.5)
        })

        it('returns parameter -10', () => {
            expect(mathEnforcer.sum(2, 2.5)).to.equal(4.5)
        })
    })
})