<template>
  <div class="about">
    <h1 class="h1">This is an about page</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'about',
  created () {
    axios.get('/home/help/search').then((res)=>{
      console.log(res)
    })
  }
}
</script>


<style scoped>
  .h1{
    color:lightblue;
  }
</style>