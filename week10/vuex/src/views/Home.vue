<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <button @click="fn">给app.vue中的num++</button>
      <button @click="add">给app.vue中的num+2</button>
    </div>
    <div>
      <!-- {{numFormApp}} -->
      {{$store.state.num}}
    </div>
    <p>
      <button @click="addAsync">点击过，1s后给num加一</button>
    </p>
  </div>
</template>

<script>
import eventBus from '../eventBus'
// 当一个数据被多个地方依赖,同时多个地方还要修改这个数据,此时用eventBus导致逻辑分复杂,类似这种情况用vuex来解决
export default {
  name: 'home',
  data () {
    return {
      numFormApp: 0
    }
  },
  created () {
    /* eventBus.$on('receiveNum', (val) => {
      this.numFormApp = val
      console.log('来自app.vue的num' + val)
    })
    eventBus.$emit('getNum') */
  },
  methods: {
     fn () {
      // eventBus.$emit('addNum')
      // this.$store.state.num++
      // 如果修改store中的数据,需要提交mutation
      this.$store.commit('addNum')
    },
    add () {
      // 给store中的num + 2
      // commit(type,payload)
      // type mutation的名字
      // payload 传递给mutation的载荷
      this.$store.commit('addNumByNum', {num:2})
    },
    addAsync () {
      // 异步更新 store 中的num
      // 异步更新需要分发action
      // this.$store.dispatch(type) 用来分发action
      // type是action的名字
      this.$store.dispatch('asyncAdd' ,'这是payload')
    }
  }
}
</script>
