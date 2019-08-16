
// Common JS 
/* let greeter = require('./Greeter.js');

document.getElementById('root').appendChild(greeter()); */

import axios from 'axios';
// ESModule 
import greeter from './Greeter';
document.getElementById('root').appendChild(greeter());

axios.post('/api/addUser',{
    name : 'lisi',
    phone : '1212323'
}).then(({data})=>{
    console.log(data);
})
import './index.css' ;  // 向js中导入css文件,需要安装css loader