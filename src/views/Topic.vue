<template>
  <div>
    <ul class="topic">
      <li v-for="item in topicList" :key="item.id">
        <img :src="item.scene_pic_url" alt="">
        <div class="info">
          <h4>{{item.title}}</h4>
          <p class="desc">{{item.subtitle}}</p>
          <p class="price">{{item.price_info | filterMoney}}起</p>
        </div>
      </li>
    </ul>
    <div class="changePage">
      <van-button type="default" class="prev" :disabled="isPrev" @click="prevPage">上一页</van-button>
      <van-button type="default" class="next" :disabled="isNext" @click="nextPage">下一页</van-button>
    </div>
  </div>
</template>

<script>
import {getTopic} from '../api/api'
export default {
  components: {},
  data() {
    return {
      page: 1,
      currentPage: 0,
      totalPges: 0,
      topicList: []
    }
  },
  computed: {
    isPrev () {
      return this.currentPage === 1 ? true : false
    },
    isNext () {
      return this.currentPage == this.totalPges ? true : false
    }
  },
  created () {
    this.getTopicData(this.page)
  },
  methods: {
    async getTopicData (page) {
      const res = await getTopic({
        page: page,
        size: 10
      })
      if(res.errno == 0) {
        this.currentPage = res.data.currentPage
        this.topicList = res.data.data
        this.totalPges = res.data.totalPages
      }
    },

    prevPage () {
      if(this.page <= 1) {
        return
      }
      this.page--
      this.getTopicData(this.page)
    },
    nextPage () {
      if(this.page >= this.totalPges) {
        return
      }
      this.page++
      this.getTopicData(this.page)
    }
  }
}
</script>
<style lang="less" scoped>
.topic {
  padding-bottom: .533333rem;
  li {
    margin-bottom: .533333rem;
    img {
      width: 100%;
    }
    .info {
      overflow: hidden;
      height: 3.2rem;
      background-color: #fff;
      text-align: center;
      h4 {
        font-size: .48rem;
        font-weight: 500;
        margin: .533333rem 0;
      }
      .desc {
        font-size: .426667rem;
        margin: .533333rem 0;
      }
      .price {
        font-size: .373333rem;
        margin: 0 0 .533333rem;
        color: darkred;
      }
    }
  }
}
.changePage {
  width: 100%;
  color: darkred;
  padding-bottom: 4rem;
  .prev {
    width: 50%;
    color: darkred;
  }
  .next {
    width: 50%;
    color: darkred;
  }
}
</style>
