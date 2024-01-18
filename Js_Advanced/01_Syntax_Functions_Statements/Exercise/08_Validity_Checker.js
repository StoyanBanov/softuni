function validate(x1, y1, x2, y2) {
    logDist(x1, y1, 0, 0)
    logDist(x2, y2, 0, 0)
    logDist(x1, y1, x2, y2)

    function logDist(x1, y1, x2, y2) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validateDist(getDistance(x1, y1, x2, y2)) ? '' : 'in'}valid`);
    }

    function validateDist(dist) {
        return Number.isInteger(dist)
    }

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }
}

validate(2, 1, 1, 1)