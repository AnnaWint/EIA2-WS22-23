var A01_RandomPoem;
(function (A01_RandomPoem) {
    /*
    Aufgabe: <A01_Zufallsgedicht>
    Name: <Anna Wintermantel>
    Matrikel: <271140>
    Datum: <13.10.2022>
    Quellen: <Alina Hahn>
    */
    let subject = ["Frodo", "Sam", "Gandalf", "Lucie", "Eric", "Ute"];
    let predicat = ["sucht", "rätselt", "baut", "schreibt", "liest", "hört"];
    let object = ["Bücher", "Essen", "im Meer", "im Wald", "Rätsel", "Häuser"];
    //console.log (subject);
    //console.log (predicat);
    //console.log(object);
    debugger;
    for (let index = subject.length; index > 0; index--) {
        // console.log(index);
        console.log(getVerse(subject, predicat, object));
    }
    function getVerse(_subject, _predicat, _object) {
        let randomN;
        let output = "";
        randomN = Math.floor(Math.random() * _subject.length);
        let randomS = _subject.splice(randomN, 1);
        randomN = Math.floor(Math.random() * _predicat.length);
        let randomP = _predicat.splice(randomN, 1);
        randomN = Math.floor(Math.random() * _object.length);
        let randomO = _object.splice(randomN, 1);
        //console.log(randomN);
        output = randomS + " " + randomP + " " + randomO;
        return output;
    }
})(A01_RandomPoem || (A01_RandomPoem = {}));
//# sourceMappingURL=script.js.map