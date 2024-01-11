(width, height, color) => ({
    width,
    height,
    color: color[0].toUpperCase() + color.substring(1),
    calcArea: function () { return this.width * this.height }
})