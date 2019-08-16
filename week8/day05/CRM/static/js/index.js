
let list = document.getElementById('list');
queryList();
function queryList(){
    axios.get('/api/getList').then(({ data }) => {
        if (data.code === 0){
            // 
            bindHTML(data.data);
        }else{
            alert(data.msg);
        }
    });
}

function bindHTML(data){
    let str = ``;
    data.forEach(({id,name,age,phone,address}) => {
        str += `<li>
        <span class="w50">${id}</span>
        <span class="w150">${name}</span>
        <span class="w50">${age}</span>
        <span class="w200">${phone}</span>
        <span class="w200">${address}</span>
        <span class="w150">
            <a href="/modify.html?id=${id}">修改</a>
            <a href="javascript:;" del-id="${id}">删除</a>
        </span>
        </li>` ;
    });
    console.log(str);
    list.innerHTML = str;
}

// 删除: 点击删除按钮,弹出confirm框,如果点击cinfirm的确定,大宋ajax请求让服务端删除
// 采用事件委托处理删除
list.onclick = function(e){
    // 事件委托需要确定点击的是不是删除按钮
    // 事件源必须是a标签且带有del-id属性
    let cId = e.target.getAttribute('del-id');
    if(e.target.nodeName.toUpperCase() === 'A' && cId ){
        let isDel = confirm(`确定要删除id为${cId}的客户吗?`);
        if(isDel){
            axios.get(`/api/removeInfo?id=${cId}`).then(({data})=>{
                if(data.code === 0){
                    // 如果删除成功,要刷新列表
                    // 1. 重新加载页面: window.location.reload()或者window.location.href = window.location.href 
                    // 2. 局部刷新: 重新发送ajax请求,然后渲染数据(推荐使用)
                    queryList();
                }else{
                    alert(data.msg);
                }
            });
        }
        
    }
};