
let express = require('express'),
    bodyParser = require('body-parser');
let app = express();
app.listen(8001,() => console.log('80001 port is on'));

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/api/addUser',(req,res)=>{
    let result = req.body;
    let { name , phone } = result;
    console.log(phone);
    if(!name.trim() || !phone.trim()){
        res.send({
            code : 1 ,
            data : null,
            msg : '姓名和电话必填'
        });
        return ;
    }
    res.send({
        code : 0 ,
        data : null ,
        msg : 'ok'
    });
})