import { expect } from "chai"

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgbToHexColor', () => {
    describe('inputs should be integers between 0 and 255', () => {
        const red = 2, green = 2, blue = 2
        const hexa = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2)

        it('should run with integers', () => {
            expect(rgbToHexColor(red, green, blue)).to.be.equal(hexa)
        })
    })

    it('returns undefined for inputs string numbers', () => {
        expect(rgbToHexColor('2', '2', '2')).to.be.undefined
    })

    it('green should not run', () => {
        expect(rgbToHexColor('g', 1, 1)).to.be.undefined
    })

    it('green should not run', () => {
        expect(rgbToHexColor(256, 1, 1)).to.be.undefined
    })

    it('green should not run', () => {
        expect(rgbToHexColor(-1, 1, 1)).to.be.undefined
    })

    it('red should not run', () => {
        expect(rgbToHexColor(1, 's', 1)).to.be.undefined
    })

    it('red should not run', () => {
        expect(rgbToHexColor(1, 256, 1)).to.be.undefined
    })

    it('red should not run', () => {
        expect(rgbToHexColor(1, -1, 1)).to.be.undefined
    })

    it('blue should not run', () => {
        expect(rgbToHexColor(1, 1, 'z')).to.be.undefined
    })

    it('blue should not run', () => {
        expect(rgbToHexColor(1, 1, 256)).to.be.undefined
    })

    it('blue should not run', () => {
        expect(rgbToHexColor(1, 1, -255)).to.be.undefined
    })

    it('zeros', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
    })

    it('255s', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')
    })

    describe('must supply 3 integers', () => {
        it('should return undefined with less than 3 inputs', () => {
            expect(rgbToHexColor(1, 1)).to.be.undefined
        })
    })
})