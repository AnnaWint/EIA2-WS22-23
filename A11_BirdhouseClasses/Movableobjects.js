var A11_BirdhouseClasses;
(function (A11_BirdhouseClasses) {
    /*
              Aufgabe: <A11_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 21.01.2023 >
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
                this.position = new A11_BirdhouseClasses.Vector(0, 0);
            }
            this.velocity = new A11_BirdhouseClasses.Vector(0, 0);
        }
        move(_timeslice) { }
        ;
        moveFlying(_timeslice) { }
        ;
        draw() { }
        ;
        drawFlying() { }
        ;
        shoot() { }
        ;
    }
    A11_BirdhouseClasses.Movableojects = Movableojects;
})(A11_BirdhouseClasses || (A11_BirdhouseClasses = {}));
//# sourceMappingURL=Movableobjects.js.map