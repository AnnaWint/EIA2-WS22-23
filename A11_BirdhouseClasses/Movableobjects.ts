namespace A11_BirdhouseClasses {

    /*
              Aufgabe: <A11_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 21.01.2023 >
              Quellen: 
              */


    export class Movableojects {

        protected position: Vector;
        protected velocity: Vector;

        constructor(_position?: Vector) {

            if (this.position) {

                this.position = _position;
            }
            else {
                this.position = new Vector(0, 0);
            }
            this.velocity = new Vector(0, 0);
        }

        public move(_timeslice: number): void { };
        public moveFlying(_timeslice: number): void { };
        public draw(): void { };
        public drawFlying(): void { };
        public shoot(): void { };
    }

}