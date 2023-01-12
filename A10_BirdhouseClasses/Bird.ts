namespace A10_BirdhouseClasses {
    
           /*
              Aufgabe: <A10_BirdhouseClasses>
              Name: <Anna Wintermantel>
              Matrikel: <271140>
              Datum: < 12.01.2023   >
              Quellen: 
              */


             export class Bird extends Movableojects {
               
                type: string;
                color: string;
        
                constructor(_color: string) {
                    super();
                    this.color = _color;
        
                }
        
                moveFlying(_timeslice: number): void {
                    console.log("move Bird");
        
                    let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
                    offset.scale(_timeslice);
                    this.position.add(offset);
        
        
                    if (this.position.x < 0)
                        this.position.x += crc2.canvas.width;
                    if (this.position.y < 0)
                        this.position.y += crc2.canvas.height;
                    if (this.position.x > crc2.canvas.width)
                        this.position.x -= crc2.canvas.width;
                    if (this.position.y > 500)
                        this.position.y -= crc2.canvas.height;
                }
        
        
                drawFlying(): void {
                    console.log("draw flying Bird");
        
                    crc2.save();
                    crc2.translate(this.position.x, this.position.y);
        
                    crc2.beginPath();
                    crc2.fillStyle = this.color;
                    crc2.arc(0, 0, 5, 0, 2 * Math.PI);
                    crc2.fill();
        
        
                    crc2.moveTo(1, 0);
                    crc2.bezierCurveTo(8, -5, 15, -10, 20, -2);
                    crc2.moveTo(-1, 0);
                    crc2.bezierCurveTo(-8, -5, -15, -10, -20, -2);
                    crc2.stroke();
                    crc2.strokeStyle = this.color;
                    crc2.restore();
                }
        
        
}
}
