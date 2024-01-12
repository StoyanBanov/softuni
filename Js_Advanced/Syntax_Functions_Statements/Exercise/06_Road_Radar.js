function solve(speed, area) {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    const difference = speed - limits[area]

    let status

    if (difference > 0) {
        if (difference <= 20) status = 'speeding'
        else if (difference <= 40) status = 'excessive speeding'
        else status = 'reckless driving'
    }

    console.log(
        difference <= 0
            ? `Driving ${speed} km/h in a ${limits[area]} zone`
            : `The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${status}`
    );
}