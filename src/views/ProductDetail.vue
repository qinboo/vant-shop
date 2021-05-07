<template>
  <div>
    <van-swipe indicator-color="derkred" class="my-swiper">
      <van-swipe-item v-for="item in gallery" :key="item.id">
        <img :src="item.img_url" width="100%" style="display: block" alt="" />
      </van-swipe-item>
    </van-swipe>
    <Tips></Tips>
    <div class="info">
      <h3>{{ info.name }}</h3>
      <p>{{ info.goods_brief }}</p>
      <div>{{ info.retail_price | filterMoney }}</div>
    </div>
    <van-cell class="showSku" title="展示弹出层" is-link @click="show = true"></van-cell>
    <div class="attribute">
      <h4>商品参数</h4>
      <ul>
        <li v-for="(item, index) in attribute" :key="index">
          <span>{{ item.name }}</span>
          <section class="van-ellipsis">
            {{ item.value }}
          </section>
        </li>
      </ul>
    </div>

    <div class="box" ref="box"></div>
    <div class="title">
      <span>常见问题</span>
    </div>
    <ul class="issue">
      <li v-for="item in issue" :key="item.id">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </li>
    </ul>

    <div class="title">
      <span>大家都在看</span>
    </div>
    <Product :goodsList="goodsList"></Product>

    <van-sku
      v-model="show"
      ref="sku"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
    />

    <MyGoodsActions :badge="badge" @addToCartData="addToCartData"></MyGoodsActions>
  </div>
</template>

<script>
import { GetGoodsDetail, getAboutProduct, GetCartNum, addToCart } from "../api/api";
import MyGoodsActions from "@/components/MyGoodsActions";
import Product from "../components/MyProduct";
import Tips from "@/components/Tips";
export default {
  components: { Product, Tips, MyGoodsActions },
  data() {
    return {
      gallery: [],
      productList: [],
      info: {},
      attribute: [],
      goodsList: [],
      issue: [],
      show: false,
      sku: {
        tree: [],
        hide_stock: false,
        price: "",
        stock_num: "",
      },
      goods: {
        picture: "",
      },
      badge: 0,
    };
  },
  async created() {
    const res = await GetGoodsDetail({ id: this.$route.query.id });
    if (res.errno == 0) {
      let { gallery, productList, info, attribute, issue } = res.data;
      this.gallery = gallery;
      this.productList = productList;
      this.info = info;
      this.attribute = attribute;
      this.issue = issue;
      this.$refs.box.innerHTML = info.goods_desc;

      this.goods.picture = info.list_pic_url;
      this.sku.stock_num = info.goods_number;
      this.sku.price = info.retail_price.toFixed(2);
    }

    getAboutProduct({
      id: this.$route.query.id,
    }).then((res) => {
      if (res.errno == 0) {
        this.goodsList = res.data.goodsList;
      }
    });

    GetCartNum().then((res) => {
      if (res.errno == 0) {
        this.badge = res.data.cartTotal.goodsCount;
      }
    });
  },
  methods: {
    addToCartData() {
      if (this.show) {
        let token = localStorage.getItem("token");
        if (token) {
          addToCart({
            goodsId: this.$route.query.id,
            productId: this.productList[0].id,
            number: this.$refs.sku.getSkuData().selectedNum,
          }).then(res => {
              if(res.errno == 0) {
                  this.badge = res.data.cartTotal.goodsCount
                  this.$toast.loading('添加成功')
                  setTimeout(() => {
                      this.$router.push("/cart")
                  }, 2000);
              }
          })
        } else {
            this.$toast("请选登录")
            this.$router.push('/user')
        }
      } else {
        this.show = true;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.info {
  background-color: #fff;
  text-align: center;
  padding: 0.533333rem;
  h3 {
    font-size: 0.533333rem;
    line-height: 1.333333rem;
    font-weight: normal;
  }
  p {
    color: #999;
    font-size: 0.373333rem;
    line-height: 0.8rem;
  }
  div {
    color: darkred;
    font-size: 0.373333rem;
    line-height: 0.8rem;
  }
}
.showSku {
  margin-bottom: 0.533333rem;
  border-top: 1px solid #ccc;
}
.attribute {
  background: #fff;
  padding: 0.533333rem 0.8rem;
  h4 {
    font-size: 0.426667rem;
    margin-bottom: 0.533333rem;
    font-weight: normal;
  }
  ul {
    li {
      background: #efefef;
      line-height: 1.066667rem;
      height: 1.066667rem;
      margin-bottom: 0.266667rem;
      border-radius: 0.106667rem;
      display: flex;
      justify-content: space-between;
      span {
        width: 20%;
        text-align: right;
      }
      section {
        flex: 1;
        padding-left: 0.533333rem;
      }
    }
  }
}
.box {
  img {
    width: 100%;
    display: block;
  }
}
.title {
  width: 100%;
  background: #fff;
  height: 1.333333rem;
  position: relative;
  &::before {
    content: "";
    width: 50%;
    height: 2px;
    background: #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25%;
    margin-top: -1px;
  }
  span {
    width: 30%;
    position: relative;
    background: #fff;
    display: block;
    text-align: center;
    margin: 0 auto;
    height: 1.333333rem;
    line-height: 1.333333rem;
  }
}
.issue {
  padding: 0 0.8rem;
  background: #fff;
  li {
    h3 {
      height: 0.8rem;
      line-height: 0.8rem;
      padding-left: 0.533333rem;
      position: relative;
      font-weight: normal;
      &::before {
        content: "";
        width: 0.106667rem;
        height: 0.106667rem;
        background: darkred;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -0.053333rem;
      }
    }
    p {
      font-size: 0.32rem;
      line-height: 0.533333rem;
      padding-left: 0.533333rem;
    }
  }
}

.van-goods-action {
  z-index: 9999;
}

.van-sku-container {
  min-height: auto;
}
</style>
