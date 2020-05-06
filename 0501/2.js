class V{
    constructor (a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    add(v2) { 
        return ([this.a + v2.a, this.b + v2.b, this.c + v2.c]);
    }
    sub(v2) { 
        return ([this.a - v2.a, this.b - v2.b, this.c - v2.c]);
    }
    dot(v2) { 
        var dot = this.a * v2.a + this.b * v2.b + this.c * v2.c;
        return dot;
    }
    neg() {  
        return ([0 - this.a, 0 - this.b, 0 - this.c]);
    
    }
  }


  module.exports = V