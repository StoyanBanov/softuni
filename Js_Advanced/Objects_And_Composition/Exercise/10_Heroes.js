function solve(params) {
    const hero = (name) => ({
        name,
        health: 100
    })

    const canFight = () => ({
        fight: function () {
            console.log(`${this.name} slashes at the foe!`);
            this.stamina--
        }
    })

    const canCast = () => ({
        cast: function (spell) {
            console.log(`${this.name} cast ${spell}`);
            this.mana--
        }
    })

    return {
        mage: (name) => Object.assign(hero(name), { mana: 100 }, canCast()),
        fighter: (name) => Object.assign(hero(name), { stamina: 100 }, canFight())
    }
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
