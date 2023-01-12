var A10_BirdhouseClasses;
(function (A10_BirdhouseClasses) {
    /*
       Aufgabe: <A10_BirdhouseClasses>
       Name: <Anna Wintermantel>
       Matrikel: <271140>
       Datum: < 12.01.2023   >
       Quellen:
       */
    class Bird {
        position;
        velocity;
        type;
        color;
        constructor(_color) {
            this.position = new A10_BirdhouseClasses.Vector(0, 0);
            this.velocity = new A10_BirdhouseClasses.Vector(0, 0);
            this.color = _color;
        }
        moveFlying(_timeslice) {
            console.log("move Bird");
            let offset = new A10_BirdhouseClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_BirdhouseClasses.crc2.canvas.height;
            if (this.position.x > A10_BirdhouseClasses.crc2.canvas.width)
                this.position.x -= A10_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= A10_BirdhouseClasses.crc2.canvas.height;
        }
        drawFlying() {
            console.log("draw flying Bird");
            A10_BirdhouseClasses.crc2.save();
            A10_BirdhouseClasses.crc2.translate(this.position.x, this.position.y);
            A10_BirdhouseClasses.crc2.beginPath();
            A10_BirdhouseClasses.crc2.fillStyle = this.color;
            A10_BirdhouseClasses.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A10_BirdhouseClasses.crc2.fill();
            A10_BirdhouseClasses.crc2.moveTo(1, 0);
            A10_BirdhouseClasses.crc2.bezierCurveTo(8, -5, 15, -10, 20, -2);
            A10_BirdhouseClasses.crc2.moveTo(-1, 0);
            A10_BirdhouseClasses.crc2.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            A10_BirdhouseClasses.crc2.stroke();
            A10_BirdhouseClasses.crc2.strokeStyle = this.color;
            A10_BirdhouseClasses.crc2.restore();
        }
    }
    A10_BirdhouseClasses.Bird = Bird;
})(A10_BirdhouseClasses || (A10_BirdhouseClasses = {}));
//# sourceMappingURL=Bird.js.map