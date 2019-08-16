

//  区分新增还是删除: 新增时url没有id的问号传参,修改时url是带有id的问号传参
let $ = selector => document.querySelector(selector);
let userName = $('#username'),
    age = $('#age'),
    phone = $('#phone'),
    address = $('#address'),
    saveBtn = $('#save');

let idReg = /id=(\d+)/g;
let isModify = idReg.exec(location.search);
// exec方法如果捕获不到返回null,捕获到返回数组,第一项是大正则捕获到的内容,从第二项开始,就是小分组捕获到的内容
let api = ''; // 根据是新增还是修改保存不同的接口
if (isModify) {
    // isModify 捕获到是一个数组,修改
    // 如果是修改需要回填页面中的值

    // 回显用户原有的数据
    // 1. 发送ajax获取指定id的数据
    let [, id] = isModify; // 从正则捕获的结果中获得结果
    axios.get('/api/getInfo?id=' + id).then(({ data }) => {
        if (data.code === 0) {
            // 通过给input 的value赋值回显原有的数据
            console.log(data);
            // let { data: {name ,age,phone,address } } = data;
            // console.log(name ,age,phone,address);
             username.value = data.data.name;
            age.value = data.data.age;
            phone.value = data.data.phone;
            address.value = data.data.address; 
        } else {
            alert(data.msg);
        }
    });
    api = '/api/modifyInfo'; // 保存修改接口
} else {
    // isModify 是null,新增
    api = '/api/addInfo'; //用于新增的接口

}

saveBtn.onclick = function(){
    //  获取input 中的value 
    let data = {
        name : userName.value ,
        age : age.value,
        phone : phone.value,
        address : address.value
    };
    // 如果是修改,需要给data添加一个id属性
    if(isModify) data.id = isModify[1];

    // 把data通过post请求发送给接口
    axios.post(api,data).then(({data}) => {
        if(data.code === 0){
            window.location.href = '/';
        }else{
            alert(data.msg);
        };
    });
};





