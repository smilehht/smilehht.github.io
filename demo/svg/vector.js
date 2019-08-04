(function () {
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    Vector.prototype = {
        constructor: Vector,
        square() {
            return this.x * this.x + this.y * this.y
        },
        length() {
            return  Math.sqrt(this.square());
        },
        add(v) {
            return new Vector(this.x + v.x, this.y + v.y)
        },
        minus(v) {
            return new Vector(this.x - v.x, this.y - v.y)
        },
        multipy(scale) {
            return new Vector(this.x * scale, this.y * scale)
        },
        normalize(len) {
            if (len === undefined) {
                return 1;
            }
            return this.multipy(len/this.length())
        }
    }
    Vector.fromPoints = function(p1, p2) {
        return new Vector(p2.x - p1.x, p2.y - p1.y)
    }
    window.Vector = Vector;
})()