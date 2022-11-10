namespace A04_Einkaufsliste {

    /*
           Aufgabe: <A04_Einkaufsliste>
           Name: <Anna Wintermantel>
           Matrikel: <271140>
           Datum: < 05.11.2022   >
           Quellen: 
           */

    export interface Item {
        name: string;
        amount: number;
        comment: string;
        check: boolean;
        date: string;
    }

    export interface Data {
        [entry: string]: Item[];
    }

    export let data: Data = {
        entry: [
            { name: "Olivenöl", amount: 1, comment: "Flasche", check: true, date: "13.10.2022" },
            { name: "Salat", amount: 1, comment: "Kopfsalat", check: false, date: "20.10.2022" },
            { name: "Mehl", amount: 500, comment: "gramm", check: true, date: "15.10.2022" }

        ]
    };



}