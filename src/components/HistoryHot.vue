<template>
  <div>
    <div class="history" v-if="isShowHistory">
      <div class="top">
        <h4>历史记录</h4>
        <van-icon name="delete" @click="clearFn"/>
      </div>
      <div class="down">
        <van-tag
          type="default"
          v-for="(item, index) in historyKeywordList"
          :key="index"
          plain
          @click="tagClick(item)"
          >{{ item }}</van-tag
        >
      </div>
    </div>

    <div class="history">
      <div class="top">
        <h4>热门搜索</h4>
      </div>
      <div class="down">
        <van-tag
          type="default"
          v-for="(item, index) in hotKeywordList"
          :key="index"
          plain
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>

<script>
import { clearHistory } from "../api/api";
export default {
  props: {
    historyKeywordList: Array,
    hotKeywordList: Array,
  },
  data() {
    return {
      isShowHistory: true,
    };
  },
  methods: {
    async clearFn() {
      const res = await clearHistory();
      if (res.errno == 0) {
        this.$toast.success("成功");
        setTimeout(() => {
          this.isShowHistory = false;
        }, 2000);
      }
    },

    tagClick (item) {
      this.$emit('tagClick', item)
    }
  },
};
</script>
<style lang="less" scoped>
.history {
  padding: 0 0.4rem;
  background-color: #fff;
  margin-bottom: 0.533333rem;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.333333rem;
    font-size: 0.533333rem;
    h4 {
      font-weight: normal;
    }
  }
  .down {
    .van-tag {
      font-size: 0.373333rem;
      margin-right: 0.266667rem;
      margin-bottom: 0.266667rem;
      padding: 0.08rem;
    }
  }
}
</style>
