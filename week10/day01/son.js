
// 儿子组件依赖孙子组件,儿子组件要用孙子组件

// 导入
import grandson from './grandson.js';
export default {
    template: `<div>{{gen}}<grandson></grandson></div>`,
    data(){
        return {
            gen: 'Son'
        }
    },
    components:{
        grandson
    }
}

// 在组件嵌套的时候: 先把组件导入进来,然后注册组件,最后在template里面写组件对应的标签即可