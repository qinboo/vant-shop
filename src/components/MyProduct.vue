<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <van-dropdown-item title="价格" v-model="priceVal" :options="priceArr" @change="priceChange"/>
      <van-dropdown-item title="分类" v-model="categoryVal"  :options="filterCategory" @change="categoryChange"/>
    </van-dropdown-menu>

    <van-empty
      description="您搜索的产品不存在"
      image="search"
      v-if="goodsList.length == 0"
    />
    <product :goodsList="goodsList" />
  </div>
</template>

<script>
import product from "@/components/product";
export default {
  components: { product },
  props: {
    filterCategory: Array,
    goodsList: Array,
  },
  data() {
    return {
      priceVal: "",
      categoryVal: 1005000,
      priceArr: [
        {text: "价格由高到低", value: 'desc'},
        {text: "价格由低到高", value: 'asc'}
      ]
    };
  },
  mounted () {
    this.filterCategory.map(val => {
      if(val.checked) {
        this.categoryVal = val.value
      }
    })
  },
  methods: {
    categoryChange (value) {
      this.$emit('categoryChange', value)
    },
    priceChange (value) {
      this.$emit('priceChange', value)
    }
  }
};
</script>
<style lang="less" scoped></style>
