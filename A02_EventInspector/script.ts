namespace A02_EventInspector {

    /*
   Aufgabe: <A02_EventInspector>
   Name: <Anna Wintermantel>
   Matrikel: <271140>
   Datum: <21.10.2022>
   Quellen: <Alina Hahn>
   */

    window.addEventListener("load", handleLoade);

    let div: HTMLElement = document.querySelector("div");
    let body: HTMLElement = document.querySelector("body");

    function handleLoade(_event: Event): void {

        document.addEventListener("mousemove", setInfoBox);

        document.addEventListener("click", logInfo);
        div.addEventListener("click", logInfo);
        body.addEventListener("click", logInfo);

        document.addEventListener("keyup", logInfo);
        div.addEventListener("keyup", logInfo);
        body.addEventListener("keyup", logInfo);

    }

    function setInfoBox(_event: MouseEvent): void {
        if (document.querySelector("span") == null) { }
        else {
            let oldSpan: HTMLElement = document.querySelector("span");
            oldSpan.remove();
        }


        let x: number = _event.clientX;
        let y: number = _event.clientY;

        let span: HTMLSpanElement = document.createElement("span");
        let target: HTMLElement = <HTMLElement>_event.target;


        target.appendChild(span);

        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";

        span.innerHTML = "x:" + x + "y:" + y + "<br>" + "target:" + target;

    }


}

function logInfo(_event: Event): void {

    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);


}

function customEvent(_event: Event): void {

    let button: HTMLElement = <HTMLElement>_event.target;
    let event: CustomEvent = new CustomEvent("customEvent", { bubbles: true });

    button.dispatchEvent(event);
    console.log(_event);
}