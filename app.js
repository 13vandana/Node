// const {multi} = require('./secondApp');
// const {sum} = require('./sum');
// import using ESmodule
import { multi } from "./secondApp.js";
import { sum } from "./sum.js";
console.log('I am first app file of this node learning project')

sum(2,10);
console.log(multi(2, 10));