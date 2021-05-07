<template>
  <div class="home">
    <van-search v-model="searchVal" placeholder="商品搜索，共239款好物" disabled background="fff" shape="around" 
    @click="goTopup"/>
    <van-swipe :autoplay="3000" indicator-color="darkred">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" width="100%" style="display: block" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="5">
      <van-grid-item :icon="item.icon_url" :text="item.name" v-for="item in channel" :key="item.id" />
    </van-grid>

    <div class="title">品牌制造商直供</div>
    <ul class="brand">
      <li v-for="item in brandList" :key="item.id">
        <img :src="item.pic_url" alt />
        <h4>{{ item.name }}</h4>
        <div>{{ item.floor_price | filterMoney }}</div>
      </li>
    </ul>

    <div class="title">专题精选</div>
    <div class="mytopic">
      <van-swipe :loop="false" :width="330" :show-indicators="false">
        <van-swipe-item v-for="item in topicList" :key="item.id">
          <img :src="item.item_pic_url" width="100%" height="200" style="display: block" />
          <div>
            {{ item.title }}
            <span>{{ item.price_info | filterMoney }}</span>
          </div>
          <p>{{ item.subtitle }}</p>
        </van-swipe-item>
      </van-swipe>
    </div>


    <!-- <transition name="van-slide-right">
       <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
import { getHome } from '../api/api'
export default {
  components: {},
  data() {
    return {
      searchVal: '',
      banner: [],
      channel: [],
      brandList: [],
      topicList: [],
    }
  },
  created() {
    this.getHomeData()
  },
  methods: {
    async getHomeData() {
      const res = await getHome()
      if (res.errno == 0) {
        let { banner, channel, brandList, topicList } = res.data
        this.banner = banner
        this.channel = channel
        this.brandList = brandList
        this.topicList = topicList
      }
    },

    goTopup () {
      this.$router.push('/popup')

    }
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 1.333333rem;
}
.title {
  margin-top: 0.533333rem;
  background-color: #fff;
  height: 1.333333rem;
  line-height: 1.333333rem;
  text-align: center;
  font-size: 0.533333rem;
}
.brand {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 49%;
    position: relative;
    margin-bottom: 0.266667rem;
    img {
      width: 100%;
      display: block;
      filter: brightness(0.9);
    }
    h4 {
      position: absolute;
      left: 0.266667rem;
      top: 0.266667rem;
      height: 0.8rem;
      line-height: 0.48rem;
    }
    div {
      position: absolute;
      left: 0.266667rem;
      top: 1.2rem;
      line-height: 1.2rem;
      color: darkred;
    }
  }
}
.mytopic {
  background-color: #fff;
  .van-swipe {
    margin-right: 0.266667rem;
    .van-swipe-item {
      box-sizing: border-box;
      padding-left: 0.266667rem;
      div {
        font-size: 0.586667rem;
        line-height: 1.066667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          color: darkred;
        }
      }
      p {
        font-size: 0.426667rem;
        line-height: 0.426667rem;
      }
    }
  }
}
</style>
