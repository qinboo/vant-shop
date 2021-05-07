<template>
  <div>
    <Tips />
    <van-checkbox-group v-model="result" :disabled="isEditing">
      <van-checkbox class="chx" v-for="item in cartList" :key="item.id" :name="item.id" @click="goodClick(item)">
        <van-swipe-cell>
          <van-card
            :num="item.number"
            :price="item.retail_price.toFixed(2)"
            :title="item.goods_name"
            :thumb="item.list_pic_url"
          />
          <van-stepper v-model="item.number" v-show="isEditing"  @change="stepperChange(item)"/>

          <template #right>
            <van-button
              type="danger"
              text="删除"
              class="delete-button"
              square
              @click="delGoodBtn(item.product_id)"
            ></van-button>
          </template>
        </van-swipe-cell>
      </van-checkbox>
    </van-checkbox-group>

    <van-submit-bar
      :price="cartTotal.checkedGoodsAmount * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checkedAll" :disabled="isEditing">全选</van-checkbox>
      <template #tip>
        累计共<span>{{ cartTotal.checkedGoodsCount }}</span
        >件商品, 可点击
        <van-button :type="isEditing ? 'danger' : 'primary'" size="mini" @click="editBtn">
          {{ isEditing ? "完成编辑" : "编辑" }}
        </van-button>
        按钮进行商品数量修改
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { getCartData, goodChecked, StepNum, delGood } from "../api/api";
import Tips from "@/components/Tips";
export default {
  components: { Tips },
  data() {
    return {
      result: [],
      cartList: [],
      cartTotal: {},
      isEditing: false,
    };
  },
  computed: {
    checkedAll: {
      get() {
        return this.result.length == this.cartList.length;
      },
      set(val) {
        let ids_arr = [];
        this.cartList.map((item) => {
          ids_arr.push(item.product_id);
        });

        goodChecked({
          isChecked: val ? 1 : 0,
          productIds: ids_arr.join(),
        }).then((res) => {
          if (res.errno == 0) {
            this.totalFn(res.data)
          }
        });
      },
    },
  },
  async created() {
    const res = await getCartData();
    if (res.errno == 0) {
      this.totalFn(res.data)
    }
  },
  methods: {
    onSubmit() {},
    goodClick (item) {
      if(this.isEditing) return
      goodChecked({
        isChecked: item.checked == 0 ? 1 : 0,
        productIds: item.product_id, 
      }).then(res => {
        if(res.errno == 0) {
          this.totalFn(res.data)
        }
      })
    },
    editBtn() {
      this.isEditing = !this.isEditing;
    },
    totalFn(data) {
      this.cartList = data.cartList;
      this.cartTotal = data.cartTotal;

      this.result = [];
      this.cartList.map((item) => {
        item.checked == 1 ? this.result.push(item.id) : "";
      });
    },

    stepperChange (item) {
      StepNum({
        goodsId: item.goods_id,
        id: item.id,
        number: item.number,
        productId: item.product_id
      }).then(res => {
        if(res.errno == 0) {
          this.totalFn(res.data)
        }
      })
    },

    delGoodBtn (id) {
      delGood({productIds: id.toString()}).then(res => {
        if(res.errno == 0) {
          this.totalFn(res.data)
        }
      })
    }
  },
};
</script>
<style lang="less" scoped>
.chx {
  padding: 0.266667rem 4%;
  background: #fff;
  border-bottom: 1px solid #ccc;
  /deep/.van-checkbox__label {
    flex: 1;
  }
}
.van-stepper {
  text-align: right;
}
.delete-button {
  height: 100%;
}
</style>
