
export default {
    template : `<div>{{msg}}
                <button @click="changeMsg>修改msg</button>
                </div>`,
    data(){
        return {

        }
    },
    props: {
        msg : {
            type : [String, Number]
            // 类型校验可以用同一个数组
        },
        methods: {
            changeMsg(){
                //  把msg修改成hehe
                /* this.$emit('change-msg','hehe') */
                // 配合sync修饰符,简化事件写法: this.$emit('update:prop名',数据)
                this.$emit('update:msg','hehe')
            }
        }
    }
}