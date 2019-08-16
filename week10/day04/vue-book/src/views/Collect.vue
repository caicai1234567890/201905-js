<template>
    <div>
        <Header :back="true">列表页</Header>
        <div class="content">
          <ul class="container">
            <li v-for="(item,index) in allBooks" 
            @click="go(item.bookId)"
            :key="index">
               <img :src="item.bookCover" alt="">
               <div class="right">
                 <h4>{{item.bookName}}</h4>
                 <p>{{item.bookInfo}}</p>
                 <p>{{item.bookPrice}}</p>
                 <button class="btn" @click.stop="collect(item)">收藏</button>
               </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getCollectBook, removeCollect } from '../model/collect.js'

export default {
  name: 'List',
  data () {
    return {
      allBooks: []
    }
  },
  created () {
    this.getCollectBook()
  },
  methods: {
    async getCollectBook () {
      this.allBooks = await getCollectBook()
    },
    async remove(id){
      await removeCollect(id)
      this.getCollectBook()
    },
    go(id) {
      // this.$route.push('/detail/id')
     this.$router.push({
        name: 'Collect',
        params: {
          id
        }
      }) 
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 50px;
    li {
      padding: 10px;
      overflow: hidden;
      img {
        float: left;
        width: 16px;
      }
      .right {
        padding-top: 20px;
        float: left;
        .price {
          font-size: 20px;
          color: red;
          margin-bottom: 10px;
        }
        .btn {
          border: none;
          border-radius: 5px;
          width: 60px;
          height: 30px;
          color: #fff;
          background: red;
          font-size: 18px;

          &:nth-of-type(1){
            margin-right: 5px;
          }
        }
      }
    }
  }

</style>
