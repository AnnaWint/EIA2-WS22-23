var A11_BirdhouseClasses;
(function (A11_BirdhouseClasses) {
    /*
       Aufgabe: <A11_BirdhouseClasses>
       Name: <Anna Wintermantel>
       Matrikel: <271140>
       Datum: < 21.01.2023   >
       Quellen: Alina Hahn
       */
    class Bird extends A11_BirdhouseClasses.Movableojects {
        target;
        color;
        f = 0.1;
        constructor(_color) {
            super();
            this.color = _color;
        }
        moveFlying(_timeslice) {
            console.log("move Bird");
            let offset = new A11_BirdhouseClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A11_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A11_BirdhouseClasses.crc2.canvas.height;
            if (this.position.x > A11_BirdhouseClasses.crc2.canvas.width)
                this.position.x -= A11_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y > 500)
                this.position.y -= A11_BirdhouseClasses.crc2.canvas.height;
        }
        shoot() {
            console.log("shoot Bird");
        }
        drawFlying() {
            console.log("draw flying Bird");
            A11_BirdhouseClasses.crc2.save();
            A11_BirdhouseClasses.crc2.translate(this.position.x, this.position.y);
            A11_BirdhouseClasses.crc2.beginPath();
            A11_BirdhouseClasses.crc2.fillStyle = this.color;
            A11_BirdhouseClasses.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A11_BirdhouseClasses.crc2.fill();
            A11_BirdhouseClasses.crc2.moveTo(1, 0);
            A11_BirdhouseClasses.crc2.bezierCurveTo(8, -5, 15, -10, 20, -2);
            A11_BirdhouseClasses.crc2.moveTo(-1, 0);
            A11_BirdhouseClasses.crc2.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            A11_BirdhouseClasses.crc2.stroke();
            A11_BirdhouseClasses.crc2.strokeStyle = this.color;
            A11_BirdhouseClasses.crc2.restore();
        }
    }
    A11_BirdhouseClasses.Bird = Bird;
})(A11_BirdhouseClasses || (A11_BirdhouseClasses = {}));
//# sourceMappingURL=Bird.js.map