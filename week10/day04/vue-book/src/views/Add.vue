<template>
  <div>
    <Header :back="true">添加图书</Header>
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
          <li>
            <label for="">封面</label>
            <input type="text" v-model="book.bookCover">
          </li>
        </ul>
        <button class="btn" @click="addBook">添加图书</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { addBook } from '../model/add'

export default {
  name: 'Add',
  data(){
    return {
      book: {
        bookName: '',
        bookInfo: '',
        bookPrice:'',
        bookCover:''
      }
    }
  },
  name: 'Detail',
  components: {
    Header
  },
  methods: {
    async addBook(){
      let result = await addBook(this.book);
      if( result.code === 0){
        this.$router.push('/list')
      }
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
