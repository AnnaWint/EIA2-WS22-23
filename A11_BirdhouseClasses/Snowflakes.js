var A11_BirdhouseClasses;
(function (A11_BirdhouseClasses) {
    /*
              Aufgabe: <A11_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 21.01.2023   >
              Quellen:
              */
    class Snowflake extends A11_BirdhouseClasses.Movableojects {
        draw() {
            console.log("draw Snowflake");
            A11_BirdhouseClasses.crc2.save();
            A11_BirdhouseClasses.crc2.translate(this.position.x, this.position.y);
            A11_BirdhouseClasses.crc2.beginPath();
            A11_BirdhouseClasses.crc2.fillStyle = "white";
            A11_BirdhouseClasses.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            A11_BirdhouseClasses.crc2.fill();
            A11_BirdhouseClasses.crc2.restore();
        }
        move(_timeslice) {
            console.log("move Snowflake");
            let offset = new A11_BirdhouseClasses.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A11_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A11_BirdhouseClasses.crc2.canvas.height;
            if (this.position.x > A11_BirdhouseClasses.crc2.canvas.width)
                this.position.x -= A11_BirdhouseClasses.crc2.canvas.width;
            if (this.position.y > A11_BirdhouseClasses.crc2.canvas.height)
                this.position.y -= A11_BirdhouseClasses.crc2.canvas.height;
        }
    }
    A11_BirdhouseClasses.Snowflake = Snowflake;
})(A11_BirdhouseClasses || (A11_BirdhouseClasses = {}));
//# sourceMappingURL=Snowflakes.js.map