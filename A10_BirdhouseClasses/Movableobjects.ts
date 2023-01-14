namespace A10_BirdhouseClasses {

    /*
              Aufgabe: <A10_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 12.01.2023 >
              Quellen: 
              */


    export class Movableojects {

        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector) {

            if (this.position) {

                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }
            this.velocity = new Vector(0, 0);
        }
        
        move(_timeslice: number): void { };
        moveFlying(_timeslice: number): void { };
        draw(): void { };
        drawFlying(): void { };

    }

}