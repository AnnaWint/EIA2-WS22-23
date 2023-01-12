var A10_BirdhouseClasses;
(function (A10_BirdhouseClasses) {
    /*
             Aufgabe: <A010_BirdhouseClasses>
             Name: <Anna Wintermantel>
             Matrikel: <271140>
             Datum: < 12.01.2023   >
             Quellen:
             */
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            let random1 = Math.floor(Math.random() * (1000 - 1) + 1);
            let random2 = Math.floor(Math.random() * (700 - 1) + 1);
            this.x = random1;
            this.y = random2;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = 1;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    A10_BirdhouseClasses.Vector = Vector;
})(A10_BirdhouseClasses || (A10_BirdhouseClasses = {}));
//# sourceMappingURL=Vector.js.map