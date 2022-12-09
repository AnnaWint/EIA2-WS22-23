var A09_OldMacDonald;
(function (A09_OldMacDonald) {
    /*
            Aufgabe: <A09_OldMacDonald>
            Name: <Anna Wintermantel>
            Matrikel: <271140>
            Datum: < 08.12.2022   >
            Quellen: Externe Hilfe
            */
    let headline;
    let button;
    let generalLyrics;
    let animalCharacteristics;
    let animalLyrics;
    let foodstock;
    let groceryList;
    let newButton;
    let cat;
    let dog;
    let chicken;
    let cow;
    let pig;
    let macDonaldsAnimals;
    let currentstock;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        headline = document.createElement("span");
        headline.classList.add("headline");
        headline.innerHTML = "Welcome to old MacDonalds";
        button = document.createElement("button");
        button.classList.add("button");
        button.innerHTML = "Lets GO!";
        document.body.appendChild(headline);
        document.body.appendChild(button);
        button.addEventListener("click", storageSettings);
    }
    function refreshstock() {
        let supplyString = "";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "fish: ";
        supplyString += currentstock.get("fish");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "meat: ";
        supplyString += currentstock.get("meat");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "corn: ";
        supplyString += currentstock.get("corn");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "grass: ";
        supplyString += currentstock.get("grass");
        supplyString += " kg";
        supplyString += "<br>";
        supplyString += "<br>";
        supplyString += "bread: ";
        supplyString += currentstock.get("bread");
        supplyString += " kg";
        foodstock.innerHTML = supplyString;
    }
    function storageSettings() {
        headline.remove();
        button.remove();
        generalLyrics = document.createElement("span");
        generalLyrics.classList.add("genlLyrics");
        generalLyrics.innerHTML = "Old MacDonald had a farm E-I-E-I-O and on the farm ...";
        animalCharacteristics = document.createElement("span");
        animalCharacteristics.classList.add("animalCharact");
        animalLyrics = document.createElement("span");
        animalLyrics.classList.add("animalLyrics");
        foodstock = document.createElement("span");
        foodstock.classList.add("stock");
        let stockHeadline = document.createElement("h3");
        stockHeadline.innerHTML = "Food stock";
        document.body.appendChild(generalLyrics);
        document.body.appendChild(animalCharacteristics);
        document.body.appendChild(animalLyrics);
        document.body.appendChild(foodstock);
        foodstock.appendChild(stockHeadline);
        createAnimals();
        createFoodstock();
        storage();
        setTimeout(function () {
            storage();
            setTimeout(function () {
                storage();
                setTimeout(function () {
                    endstorage();
                }, 5000);
            }, 5000);
        }, 5000);
    }
    function createAnimals() {
        cat = new A09_OldMacDonald.Animal("Nobody", "cat", "fish", "miauu", 1);
        dog = new A09_OldMacDonald.Animal("Karlo", "dog", "meat", "wufff", 1);
        chicken = new A09_OldMacDonald.Animal("Pips", "chicken", "corn", "boork", 5);
        cow = new A09_OldMacDonald.Animal("Mama Muh", "cow", "grass", "muhh", 7);
        pig = new A09_OldMacDonald.Animal("Fabio", "pig", "bread", "ouinck", 6);
        macDonaldsAnimals = [cat, dog, chicken, cow, pig];
    }
    function createFoodstock() {
        currentstock = new Map();
        currentstock.set("fish", getRandomNumber(2, 10));
        currentstock.set("meat", getRandomNumber(3, 10));
        currentstock.set("corn", getRandomNumber(5, 30));
        currentstock.set("grass", getRandomNumber(7, 40));
        currentstock.set("bread", getRandomNumber(6, 45));
    }
    function storage() {
        let currentAnimal = macDonaldsAnimals[getRandomNumber(0, macDonaldsAnimals.length)];
        currentAnimal.eat(currentstock);
        refreshstock();
        refreshAnimalCharacteristics(currentAnimal);
        refreshAnimalLyrics(currentAnimal);
    }
    function refreshAnimalCharacteristics(currentAnimal) {
        let characteristics = "";
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "My name is " + currentAnimal.name;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I'm a " + currentAnimal.species;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I like to eat " + currentAnimal.food;
        characteristics += "<br>";
        characteristics += "<br>";
        characteristics += "I make " + currentAnimal.sound;
        animalCharacteristics.innerHTML = characteristics;
    }
    function refreshAnimalLyrics(currentAnimal) {
        let lyricsOfAnimal = "";
        lyricsOfAnimal = currentAnimal.lyrics;
        animalLyrics.innerHTML = lyricsOfAnimal;
    }
    function endstorage() {
        generalLyrics.remove();
        animalCharacteristics.remove();
        animalLyrics.remove();
        groceryList = document.createElement("span");
        groceryList.classList.add("grocery");
        let groceries = "";
        groceries += "<br>";
        groceries += "<br>";
        groceries += "Old MacDonald needs:";
        groceries += "<br>";
        groceries += "<br>";
        currentstock.forEach((value, key) => {
            if (value <= 10) {
                groceries += "-" + key;
                groceries += "<br>";
                groceries += "<br>";
            }
        });
        groceryList.innerHTML = groceries;
        newButton = document.createElement("button");
        newButton.classList.add("newButton");
        newButton.innerHTML = "Restart a new day";
        document.body.appendChild(groceryList);
        document.body.appendChild(newButton);
        newButton.addEventListener("click", restartFunction);
    }
    function restartFunction() {
        document.body.innerHTML = "";
        storageSettings();
    }
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
})(A09_OldMacDonald || (A09_OldMacDonald = {}));
//# sourceMappingURL=main.js.map