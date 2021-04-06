// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;

    }
    // get diamter is a pseudo property and can be access like a regular property via dot notation or bracket notation
    get diameter()  {
        return this.radius * 2
    }
    get circumference() {
        return 2 * (Math.PI) * this.radius
    }
    get area() {
        return (Math.PI) * (this.radius * this.radius)
    }
    set diameter(a) {
        this.radius = a / 2;
    }
    set circumference(a) {
        this.radius = (a / 2 / (Math.PI));
    }
}