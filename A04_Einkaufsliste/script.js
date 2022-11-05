var A04_Einkaufsliste;
(function (A04_Einkaufsliste) {
    /*
           Aufgabe: <A03_Einkaufsliste>
           Name: <Anna Wintermantel>
           Matrikel: <271140>
           Datum: < 05.10.2022   >
           Quellen: Alina Hahn
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
            let div = document.createElement("div");
            let trash = document.createElement("i");
            let checked = document.createElement("input");
            let inputValue = document.getElementById(".input");
            let amountValue = document.getElementById(".amount");
            let commentValue = document.getElementById(".comment");
            let dateValue = document.getElementById(".date");
        }
        function deleteEntry() {
            console.log("Der Eintrag wird gelöscht.");
            this.parentElement.parentElement.remove();
        }
        function checkEntry() {
            console.log("Der Eintrag wird abgehackt.");
        }
        function editEntry() {
            console.log("Der Eintrag wird bearbeitet.");
        }
    }
})(A04_Einkaufsliste || (A04_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map