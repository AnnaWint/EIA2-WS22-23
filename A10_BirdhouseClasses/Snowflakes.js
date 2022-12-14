var A10_BirdhouseClasses;
(function (A10_BirdhouseClasses) {
    /*
              Aufgabe: <A10_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 12.01.2023   >
              Quellen:
              */
    class Snowflake extends A10_BirdhouseClasses.Movableojects {
        draw() {
            console.log("draw Snowflake");
            A10_BirdhouseClasses.crc2.save();
            A10_BirdhouseClasses.crc2.translate(this.position.x, this.position.y);
            A10_BirdhouseClasses.crc2.beginPath();
            A10_BirdhouseClasses.crc2.fillStyle = "white";
            A10_BirdhouseClasses.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A10_BirdhouseClasses.crc2.fill();
            A10_BirdhouseClasses.crc2.restore();
        }
        move(_timeslice) {
            console.log("move Snowflake");
            let offset = new A10_BirdhouseClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A10_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A10_BirdhouseClasses.crc2.canvas.height;
            if (this.position.x > A10_BirdhouseClasses.crc2.canvas.width)
                this.position.x -= A10_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y > A10_BirdhouseClasses.crc2.canvas.height)
                this.position.y -= A10_BirdhouseClasses.crc2.canvas.height;
        }
    }
    A10_BirdhouseClasses.Snowflake = Snowflake;
})(A10_BirdhouseClasses || (A10_BirdhouseClasses = {}));
//# sourceMappingURL=Snowflakes.js.map