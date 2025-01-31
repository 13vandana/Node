// import using ESmodule
const {multi} = require('./secondApp');
const {sum} = require('./sum');

console.log('I am first app file of this node learning project')

sum(2,10);
console.log(multi(2, 10));