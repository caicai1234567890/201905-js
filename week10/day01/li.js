
// 用模块化创建的组件: 导出一个Vue实例的配置对象
export default {
    template : `<div @click="fn">lisi{{msg}}</div>`,
    data(){
        return {
            msg : 'Hello'
        }
    },
    methods: {
        fn(){
            console.log('lai le');
        }
    }
}