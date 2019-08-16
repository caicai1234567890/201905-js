
// 孙子组件
export default {
    template: `<div>{{gen}}</div>`,
    data(){
        // 每个组件都可以有data,data里面的数据是这个组件的私有数据,当前组件也可以接收来自父组件的数据
        return {
            gen : 'Grandson'
        }
    }
}