import { expect } from "chai"

function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}

describe('createCalculator', () => {
    describe('subtract', () => {
        it('subtract should have a parameter of type number', () => {
            const ca = createCalculator()
            ca.subtract('s')
            expect(ca.get()).to.be.NaN
        })

        it('subtract should have a number param', () => {
            const ca = createCalculator()
            ca.subtract(1)
            expect(ca.get()).to.be.equal(-1)
        })

        it('subtract could have a parameter string number', () => {
            const ca = createCalculator()
            ca.subtract('1')
            expect(ca.get()).to.be.equal(-1)
        })
    })

    describe('add', () => {
        it('add should have a parameter of type number', () => {
            const ca = createCalculator()
            ca.add('s')
            expect(ca.get()).to.be.NaN
        })

        it('add could have a parameter string representation of a number', () => {
            const ca = createCalculator()
            ca.add('1')
            expect(ca.get()).to.be.equal(1)
        })

        it('add should have a number param', () => {
            const ca = createCalculator()
            ca.add(1)
            expect(ca.get()).to.be.equal(1)
        })
    })
})