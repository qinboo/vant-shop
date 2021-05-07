<template>
  <van-goods-action>
    <van-goods-action-icon
      :icon="isSave ? 'star' : 'star-o'"
      :text="isSave ? '已收藏' : '未收藏'"
      :color="isSave ? 'darkred' : '#666'"
      @click="isSave = !isSave"
    />
    <van-goods-action-icon icon="cart-o" text="购物车" :badge="badge" />
    <van-goods-action-button type="danger" text="立即购买" @click="byNow" />
    <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
  </van-goods-action>
</template>

<script>
export default {
  props: {
    badge: Number,
  },
  data() {
    return {
      isSave: false,
    };
  },
  methods: {
    addToCart() {
        this.$emit('addToCartData')
    },
    byNow() {
      this.$toast("该功能暂未开放");
    },
  },
};
</script>
<style lang="less" scoped></style>
