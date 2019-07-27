class Greetting {
    // khai bao constructor cac phuong thuc cua class can lam
    constructor(){
        this.helloWord = 'Hello';
    }

    hello(name){
        return this.helloWord + ' ' + name;
    }
    
}

var Greet = new Greetting();
console.log(Greet.hello('HoangVanDinh'));