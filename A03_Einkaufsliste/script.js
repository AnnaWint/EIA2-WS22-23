var A03_Einkaufsliste;
(function (A03_Einkaufsliste) {
    /*
           Aufgabe: <A03_Einkaufsliste>
           Name: <Anna Wintermantel>
           Matrikel: <271140>
           Datum: < 29.10.2022   >
           Quellen:
           */
    window.addEventListener("load", createListener);
    function createListener() {
        let addButton = document.querySelector(".creat");
        let deleteButton = document.querySelector(".delete");
        let checkButton = document.querySelector(".check");
        let editButton = document.querySelector(".edit");
        addButton.addEventListener("click", createEntry);
        deleteButton.addEventListener("click", deleteEntry);
        checkButton.addEventListener("click", checkEntry);
        editButton.addEventListener("click", editEntry);
        function createEntry() {
            console.log("Ein neuer Eintrag wird erstellt.");
        }
        function deleteEntry() {
            console.log("Der Eintrag wird gelöscht.");
        }
        function checkEntry() {
            console.log("Der Eintrag wird abgehackt.");
        }
        function editEntry() {
            console.log("Der Eintrag wird bearbeitet.");
        }
    }
})(A03_Einkaufsliste || (A03_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map