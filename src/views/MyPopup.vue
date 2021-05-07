<template>
  <div class="popup">
    <van-search
      v-model="iptVal"
      :placeholder="iptPlaceholder"
      show-action
      @cancel="onCancel"
      @search="onSearch"
      @input="onInput"
      @focus="onInput"
    />

    <HistoryHot
      v-if="blockShow == 1"
      :historyKeywordList="historyKeywordList"
      :hotKeywordList="hotKeywordList"
      @tagClick="tagClick"
    />

    <MyList v-else-if="blockShow == 2" :listArr="listArr" @cellClick="tagClick" />

    <MyProduct
      v-else
      :filterCategory="filterCategory"
      :goodsList="goodsList"
      @categoryChange="categoryChange"
      @priceChange="priceChange"
    />
  </div>
</template>

<script>
import { getPopup, getTime, getSearch } from "../api/api";
import HistoryHot from "@/components/HistoryHot";
import MyList from "@/components/MyList";
import MyProduct from "@/components/MyProduct";
export default {
  components: { HistoryHot, MyList, MyProduct },
  data() {
    return {
      iptVal: "",
      iptPlaceholder: "",
      blockShow: 1,
      historyKeywordList: [],
      hotKeywordList: [],
      filterCategory: [],
      listArr: [],
      categoryId: 0,
      goodsList: [],
      order: "desc",
      sort: "id",
    };
  },
  created() {
    this.getPopupData();
  },
  methods: {
    tagClick(val) {
      this.iptVal = val;
      this.onSearch();
    },
    categoryChange(val) {
      this.categoryId = val;
      this.onSearch();
    },
    priceChange(val) {
      this.order = val;
      this.sort = "price";
      this.onSearch();
    },
    async getPopupData() {
      const res = await getPopup();
      if (res.errno === 0) {
        let { defaultKeyword, historyKeywordList, hotKeywordList } = res.data;
        this.iptPlaceholder = defaultKeyword.keyword;
        this.historyKeywordList = historyKeywordList;
        this.hotKeywordList = hotKeywordList;
      }
    },

    onCancel() {
      this.$router.go(-1);
    },

    async onSearch() {
      const res = await getSearch({
        keyword: this.iptVal,
        categoryId: this.categoryId,
        order: this.order,
        sort: this.sort,
        page: 1,
        size: 20,
      });
      if (res.errno == 0) {
        this.blockShow = 3;
        let { filterCategory, goodsList } = res.data;
        let arr = JSON.parse(
          JSON.stringify(filterCategory).replace(/name/g, "text").replace(/id/g, "value")
        );
        this.filterCategory = arr;
        this.goodsList = goodsList;
      }
    },
    async onInput() {
      this.blockShow = 2;
      const res = await getTime({
        keyword: this.iptVal,
      });
      if (res.errno == 0) {
        this.listArr = res.data;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.popup {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
  background: #efefef;
}
</style>
