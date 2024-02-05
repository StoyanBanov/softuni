import { expect } from "chai"

const planYourTrip = {
    choosingDestination(destination, season, year) {
        if (year != 2024) {
            throw new Error(`Invalid Year!`);
        } else {
            if (destination == "Ski Resort") {
                if (season === "Winter") {
                    return `Great choice! The ${season} is the perfect time to visit the ${destination}.`;
                } else {
                    return `Consider visiting during the Winter for the best experience at the ${destination}.`;
                }
            } else {
                throw new Error(`This destination is not what you are looking for.`);
            }
        }
    },

    exploreOptions(activities, activityIndex) {
        let result = [];

        if (
            !Array.isArray(activities) ||
            !Number.isInteger(activityIndex) ||
            activityIndex < 0 ||
            activityIndex >= activities.length
        ) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < activities.length; i++) {
            if (i !== activityIndex) {
                result.push(activities[i]);
            }
        }
        return result.join(", ");
    },

    estimateExpenses(distanceInKilometers, fuelCostPerLiter) {
        let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);

        if (
            typeof distanceInKilometers !== "number" ||
            distanceInKilometers <= 0 ||
            typeof fuelCostPerLiter !== "number" ||
            fuelCostPerLiter <= 0
        ) {
            throw new Error("Invalid Information!");
        } else if (totalCost <= 500) {
            return `The trip is budget-friendly, estimated cost is $${totalCost}.`;
        } else {
            return `The estimated cost for the trip is $${totalCost}, plan accordingly.`;
        }
    },
};



describe('planYourTrip', () => {
    describe('choosingDestination', () => {
        const destination = 'Ski Resort', season = 'Winter'

        it('throws err if year param doesn\'t equal 2024', () => {
            expect(() => planYourTrip.choosingDestination(destination, season, 2020)).to.throw()
        })

        it('throws err if year param doesn\'t equal 2024 and if dest is invalid', () => {
            expect(() => planYourTrip.choosingDestination('a', season, 2020)).to.throw()
        })

        it('throws err if dest param doesn\'t equal ' + destination, () => {
            expect(() => planYourTrip.choosingDestination('a', season, 2024)).to.throw()
        })

        it('returns success msg', () => {
            expect(planYourTrip.choosingDestination(destination, season, 2024))
                .to.equal(`Great choice! The ${season} is the perfect time to visit the ${destination}.`)
        })

        it('returns fail msg', () => {
            expect(planYourTrip.choosingDestination(destination, 'a', 2024))
                .to.equal(`Consider visiting during the Winter for the best experience at the ${destination}.`)
        })
    })

    describe('exploreOptions', () => {
        const activities = ["Skiing", "Snowboarding", "Winter Hiking"]

        it('throws err if activities param is not an array', () => {
            expect(() => planYourTrip.exploreOptions('a', 1)).to.throw()
        })

        it('throws err if index param is not a number', () => {
            expect(() => planYourTrip.exploreOptions([], [])).to.throw()
        })

        it('throws err if index is negative', () => {
            expect(() => planYourTrip.exploreOptions([], -1)).to.throw()
        })

        it('throws err if index is equal to ro larger than the array\'s length', () => {
            expect(() => planYourTrip.exploreOptions([], 1)).to.throw()
        })

        it('returns array as string for index in the middle of the array', () => {
            const ind = 1
            expect(planYourTrip.exploreOptions(activities, ind))
                .to.equal(activities.filter((_, i) => i != ind).join(', '))
        })

        it('returns array as string for index 0', () => {
            const ind = 0
            expect(planYourTrip.exploreOptions(activities, ind))
                .to.equal(activities.filter((_, i) => i != ind).join(', '))
        })

        it('returns array as string for last index', () => {
            const ind = activities.length - 1
            expect(planYourTrip.exploreOptions(activities, ind))
                .to.equal(activities.filter((_, i) => i != ind).join(', '))
        })
    })

    describe('estimateExpenses', () => {
        it('throws if distanceInKilometers param is not a number', () => {
            expect(() => planYourTrip.estimateExpenses(1, [])).to.throw()
        })

        it('throws if fuelCostPerLiter param is not a number', () => {
            expect(() => planYourTrip.estimateExpenses(1, [])).to.throw()
        })

        it('returns budget-friendly msg', () => {
            const dist = 10, fuel = 10
            expect(planYourTrip.estimateExpenses(dist, fuel))
                .to.equal(`The trip is budget-friendly, estimated cost is $${(dist * fuel).toFixed(2)}.`)
        })

        it('returns budget-friendly msg for total close to 500', () => {
            const dist = 49.99, fuel = 10
            expect(planYourTrip.estimateExpenses(dist, fuel))
                .to.equal(`The trip is budget-friendly, estimated cost is $${(dist * fuel).toFixed(2)}.`)
        })

        it('returns fail msg', () => {
            const dist = 60, fuel = 10
            expect(planYourTrip.estimateExpenses(dist, fuel))
                .to.equal(`The estimated cost for the trip is $${(dist * fuel).toFixed(2)}, plan accordingly.`)
        })

        it('returns fail msg for just above 500 total', () => {
            const dist = 50.1, fuel = 10
            expect(planYourTrip.estimateExpenses(dist, fuel))
                .to.equal(`The estimated cost for the trip is $${(dist * fuel).toFixed(2)}, plan accordingly.`)
        })
    })
})