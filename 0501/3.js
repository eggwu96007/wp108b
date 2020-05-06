const V = require('./2')


var x = new V(1, 2, 3);
var y = new V(1, 1, 1);
console.log('x=',x);
console.log('y=',y);
console.log('x.add(y)=', y.add(y));
console.log('x.sub(y)=', y.sub(y));
console.log('x.dot(y)=', y.dot(y));
console.log('x.neg()=', x.neg());
console.log('y.neg()=', y.neg());