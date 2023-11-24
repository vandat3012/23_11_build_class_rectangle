class Rectangle {
    constructor (width,height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }

    getPer() {
        return (this.width + this.height) * 2;
    }

}
let myRec = new Rectangle(150,50);
alert(myRec.getArea());
alert(myRec.getPer());
let canvas = document.getElementById("canvas");
let new1 = canvas.getContext('2d');
new1.fillStyle='#2a46fa';
new1.fillRect(10, 10,myRec.width,myRec.height);