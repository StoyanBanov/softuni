function solution() {
    const qty = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function management(param) {
        let [command, val1, val2] = param.split(' ')
        val2 = Number(val2)

        switch (command) {
            case 'restock':
                qty[val1] += val2
                return 'Success'
            case 'prepare':
                switch (val1) {
                    case 'apple':
                        return checkIngredient(['carbohydrate', 'flavour'], [1, 2], val2)

                    case 'lemonade':
                        return checkIngredient(['carbohydrate', 'flavour'], [10, 20], val2)

                    case 'burger':
                        return checkIngredient(['carbohydrate', 'fat', 'flavour'], [5, 7, 3], val2)

                    case 'eggs':
                        return checkIngredient(['protein', 'fat', 'flavour'], [5, 1, 1], val2)

                    case 'turkey':
                        return checkIngredient(['protein', 'carbohydrate', 'fat', 'flavour'], [10, 10, 10, 10], val2)
                }
            case 'report':
                return `protein=${qty.protein} carbohydrate=${qty.carbohydrate} fat=${qty.fat} flavour=${qty.flavour}`
        }
    }

    function checkIngredient(ings, vals, times) {
        for (let i = 0; i < ings.length; i++) {
            if (qty[ings[i]] < vals[i] * times)
                return `Error: not enough ${ings[i]} in stock`
        }

        for (let i = 0; i < ings.length; i++) {
            qty[ings[i]] -= vals[i] * times
        }

        return 'Success'
    }
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); 