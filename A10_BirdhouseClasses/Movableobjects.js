var A10_BirdhouseClasses;
(function (A10_BirdhouseClasses) {
    /*
              Aufgabe: <A10_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 12.01.2023 >
              Quellen:
              */
    class Movableojects {
        position;
        velocity;
        constructor(_position) {
            if (this.position) {
                this.position = _position;
            }
            else {
                this.position = new A10_BirdhouseClasses.Vector(0, 0);
            }
            this.velocity = new A10_BirdhouseClasses.Vector(0, 0);
        }
        move(_timeslice) { }
        ;
        moveFlying(_timeslice) { }
        ;
        draw() { }
        ;
        drawFlying() { }
        ;
    }
    A10_BirdhouseClasses.Movableojects = Movableojects;
})(A10_BirdhouseClasses || (A10_BirdhouseClasses = {}));
//# sourceMappingURL=Movableobjects.js.map