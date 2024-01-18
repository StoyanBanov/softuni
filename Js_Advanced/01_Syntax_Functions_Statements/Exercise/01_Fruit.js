(fruit, grams, priceK) =>
    console.log(`I need $${(grams / 1000 * priceK).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`)