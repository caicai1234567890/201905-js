let template = ` <div class="modal" v-show="open">
<div class="content">
    <slot name="header"></slot> 
    <slot name="body"></slot> 
    <slot name="footer"></slot> 
    
</div>
</div>`;

export default {
    
        template,
        methods:{
            closeModal(){
            //    this.$emit('shutdown',false); 
            this.$emit('update:open',false)
            }
        },
        props: ['open'],
        mounted () {
            console.log('x');
        }
}