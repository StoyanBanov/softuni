import { expect } from "chai";

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('PaymentPackage', () => {
    describe('constructor', () => {
        it('instantiates', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            expect(pp.name).to.be.equal('Stoyan')
            expect(pp.value).to.be.equal(20)
            expect(pp.VAT).to.be.equal(20)
            expect(pp.active).to.be.true
        })
    })

    describe('name', () => {
        it('gets', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(pp.name).to.be.equal('Stoyan')
        })

        it('sets', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            pp.name = 'Ivan'

            expect(pp.name).to.be.equal('Ivan')
        })

        it('throws', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(() => pp.name = 1).to.be.throw()
        })

        it('throws', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(() => pp.name = '').to.be.throw()
        })
    })

    describe('value', () => {
        it('gets', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(pp.value).to.be.equal(20)
        })

        it('sets', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            pp.value = 10

            expect(pp.value).to.be.equal(10)
        })

        it('sets', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            pp.value = 0

            expect(pp.value).to.be.equal(0)
        })

        it('throws', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(() => pp.value = 'a').to.be.throw()
        })

        it('throws', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(() => pp.value = -1).to.be.throw()
        })
    })

    describe('VAT', () => {
        it('gets', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(pp.VAT).to.be.equal(20)
        })

        it('sets', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            pp.VAT = 10

            expect(pp.VAT).to.be.equal(10)
        })

        it('sets', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            pp.VAT = 0

            expect(pp.VAT).to.be.equal(0)
        })

        it('throws', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(() => pp.VAT = 'a').to.be.throw()
        })

        it('throws', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(() => pp.VAT = -1).to.be.throw()
        })
    })

    describe('active', () => {
        it('gets', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(pp.active).to.be.true
        })

        it('sets', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            pp.active = false

            expect(pp.active).to.be.false
        })

        it('throws', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(() => pp.active = []).to.be.throw()
        })
    })

    describe('toString', () => {
        it('returns', () => {
            const pp = new PaymentPackage('Stoyan', 20)

            expect(pp.toString()).to.be.equal(
                [
                    `Package: Stoyan`,
                    `- Value (excl. VAT): 20`,
                    `- Value (VAT 20%): ${20 * (1 + 20 / 100)}`
                ].join('\n')
            )
        })

        it('returns inactive', () => {
            const pp = new PaymentPackage('Stoyan', 20)
            pp.active = false

            expect(pp.toString()).to.be.equal(
                [
                    `Package: Stoyan (inactive)`,
                    `- Value (excl. VAT): 20`,
                    `- Value (VAT 20%): ${20 * (1 + 20 / 100)}`
                ].join('\n')
            )
        })
    })
})