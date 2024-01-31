class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static distance({ x: x1, y: y1 }, { x: x2, y: y2 }) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }
}