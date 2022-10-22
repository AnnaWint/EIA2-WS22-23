var A02_EventInspector;
(function (A02_EventInspector) {
    /*
   Aufgabe: <A02_EventInspector>
   Name: <Anna Wintermantel>
   Matrikel: <271140>
   Datum: <21.10.2022>
   Quellen: <Alina Hahn>
   */
    window.addEventListener("load", handleLoade);
    let div = document.querySelector("div");
    let body = document.querySelector("body");
    function handleLoade(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        div.addEventListener("click", logInfo);
        body.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        div.addEventListener("keyup", logInfo);
        body.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        if (document.querySelector("span") == null) { }
        else {
            let oldSpan = document.querySelector("span");
            oldSpan.remove();
        }
        let x = _event.clientX;
        let y = _event.clientY;
        let span = document.createElement("span");
        let target = _event.target;
        target.appendChild(span);
        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";
        span.innerHTML = "x:" + x + "y:" + y + "<br>" + "target:" + target;
    }
})(A02_EventInspector || (A02_EventInspector = {}));
function logInfo(_event) {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}
function customEvent(_event) {
    let button = _event.target;
    let event = new CustomEvent("customEvent", { bubbles: true });
    button.dispatchEvent(event);
    console.log(_event);
}
//# sourceMappingURL=script.js.map