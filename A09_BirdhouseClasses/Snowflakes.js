var A09_BirdhouseClasses;
(function (A09_BirdhouseClasses) {
    /*
              Aufgabe: <A09_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 15.12.2022   >
              Quellen:< Lisa Blindenhöfer, Alina Hahn>
              */
    class Snowflake {
        position;
        velocity;
        constructor() {
            console.log("Snowflake constructor");
            this.position = new A09_BirdhouseClasses.Vector(0, 0);
            this.velocity = new A09_BirdhouseClasses.Vector(0, 0);
            this.velocity.random(100, 200);
        }
        draw() {
            console.log("draw Snowflake");
            A09_BirdhouseClasses.crc2.save();
            A09_BirdhouseClasses.crc2.translate(this.position.x, this.position.y);
            A09_BirdhouseClasses.crc2.beginPath();
            A09_BirdhouseClasses.crc2.fillStyle = "white";
            A09_BirdhouseClasses.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A09_BirdhouseClasses.crc2.fill();
            A09_BirdhouseClasses.crc2.restore();
        }
        move(_timeslice) {
            console.log("move Snowflake");
            let offset = new A09_BirdhouseClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A09_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A09_BirdhouseClasses.crc2.canvas.height;
            if (this.position.x > A09_BirdhouseClasses.crc2.canvas.width)
                this.position.x -= A09_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y > A09_BirdhouseClasses.crc2.canvas.height)
                this.position.y -= A09_BirdhouseClasses.crc2.canvas.height;
        }
    }
    A09_BirdhouseClasses.Snowflake = Snowflake;
})(A09_BirdhouseClasses || (A09_BirdhouseClasses = {}));
//# sourceMappingURL=Snowflakes.js.map