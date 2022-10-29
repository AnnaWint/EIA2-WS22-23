namespace A03_Einkaufsliste {

    /*
           Aufgabe: <A03_Einkaufsliste>
           Name: <Anna Wintermantel>
           Matrikel: <271140>
           Datum: < 29.10.2022   >
           Quellen: 
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
        }

        function deleteEntry(): void {
            console.log("Der Eintrag wird gelöscht.");
        }

        function checkEntry(): void {
            console.log("Der Eintrag wird abgehackt.");
        }

        function editEntry(): void {
            console.log("Der Eintrag wird bearbeitet.");
        }

    }

}
