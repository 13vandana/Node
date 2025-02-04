// import using ESmodule
const  https = require('https');
const  axios = require('axios');
const fetch = require('node-fetch');
// const fs = require('fs');
const crypto = require('node:crypto');

const {multi, sum, sub} = require('./mod');

https.get('https://jsonplaceholder.typicode.com/posts', (res) =>{
    console.log('https')});
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>{
        console.log('axios');
    });
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) =>{
        console.log('fetch');
    });
// const file = fs.readFileSync('./test.txt', 'utf8');

// console.log('File', file);
const key = crypto.pbkdf2Sync('munmun', 'sharma', 9000000, 64, 'sha512' );
console.log('Key: ', key);

console.log('I am first app file of this node learning project')

sum(2,10);
sub(2, 10);
console.log(multi(2, 10));