<template>
  <div class="container">
    <van-search
      v-model="searchVal"
      disabled
      shape="around"
      background="#fff"
      placeholder="请输入搜索关键词"
    />

    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item
        v-for="item in categoryList"
        :key="item.id"
        :title="item.name"
      ></van-sidebar-item>
    </van-sidebar>

    <div class="content">
      <div class="desc" ref="bg" :style="{backgroundImage:'url('+currentCategory.banner_url+')'}">
        <h4>{{ currentCategory.front_desc}}</h4>
      </div>

      <div class="goodsList">
        <div class="title">
            <span>{{currentCategory.name}}</span>
        </div>
        <van-grid column-num="3">
           <van-grid-item v-for="item in currentCategory.subCategoryList" :key="item.id">
             <img :src="item.wap_banner_url" alt="">
             <span>{{item.name}}</span>
           </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategory, getCurrentData} from "../api/api";
export default {
  components: {},
  data() {
    return {
      searchVal: "",
      activeKey: 0,
      categoryList: [],
      categoryId: [],
      currentCategory: [],
    };
  },
  async created() {
    const res = await getCategory();
    if (res.errno == 0) {
      this.categoryList = res.data.categoryList;
      this.currentCategory = res.data.currentCategory;
      res.data.categoryList.forEach((item) => {
        this.categoryId.push(item.id);
      });
      console.log(this.currentCategory)
    }
  },
  methods: {
    async onChange (value) {
      let id = this.categoryId[value]
      const res = await getCurrentData({
        id
      })
      if(res.errno === 0) {
        this.currentCategory = res.data.currentCategory
      }

    },
  },
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #fff;
}
.van-sidebar {
  width: 4rem;
  float: left;
  .van-sidebar-item {
    font-size: 0.426667rem;
    height: 1.866667rem;
  }
}
.content {
  background: #fff;
  margin-left: 4rem;
  height: 600px;
  .desc {
    height: 5.3333rem;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    background: url("http://yanxuan.nosdn.127.net/92357337378cce650797444bc107b0f7.jpg")
      no-repeat left top;
    background-size: 100%;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
    }
    h4 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
  }


  .goodsList {
    .title {
      height: 1.333333rem;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 50%;
        height: .053333rem;
        background-color: #ccc;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -25%;
      }
      span {
        display: block;
        width: 30%;
        text-align: center;
        margin: 0 auto;
        background-color: #fff;
        height: 1.333333rem;
        line-height: 1.333333rem;
        position: relative;
        font-size: .426667rem;
      }
    }

    .van-grid-item {
      img {
        width: 1.333333rem;
        height: 1.333333rem;
      }
      span {
        font-size: 12px;
        line-height: .48rem;
        color: #646566;
      }
    }
  }
}
</style>
