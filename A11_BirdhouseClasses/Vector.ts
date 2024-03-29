namespace A11_BirdhouseClasses {

    /*
             Aufgabe: <A011_BirdhouseClasses>
             Name: <Anna Wintermantel>
             Matrikel: <271140>
             Datum: < 21.01.2023   >
             Quellen:
             */



    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            let random1: number = Math.floor(Math.random() * (1000 - 1) + 1);
            let random2: number = Math.floor(Math.random() * (700 - 1) + 1);
            this.x = random1;
            this.y = random2;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = 1;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }


}
