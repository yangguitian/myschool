<template>
  <div class="big">
    <div class="img">
      <img src="/images/logo1.png" alt="" />
      <b-container class="account-container">
        <b-card :title="title" tag="article" class="account-box">
          <b-card-text>
            {{ message }}
          </b-card-text>

          <b-button v-on:click="gobackNow" to="/goods" variant="outline-primary"
            >返回首页</b-button
          >
        </b-card>
      </b-container>
    </div>
  </div>
</template>
<script>
import { defaultMenu } from "~/store/global.js";
export default {
  data() {
    return {
      result: null,
      title: "正在登出...",
      message: "请等待片刻...",
      timeKey: -1,
    };
  },
  methods: {
    gobackNow(event) {
      clearInterval(this.timeKey);
      this.timeKey = -1;
      this.$router.push({ path: "/" });
    },
  },
  async fetch() {
    let result = await fetch("/api/account/logout").then((res) => res.json());
    this.result = result.result;
    this.title = result.title;
    this.message = result.message;
    sessionStorage.removeItem("user");
    this.$store.commit("auth/logout");
    // 恢复菜单为未登录状态
    this.$store.commit("global/init");

    let times = 2;
    this.message = `${result.message} ${times} 秒后返回上一页`;
    this.timeKey = setInterval(() => {
      times--;
      if (times < 0) {
        if (this.$route.query && this.$route.query.ref) {
          this.$router.push({ path: this.$route.query.ref });
        } else {
          this.$router.push({ path: "/" });
        }
        clearInterval(this.timeKey);
        this.timeKey = -1;
      } else {
        this.message = `${result.message} ${times} 秒后返回上一页`;
      }
    }, 1000);
  },
};
</script>
<style lang="less" scoped>
.big {
  width: 100%;
  // height: 789px;
  height: 966px;
  background-color: #d6e9e7;
}
.big .img {
  position: relative;
  width: 100%;
  height: 100%;
  background-position: -112px 0;
  background-image: url(/images/登录1.jpg);
  background-repeat: no-repeat;
}
.account-container {
}
.account-box {
  margin: 0 auto;
  width: 330px;
  background-color: rgba(255, 255, 255, 0);
}
</style>