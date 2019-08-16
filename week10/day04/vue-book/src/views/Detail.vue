<template>
  <div>
    <Header :back="true">详情页</Header>
    <div class="content">
      <div class="container">
        <ul>
          <li>
            <label for="">书名</label>
            <input type="text" v-model="book.bookName">
          </li>
          <li>
            <label for="">价格</label>
            <input type="text" v-model="book.bookPrice">
          </li>
          <li>
            <label for="">信息</label>
            <input type="text" v-model="book.bookInfo">
          </li>
        </ul>
        <button class="btn" @click="updateBook">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getOneBook } from '../model/list'

export default {
  data(){
    return {
      book: {
        bookName: '',
        bookInfo: '',
        bookPrice: ''
      }
    }
  },
  name: 'Detail',
  components: {
    Header
  },
  async created () {
    let { id } = this.$route.params
    this.book = await getOneBook(id)
  },
  methods: {
    updateBook(){

    }
  }
}
</script>

<style scoped lang="less">
  .container {
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    z-index: 101;
    height: 100%;
    background: #fff;
    padding: 20px;

    li {

      label {
        display: block;
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      input {
        display: block;
        width: 260px;
        padding-left: 15px;
        height: 40px;
        margin-bottom: 10px;
      }
      .btn {
        margin: 0 auto;
        border: none;
        border-radius: 5px;
        width: 100px;
        height: 40px;
        background: red;
        color: #fff;
        line-height: 40px;
        text-align: center;
      }
    }
  }
</style>
