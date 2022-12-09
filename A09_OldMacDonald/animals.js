var A09_OldMacDonald;
(function (A09_OldMacDonald) {
    /*
             Aufgabe: <A09_OldMacDonald>
             Name: <Anna Wintermantel>
             Matrikel: <271140>
             Datum: < 08.12.2022   >
             Quellen: Externe Hilfe
             */
    class Animal {
        name;
        species;
        food;
        sound;
        lyrics;
        hunger;
        constructor(_name, _species, _food, _sound, _hunger) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.lyrics = "... he had a " + this.species + " E-I-E-I-O with a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " everywhere a " + this.sound + " " + this.sound + " old MacDonald had a Farm E-I-E-I-O.";
            this.hunger = _hunger;
        }
        eat(_stock) {
            let foodstock = _stock.get(this.food);
            foodstock -= this.hunger;
            _stock.set(this.food, foodstock);
        }
    }
    A09_OldMacDonald.Animal = Animal;
})(A09_OldMacDonald || (A09_OldMacDonald = {}));
//# sourceMappingURL=animals.js.map