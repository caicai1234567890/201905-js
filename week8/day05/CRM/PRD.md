
## 需求文档
+ 系统有一个列表页面,列表中的每一行是一条数据,并且列表中的数据从服务器动态获取的,然后渲染到页面中
+ 列表的上方有一个新增按钮,点击新增跳转到新增页面,填写新增页面的表单信息然后保存,要把用户填写的数据保存到数据库中,如果成功跳回列表也
+ 列表中,每一行都有一个修改按钮,点击修改按钮跳转到修改页面,并且自动回填用户的基本基本信息到表单中,点击保存按钮把修改后的结果保存数据库中,保存成功跳回列表页,如果失败,alert提示原因
+ 列表中的每一行都有一个删除按钮,点击删除弹出confirm框,点击confirm的确定,则从数据库删除该条数据,如果删除成功刷新列表,如果删除失败,alert提示原因

## 所需接口:

```json
let obj = {
    code : 0,
    data: {} null,
    mag: 'ok'
}
```
+ 获取列表的接口 /api/getList
+ 新增客户信息接口 
/api/addInfo
POST 
参数 : 
name 
age 
phone 
address 
+ 根据用户id返回指定客户的信息 /api/getInfo?id=xx
+ 修改客户信息的接口 
/api/modifyInfo 
POST 
参数 : 
id 
name 
age 
phone 
address 

+ 删除用户信息的接口
/api/removeInfo 
GET 
参数 : id 
