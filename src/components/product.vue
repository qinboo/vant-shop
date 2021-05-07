<template>
  <ul>
    <li v-for="item in goodsList" :key="item.id" @click="goToDetail(item.id)">
      <img :src="item.list_pic_url" style="display: block" width="100%" alt="" />
      <div class="van-ellipsis">{{ item.name }}</div>
      <div class="price">{{ item.retail_price | filterMoney }}</div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
      goodsList: Array
  },
  data() {
    return {};
  },
  methods: {
    goToDetail (id) {
      this.$router.push('/detail?id=' + id)
    }
  }
};
</script>
<style lang="less" scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .266667rem .4rem;
    background: #fff;
    li {
        width: 49%;
        line-height: .8rem;
        text-align: center;
        margin-bottom: .266667rem;
        background-color: #fff;
        .price {
            color: darkred;
        }
    }
}
</style>