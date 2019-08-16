<template>
    <div>
        <h1>{{page}}</h1>
        <ul>
            <li v-for="(item,index) in ary " :key="index">
                姓名： {{item.name}}
                <br>
                年龄: {{item.age}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name : 'list',
     data(){
         return {
            page : 'LIST',
            ary : [
                {
                    name : 'lisi',
                    age : 19
                },
                {
                    name : 'zhangsan',
                    age : 20
                }
            ]
         }
     }   
}
</script>

<style scoped>

</style>


