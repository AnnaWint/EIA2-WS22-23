namespace A01_RandomPoem {

/*
Aufgabe: <A01_Zufallsgedicht>
Name: <Anna Wintermantel>
Matrikel: <271140>
Datum: <13.10.2022>
Quellen: <Alina Hahn>
*/

let subject: string [] = ["Frodo", "Sam", "Gandalf", "Lucie", "Eric", "Ute" ];

let predicat: string [] = ["sucht", "rätselt", "baut", "schreibt", "liest", "hört"];

let object: string [] = ["Bücher", "Essen", "im Meer", "im Wald", "Rätsel", "Häuser"];

//console.log (subject);
//console.log (predicat);
//console.log(object);

debugger;

for (let index: number = subject.length; index > 0; index--) {
   // console.log(index);
    console.log(getVerse(subject, predicat, object));
}

function getVerse(_subject: string[], _predicat: string[], _object: string[]): string {
    let randomN: number;
    let output: string = "";

    randomN = Math.floor(Math.random() * _subject.length); 
    let randomS: string[] = _subject.splice(randomN, 1) ;
    
    randomN = Math.floor(Math.random() * _predicat.length);
    let randomP: string[] = _predicat.splice(randomN, 1) ;


    randomN = Math.floor(Math.random() * _object.length);
    let randomO: string[] = _object.splice(randomN, 1) ; 

    //console.log(randomN);

    output = randomS + " " + randomP + " " + randomO; 
    return output ;

}

}