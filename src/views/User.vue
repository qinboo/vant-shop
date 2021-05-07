<template>
  <div>
    <van-row @click="openModal">
      <van-col span="6">
        <img :src="avatarSrc" />
      </van-col>
      <van-col span="10">
        {{ nickName }}
      </van-col>
      <van-col span="8">
        <van-icon name="cross" @click.stop="logout"/>
      </van-col>
    </van-row>
    <van-grid :column-num="3" square>
      <van-grid-item icon="label-o" text="我的订单" @click="iconClick" />
      <van-grid-item icon="bill-o" text="优惠券" @click="iconClick" />
      <van-grid-item icon="goods-collect-o" text="礼品卡" @click="iconClick" />
      <van-grid-item icon="location-o" text="我的收藏" @click="iconClick" />
      <van-grid-item icon="flag-o" text="我的足迹" @click="iconClick" />
      <van-grid-item icon="user-o" text="会员福利" @click="iconClick" />
      <van-grid-item icon="aim-o" text="地址管理" @click="iconClick" />
      <van-grid-item icon="warn-o" text="账号安全" @click="iconClick" />
      <van-grid-item icon="service-o" text="联系客服" @click="iconClick" />
      <van-grid-item icon="question-o" text="帮助中心" @click="iconClick" />
      <van-grid-item icon="smile-comment-o" text="意见反馈" @click="iconClick" />
    </van-grid>

    <div class="login_modal" v-if="showModal">
      <section @click="closeModal"></section>
      <van-form @submit="onSubmit">
        <van-field
          name="用户名"
          label="用户名"
          placeholder="请输入用户名"
          v-model="username"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          v-model="password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { goLogin } from "../api/api";
export default {
  components: {},
  data() {
    return {
      avatarSrc: "../assets/avatar.png",
      nickName: "点击登录",
      username: "admin",
      password: "123456",
      showModal: false,
    };
  },
  created () {
    let token = localStorage.getItem("token")
    if(token) {
      let userInfo = localStorage.getItem("userInfo")
      let newUserInfo = JSON.parse(userInfo)
      this.avatarSrc = newUserInfo.avatar
      this.nickName = newUserInfo.username
    }
  },
  methods: {
    iconClick() {
      this.$toast("敬请期待");
    },
    openModal() {
      let token = localStorage.getItem("token");
      if (!token) {
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
    },
    async onSubmit(values) {
      const res = await goLogin({
        username: values["用户名"],
        pwd: values["密码"],
      });
      if (res.errno == 0) {
        let { token, userInfo } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        this.$toast.success("登录成功");

        this.avatarSrc = userInfo.avatar;
        this.nickName = userInfo.username;

        setTimeout(() => {
          this.closeModal();
        }, 1000);
      }
    },

    logout () {
      this.$dialog.confirm({
        title: "退出登录确认",
        message: "你确认要退出账号么"
      }).then(() => {
        let token = localStorage.getItem('token')
        if(token) {
          localStorage.clear()
          this.$router.go(0)
        }
      }).catch(() => {})
    }
  },
};
</script>
<style lang="less" scoped>
.van-row {
  padding: 0.533333rem 0.533333rem;
  background-color: #333;
  color: #fff;
  .van-col {
    font-size: 0.533333rem;
    line-height: 2.133333rem;
    img {
      width: 2.133333rem;
      border-radius: 50%;
      display: block;
    }
    &:last-child {
      text-align: right;
    }
  }
}
.login_modal {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  section {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .van-form {
    width: 90%;
    padding: 0.266667rem;
    position: absolute;
    top: 40vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
  }
}
</style>
