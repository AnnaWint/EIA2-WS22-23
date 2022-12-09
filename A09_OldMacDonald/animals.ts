namespace A09_OldMacDonald {


     /*
              Aufgabe: <A09_OldMacDonald>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 08.12.2022   >
              Quellen: Externe Hilfe
              */



    export class Animal {
        name: string;
        species: string;
        food: string;
        sound: string;
        lyrics: string;
        hunger: number;


        constructor(_name: string, _species: string, _food: string, _sound: string, _hunger: number) {
            this.name = _name;
            this.species = _species;
            this.food = _food;
            this.sound = _sound;
            this.lyrics = "... he had a " + this.species + " E-I-E-I-O with a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there. Here a " + this.sound + " there a " + this.sound + " everywhere a " + this.sound + " " + this.sound + " old MacDonald had a Farm E-I-E-I-O.";
            this.hunger = _hunger;
        }
        eat(_stock: Map<string, number>): void {
            let foodstock: number = _stock.get(this.food)!;
            foodstock -= this.hunger;
            _stock.set(this.food, foodstock);
        }
    }


    }


