var A08_GenerativeArt;
(function (A08_GenerativeArt) {
    /*
              Aufgabe: <A08_Winterlanschaft>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 01.12.2022   >
              Quellen: Alina Hahn
              */
    window.addEventListener("load", handleLoad);
    let crc2;
    let canvas;
    let blue = 0.62;
    let horizont = 0.6;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 70, y: 100 });
        drawCloud({ x: 375, y: 150 }, { x: 325, y: 100 });
        let startMountain = crc2.canvas.height * horizont;
        let posMountain = { x: 0, y: startMountain };
        drawMountain(posMountain, 170, 350, "grey", "white");
        drawMountain(posMountain, 100, 250, "grey", "white");
        drawTree({ x: 100, y: 500 }, -200);
        drawTree({ x: 380, y: 550 }, -300);
        drawTree({ x: 200, y: 550 }, -300);
        drawTree({ x: 500, y: 500 }, -300);
        drawFlyingBird({ x: 300, y: 200 }, "red");
        drawFlyingBird({ x: 200, y: 100 }, "black");
        drawFlyingBird({ x: 100, y: 300 }, "blue");
        drawFlyingBird({ x: 500, y: 250 }, "orange");
        drawFlyingBird({ x: 450, y: 50 }, "red");
        drawFlyingBird({ x: 150, y: 150 }, "blue");
        drawFlyingBird({ x: 250, y: 250 }, "orange");
        drawFlyingBird({ x: 50, y: 200 }, "black");
        drawFlyingBird({ x: 450, y: 100 }, "orange");
        drawFlyingBird({ x: 575, y: 200 }, "black");
        drawFlyingBird({ x: 325, y: 125 }, "red");
        drawFlyingBird({ x: 125, y: 275 }, "red");
        drawFlyingBird({ x: 475, y: 200 }, "blue");
        drawFlyingBird({ x: 75, y: 125 }, "orange");
        drawFlyingBird({ x: 425, y: 275 }, "black");
        drawSnowflake({ x: 250, y: 400 });
        drawSnowflake({ x: 350, y: 540 });
        drawSnowflake({ x: 450, y: 650 });
        drawSnowflake({ x: 400, y: 200 });
        drawSnowflake({ x: 200, y: 500 });
        drawSnowflake({ x: 550, y: 700 });
        drawSnowflake({ x: 100, y: 150 });
        drawSnowflake({ x: 50, y: 750 });
        drawSnowflake({ x: 300, y: 600 });
        drawSnowflake({ x: 400, y: 200 });
        drawSnowflake({ x: 150, y: 300 });
        drawSnowflake({ x: 500, y: 450 });
        drawSnowman({ x: 500, y: 700 });
        drawBirdhouse({ x: 150, y: 800 });
        drawBird({ x: 143, y: 620 }, "black");
        drawBird({ x: 250, y: 725 }, "blue");
        drawBird({ x: 90, y: 485 }, "red");
        drawMirrorBird({ x: 190, y: 620 }, "orange");
        drawMirrorBird({ x: 380, y: 590 }, "black");
    }
    function drawMirrorBird(_position, _color) {
        let bird = canvas.getContext("2d");
        bird.save();
        bird.translate(_position.x, _position.y);
        bird.scale(-1, 1);
        for (let drawn = 0; drawn <= 5; drawn++) {
            bird.beginPath();
            bird.fillStyle = _color;
            bird.arc(0, 0, 10, 0, 2 * Math.PI);
            bird.ellipse(-25, 20, 10, 25, 20, 0, 360);
            bird.moveTo(-30, 30);
            bird.lineTo(-30, 53);
            bird.moveTo(-25, 30);
            bird.lineTo(-25, 53);
            bird.fill();
            bird.moveTo(1, -5);
            bird.lineTo(20, -5);
            bird.lineTo(1, 2);
            bird.stroke();
            bird.strokeStyle = _color;
        }
        bird.restore();
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#94CEFF");
        gradient.addColorStop(blue, "#F3FAF0");
        gradient.addColorStop(1, "#BEE0F5");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSnowflake(_position) {
        let snowflakeLine = canvas.getContext("2d");
        snowflakeLine.save();
        snowflakeLine.translate(_position.x, _position.y);
        snowflakeLine.beginPath();
        snowflakeLine.fillStyle = "white";
        snowflakeLine.arc(0, 0, 8, 0, 2 * Math.PI);
        snowflakeLine.fill();
        snowflakeLine.restore();
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        let mountainLine = canvas.getContext("2d");
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
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 20;
        let r2 = 100;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawFlyingBird(_position, _color) {
        let flyingBird = canvas.getContext("2d");
        flyingBird.save();
        flyingBird.translate(_position.x, _position.y);
        for (let drawn = 0; drawn <= 15; drawn++) {
            flyingBird.beginPath();
            flyingBird.fillStyle = _color;
            flyingBird.arc(0, 0, 5, 0, 2 * Math.PI);
            flyingBird.fill();
            flyingBird.moveTo(1, 0);
            flyingBird.bezierCurveTo(8, -5, 15, -10, 20, -2);
            flyingBird.moveTo(-1, 0);
            flyingBird.bezierCurveTo(-8, -5, -15, -10, -20, -2);
            flyingBird.stroke();
            flyingBird.strokeStyle = _color;
        }
        flyingBird.restore();
    }
    function drawTree(_position, _max) {
        let tree = canvas.getContext("2d");
        tree.save();
        tree.translate(_position.x, _position.y);
        tree.beginPath();
        tree.fillStyle = "#40342B ";
        tree.fillRect(0, 0, 20, -75);
        tree.arc(-10, -75, 25, 0.9, 1 * Math.PI);
        tree.lineTo(15, -200);
        tree.lineTo(45, -75);
        tree.arc(20, -75, 25, 0, 0.9 * Math.PI);
        let gradient = tree.createLinearGradient(0, 0, 0, _max);
        gradient.addColorStop(1, " white");
        gradient.addColorStop(0, " #1B7923");
        tree.fillStyle = gradient;
        tree.fill();
        tree.stroke();
        tree.restore();
    }
    function drawBirdhouse(_position) {
        let house = canvas.getContext("2d");
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
    function drawCloud(_position, _size) {
        let cloudCircle = canvas.getContext("2d");
        let nParicles = 20;
        let radiusParticle = 60;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
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
    function drawSnowman(_position) {
        let snowmanCircle = canvas.getContext("2d");
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
    function drawBird(_position, _color) {
        let bird = canvas.getContext("2d");
        bird.save();
        bird.translate(_position.x, _position.y);
        for (let drawn = 0; drawn <= 5; drawn++) {
            bird.beginPath();
            bird.fillStyle = _color;
            bird.arc(0, 0, 10, 0, 2 * Math.PI);
            bird.ellipse(-25, 20, 10, 25, 20, 0, 360);
            bird.moveTo(-30, 30);
            bird.lineTo(-30, 53);
            bird.moveTo(-25, 30);
            bird.lineTo(-25, 53);
            bird.fill();
            bird.moveTo(1, -5);
            bird.lineTo(20, -5);
            bird.lineTo(1, 2);
            bird.stroke();
            bird.strokeStyle = _color;
        }
        bird.restore();
    }
})(A08_GenerativeArt || (A08_GenerativeArt = {}));
//# sourceMappingURL=A08_Winterlandscape.js.map