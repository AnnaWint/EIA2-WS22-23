var A10_BirdhouseClasses;
(function (A10_BirdhouseClasses) {
    /*
              Aufgabe: <A10_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 12.01.2023 >
              Quellen: Alina Hahn
              */
    window.addEventListener("load", handleLoad);
    let horizont = 0.6;
    let background;
    let moveable = [];
    function handleLoad() {
        // console.log("load");
        A10_BirdhouseClasses.canvas = document.querySelector("canvas");
        A10_BirdhouseClasses.crc2 = A10_BirdhouseClasses.canvas.getContext("2d");
        drawBackground();
        createmovableobjects();
        setInterval(update, 20);
    }
    function createmovableobjects() {
        // console.log("create Snowflakes");
        for (let i = 0; i < 250; i++) {
            let snowflake = new A10_BirdhouseClasses.Snowflake();
            moveable.push(snowflake);
        }
        for (let iBird = 0; iBird < 15; iBird++) {
            let bird = new A10_BirdhouseClasses.Bird("red");
            moveable.push(bird);
        }
    }
    function update() {
        // console.log("update");
        A10_BirdhouseClasses.crc2.putImageData(background, 0, 0);
        for (let snowflake of moveable) {
            snowflake.move(1 / 50);
            snowflake.draw();
        }
        for (let bird of moveable) {
            bird.drawFlying();
            bird.moveFlying(1 / 200);
        }
    }
    function drawStanding() {
        // console.log("draw standing ");
        let x = randomNumber(0, A10_BirdhouseClasses.canvas.width);
        let y = randomNumber(600, 800);
        A10_BirdhouseClasses.crc2.save();
        A10_BirdhouseClasses.crc2.translate(x, y);
        A10_BirdhouseClasses.crc2.beginPath();
        A10_BirdhouseClasses.crc2.fillStyle = "red";
        A10_BirdhouseClasses.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
        A10_BirdhouseClasses.crc2.ellipse(-25, 20, 10, 25, 20, 0, 360);
        A10_BirdhouseClasses.crc2.moveTo(-30, 30);
        A10_BirdhouseClasses.crc2.lineTo(-30, 53);
        A10_BirdhouseClasses.crc2.moveTo(-25, 30);
        A10_BirdhouseClasses.crc2.lineTo(-25, 53);
        A10_BirdhouseClasses.crc2.fill();
        A10_BirdhouseClasses.crc2.moveTo(1, -5);
        A10_BirdhouseClasses.crc2.lineTo(20, -5);
        A10_BirdhouseClasses.crc2.lineTo(1, 2);
        A10_BirdhouseClasses.crc2.stroke();
        A10_BirdhouseClasses.crc2.strokeStyle = "red";
        A10_BirdhouseClasses.crc2.restore();
    }
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    A10_BirdhouseClasses.randomNumber = randomNumber;
    function drawBackground() {
        let gradient = A10_BirdhouseClasses.crc2.createLinearGradient(0, 0, 0, A10_BirdhouseClasses.crc2.canvas.height);
        gradient.addColorStop(0, "#94CEFF");
        gradient.addColorStop(horizont, "#F3FAF0");
        gradient.addColorStop(1, "#BEE0F5");
        A10_BirdhouseClasses.crc2.fillStyle = gradient;
        A10_BirdhouseClasses.crc2.fillRect(0, 0, A10_BirdhouseClasses.crc2.canvas.width, A10_BirdhouseClasses.crc2.canvas.height);
        let startMountain = A10_BirdhouseClasses.crc2.canvas.height * horizont;
        let posMountain = { x: 0, y: startMountain };
        drawSun({ x: 75, y: 75 });
        drawCloud({ x: 375, y: 150 }, { x: 325, y: 100 });
        drawMountain(posMountain, 170, 350, "grey", "white");
        drawMountain(posMountain, 100, 250, "grey", "white");
        drawTree({ x: 100, y: 500 }, -200);
        drawTree({ x: 380, y: 550 }, -300);
        drawTree({ x: 200, y: 550 }, -300);
        drawTree({ x: 500, y: 500 }, -300);
        drawSnowman({ x: 500, y: 700 });
        drawBirdhouse({ x: 150, y: 800 });
        drawStanding();
        background = A10_BirdhouseClasses.crc2.getImageData(0, 0, A10_BirdhouseClasses.crc2.canvas.width, A10_BirdhouseClasses.crc2.canvas.height);
    }
    function drawSun(_position) {
        let sunCircle = A10_BirdhouseClasses.canvas.getContext("2d");
        let r1 = 25;
        let r2 = 150;
        let gradient = A10_BirdhouseClasses.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        sunCircle.save();
        sunCircle.translate(_position.x, _position.y);
        sunCircle.fillStyle = gradient;
        sunCircle.arc(0, 0, r2, 0, 2 * Math.PI);
        sunCircle.fill();
        sunCircle.restore();
    }
    function drawCloud(_position, _size) {
        let cloudCircle = A10_BirdhouseClasses.canvas.getContext("2d");
        let nParicles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = A10_BirdhouseClasses.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        cloudCircle.save();
        cloudCircle.translate(_position.x, _position.y);
        cloudCircle.fillStyle = gradient;
        for (let drawn = 0; drawn < nParicles; drawn++) {
            cloudCircle.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            cloudCircle.translate(x, y);
            cloudCircle.fill(particle);
            cloudCircle.restore();
        }
        cloudCircle.restore();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        let mountainLine = A10_BirdhouseClasses.canvas.getContext("2d");
        let stepMin = 100;
        let stepMax = 200;
        let x = 0;
        mountainLine.save();
        mountainLine.translate(_position.x, _position.y);
        mountainLine.beginPath();
        mountainLine.moveTo(0, 0);
        mountainLine.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            mountainLine.lineTo(x, y);
        } while (x < mountainLine.canvas.width);
        mountainLine.lineTo(x, 0);
        mountainLine.closePath();
        let gradient = mountainLine.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        mountainLine.fillStyle = gradient;
        mountainLine.fill();
        mountainLine.restore();
    }
    function drawTree(_position, _max) {
        let tree = A10_BirdhouseClasses.canvas.getContext("2d");
        tree.save();
        tree.translate(_position.x, _position.y);
        tree.beginPath();
        tree.fillStyle = "#40342B ";
        tree.fillRect(0, 0, 20, -75);
        tree.arc(-10, -75, 25, 0.7, 1 * Math.PI);
        tree.lineTo(15, -200);
        tree.lineTo(45, -75);
        tree.arc(20, -75, 25, 0, 0.7 * Math.PI);
        let gradient = tree.createLinearGradient(0, 0, 0, _max);
        gradient.addColorStop(1, " white");
        gradient.addColorStop(0, " #1B7923");
        tree.fillStyle = gradient;
        tree.fill();
        tree.stroke();
        tree.restore();
    }
    function drawSnowman(_position) {
        let snowmanCircle = A10_BirdhouseClasses.canvas.getContext("2d");
        let r1 = 60;
        let r2 = 50;
        let r3 = 40;
        snowmanCircle.save();
        snowmanCircle.translate(_position.x, _position.y);
        snowmanCircle.beginPath();
        snowmanCircle.fillStyle = "white";
        snowmanCircle.arc(0, 0, r1, 0, 2 * Math.PI);
        snowmanCircle.moveTo(50, -110);
        snowmanCircle.arc(0, -110, r2, 0, 2 * Math.PI);
        snowmanCircle.moveTo(40, -200);
        snowmanCircle.arc(0, -200, r3, 0, 2 * Math.PI);
        snowmanCircle.fill();
        snowmanCircle.stroke();
        snowmanCircle.restore();
    }
    function drawBirdhouse(_position) {
        let house = A10_BirdhouseClasses.canvas.getContext("2d");
        house.save();
        house.translate(_position.x, _position.y);
        house.beginPath();
        house.fillStyle = "#CC9610";
        house.fillRect(0, 0, 20, -125);
        house.moveTo(10, -125);
        house.lineTo(-100, -125);
        house.lineTo(-100, -250);
        house.lineTo(10, -325);
        house.lineTo(114, -250);
        house.lineTo(-100, -250);
        house.moveTo(120, -250);
        house.lineTo(120, -125);
        house.lineTo(10, -125);
        house.strokeStyle = "#CC9610";
        house.lineWidth = 8;
        house.stroke();
        house.restore();
    }
})(A10_BirdhouseClasses || (A10_BirdhouseClasses = {}));
//# sourceMappingURL=Main.js.map