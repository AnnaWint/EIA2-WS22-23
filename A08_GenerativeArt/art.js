var A08_GenerativeArt;
(function (A08_GenerativeArt) {
    /*
       Aufgabe: <A08_Generative_art>
       Name: <Anna Wintermantel>
       Matrikel: <271140>
       Datum: < 24.11.2022   >
       Quellen:
       */
    window.addEventListener("load", handleload);
    let canvas;
    let crc2;
    function handleload() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#5AF8FA";
        crc2.fillRect(150, 50, crc2.canvas.width, crc2.canvas.height);
        crc2.translate(140, 50);
        drawLine();
        drawCircle();
        drawArc();
    }
    function drawCircle() {
        let circle = canvas.getContext("2d");
        let size = randomNumber(1, 150);
        circle.fillStyle = "blue";
        circle.strokeStyle = "blue";
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * circle.canvas.width;
            let y = Math.random() * circle.canvas.height;
            circle.beginPath();
            circle.arc(x, y, size, 0, 2 * Math.PI);
            circle.fill();
            circle.closePath();
            circle.stroke();
        }
    }
    function drawObjectRandom() {
        let x = randomNumber(0, canvas.width);
        let y = randomNumber(0, canvas.height);
        crc2.save();
        crc2.translate(x, y);
        crc2.fillStyle = Color();
    }
    function drawLine() {
        let lineColor = ["#D49CFA", "#040EDB", "#FA257E"];
        for (let i = 0; i < lineColor.length; i++)
            for (let index = 0; index < 50; index++) {
                let a = randomNumber(0, canvas.width);
                let b = randomNumber(0, canvas.height);
                let c = randomNumber(0, canvas.width);
                let d = randomNumber(0, canvas.height);
                crc2.beginPath();
                crc2.strokeStyle = lineColor[i];
                crc2.moveTo(a, b);
                crc2.lineTo(c, d);
                crc2.closePath();
                crc2.stroke();
            }
        crc2.beginPath();
        crc2.moveTo(800, 400);
        crc2.lineTo(1100, 300);
        crc2.closePath();
        crc2.stroke();
    }
    function drawArc() {
        let arc = canvas.getContext("2d");
        let size = randomNumber(1, 150);
        arc.fillStyle = "purple";
        arc.strokeStyle = "purple";
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * arc.canvas.width;
            let y = Math.random() * arc.canvas.height;
            arc.beginPath();
            arc.arc(x, y, size, 0, 1.0 * Math.PI);
            arc.fill();
            arc.closePath();
            arc.stroke();
        }
    }
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    function Color() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 8; i++) {
            color += letters[Math.floor(Math.random() * 12)];
        }
        return color;
    }
})(A08_GenerativeArt || (A08_GenerativeArt = {}));
//# sourceMappingURL=art.js.map