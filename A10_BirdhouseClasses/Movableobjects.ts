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
            this.position.x = randomNumber(0, 600);
            this.position.y = randomNumber(0, 800);
        }
        this.velocity.x = randomNumber(100, 200);
        this.velocity.y = randomNumber(100, 200);

    }

     move(_timeslice: number): void {};
     moveFlying(_timeslice: number): void {};
     draw(): void {};
     drawFlying(): void {};
     
}

}