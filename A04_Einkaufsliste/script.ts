namespace A04_Einkaufsliste {

    /*
           Aufgabe: <A04_Einkaufsliste>
           Name: <Anna Wintermantel>
           Matrikel: <271140>
           Datum: < 05.11.2022   >
           Quellen: Alina Hahn
           */


    window.addEventListener("load", createListener);


    function createListener(): void {
        let addButton: Element = document.querySelector(".creat");

        addButton.addEventListener("click", createEntry);
        
        datalist(data);
    }

    function datalist(_data: Data): void {

        let name: string;
        let amount: number;
        let comment: string;
        let check: boolean;
        let date: string;

        for (let entry in _data) {

            let itementry: Item[] = _data[entry];
            console.log(itementry[2].name);
            for (let index: number = 0; index < itementry.length; index++) {
                name = itementry[index].name;
                amount = itementry[index].amount;
                comment = itementry[index].comment;
                date = itementry[index].date;

                let newdiv: HTMLElement = document.createElement("div");
                newdiv.innerHTML = name + " " + amount + " " + comment + " " + date;
                document.body.appendChild(newdiv);
            }


        }

    }


    function createEntry(): void {
        console.log("Ein neuer Eintrag wird erstellt.");


        let inputValue: HTMLInputElement = <HTMLInputElement>document.getElementById("entry");
        let amountValue: HTMLInputElement = <HTMLInputElement>document.getElementById("amount");
        let commentValue: HTMLInputElement = <HTMLInputElement>document.getElementById("comment");
        let dateValue: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
        let i: Item = {
            name: inputValue.value,
            amount: +amountValue.value,
            comment: commentValue.value,
            check: false,
            date: dateValue.value
        };

        creatItems(i);

           
            
    }

    function deleteEntry(): void {
        console.log("Der Eintrag wird gelöscht.");
        this.parentElement.remove();
    }

    function checkEntry(): void {
        console.log("Der Eintrag wird abgehackt.");
        let d: Date = new Date();
        let day: number = d.getDate();
        let month: number = d.getDate();
        let year: number = d.getDate();
        let dateString: string = `Zuletzt gekauft am: ${day}.${month}.${year}`;
        this.parentElement.querySelector(".dateString").innerHTML = dateString;
    }


    function creatItems(_element: Item): void {

        let list: HTMLElement = document.querySelector(".list");
        let div: HTMLElement = document.createElement("div");
        let trash: HTMLElement = document.createElement("index");
        let checked: HTMLInputElement = document.createElement("input");
        let label: HTMLElement = document.createElement("label");
        let date: HTMLElement = document.createElement("p");

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



    function editEntry(): void {
        console.log("Der Eintrag wird bearbeitet.");
    }



}
