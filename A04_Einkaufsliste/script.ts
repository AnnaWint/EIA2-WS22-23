namespace A04_Einkaufsliste {

    /*
           Aufgabe: <A03_Einkaufsliste>
           Name: <Anna Wintermantel>
           Matrikel: <271140>
           Datum: < 05.10.2022   >
           Quellen: Alina Hahn
           */


    window.addEventListener("load", createListener);


    function createListener(): void {
        let addButton: Element = document.querySelector(".creat");
        let deleteButton: Element = document.querySelector(".delete");
        let checkButton: Element = document.querySelector(".check");
        let editButton: Element = document.querySelector(".edit");


        addButton.addEventListener("click", createEntry);
        deleteButton.addEventListener("click", deleteEntry);
        checkButton.addEventListener("click", checkEntry);
        editButton.addEventListener("click", editEntry);

        function createEntry(): void {
            console.log("Ein neuer Eintrag wird erstellt.");

            let div: HTMLElement = document.createElement("div");
            let trash: HTMLElement = document.createElement("i");
            let checked: HTMLInputElement = document.createElement("input");
    
            let inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById(".input");
            let amountValue: HTMLInputElement = <HTMLInputElement>document.getElementById(".amount");
            let commentValue: HTMLInputElement = <HTMLInputElement>document.getElementById(".comment");
            let dateValue: HTMLInputElement = <HTMLInputElement>document.getElementById(".date");
    
        }

        function deleteEntry(): void {
            console.log("Der Eintrag wird gelöscht.");
            this.parentElement.parentElement.remove();
        }

        function checkEntry(): void {
            console.log("Der Eintrag wird abgehackt.");
        }

        function editEntry(): void {
            console.log("Der Eintrag wird bearbeitet.");
        }

    }

}
