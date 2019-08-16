
/* let config = require('./config.json');

module.exports = function () {
    var greeter = document.createElement('div');
    greeter.innerHTML = config.textContent ; 
    return greeter ;
} */

import config from './config.json';  
export default function(){
    var greeter = document.createElement('div');
    greeter.innerHTML = config.textContent ; 
    console.log('刷新');
    return greeter ;
}