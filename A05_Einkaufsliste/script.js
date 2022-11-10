var A05_Einkaufsliste;
(function (A05_Einkaufsliste) {
    /*
           Aufgabe: <A05_Einkaufsliste>
           Name: <Anna Wintermantel>
           Matrikel: <271140>
           Datum: < 10.11.2022   >
           Quellen: Alina Hahn
           */
    window.addEventListener("load", createListener);
    async function createListener() {
        let response = await fetch("https://annawint.github.io/EIA2-WS22-23/A05_Einkaufsliste/data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        let addButton = document.querySelector(".creat");
        addButton.addEventListener("click", createEntry);
        datalist(data);
    }
    function datalist(_data) {
        let name;
        let amount;
        let comment;
        let check;
        let date;
        for (let entry in _data) {
            let itementry = _data[entry];
            console.log(itementry[2].name);
            for (let index = 0; index < itementry.length; index++) {
                name = itementry[index].name;
                amount = itementry[index].amount;
                comment = itementry[index].comment;
                date = itementry[index].date;
                let newdiv = document.createElement("div");
                newdiv.innerHTML = name + " " + amount + " " + comment + " " + date;
                document.body.appendChild(newdiv);
            }
        }
    }
    function createEntry() {
        console.log("Ein neuer Eintrag wird erstellt.");
        let inputValue = document.getElementById("entry");
        let amountValue = document.getElementById("amount");
        let commentValue = document.getElementById("comment");
        let dateValue = document.getElementById("date");
        let i = {
            name: inputValue.value,
            amount: +amountValue.value,
            comment: commentValue.value,
            check: false,
            date: dateValue.value
        };
        creatItems(i);
    }
    function deleteEntry() {
        console.log("Der Eintrag wird gelöscht.");
        this.parentElement.remove();
    }
    function checkEntry() {
        console.log("Der Eintrag wird abgehackt.");
        let d = new Date();
        let day = d.getDate();
        let month = d.getDate();
        let year = d.getDate();
        let dateString = `Zuletzt gekauft am: ${day}.${month}.${year}`;
        this.parentElement.querySelector(".dateString").innerHTML = dateString;
    }
    function creatItems(_element) {
        let list = document.querySelector(".list");
        let div = document.createElement("div");
        let trash = document.createElement("index");
        let checked = document.createElement("input");
        let label = document.createElement("label");
        let date = document.createElement("p");
        checked.addEventListener("change", checkEntry);
        trash.addEventListener("click", deleteEntry);
        div.classList.add("entry1");
        trash.classList.add("delete");
        checked.classList.add("check");
        trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
        checked.type = "checkbox";
        label.innerHTML += _element.name + ", " + _element.amount + ", " + _element.comment + ", ";
        date.innerHTML += "Zuletzt gekauft am: " + _element.date;
        date.classList.add("dateString");
        div.append(checked, trash, label, date);
        list.append(div);
    }
    function editEntry() {
        console.log("Der Eintrag wird bearbeitet.");
    }
})(A05_Einkaufsliste || (A05_Einkaufsliste = {}));
//# sourceMappingURL=script.js.map