
let express = require('express');
let app = express() ,
    fs = require('fs'),
    path = require('path');
app.listen(8001,()=> console.log('port is on !'));
let expressStatic = p => (req,res,next)=>{

    let pathname = path.join(`${__dirname}/${p}`, req.path);
    fs.readFile(pathname, (err,data)=>{
        if(err){
            res.send('not found');
        }else{
            res.send(data);
            next();
        }
    });
}

// __dirname + folder + 请求的名字（req.path）
app.use(expressStatic('dist'));
