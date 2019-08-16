import Axios from "axios";

// index.js是将来运行在浏览器中
Axios.get('/api/getUser?id=1').then((res)=>{
    if(res.data.code === 0){
        console.log(res.data);
    }else{
        alert(res.date.msg);
    }
})