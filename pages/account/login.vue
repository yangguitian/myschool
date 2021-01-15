<template>
  <div class="big">
    <div class="img">
      <img src="/images/logo1.png" alt="" />
      <div class="right">
        <div class="top">
          <p>欢迎登录</p>
          <b-container class="account-container login">
            <b-card no-body class="account-box pl-5 pr-5">
              <Login />
            </b-card>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // layout: "hf",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.big {
  width: 100%;
  height: 789px;
}
.big .img {
  position: relative;
  width: auto;
  height: 100%;
  background-position: -312px 0;
  background-image: url(/images/登录1.jpg);
}
.login {
}
.container {
  max-width: 460px;
}
.right {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  top: 90px;
  right: 160px;
  width: 500px;
  height: 500px;
  border-radius: 10%;
}
.top {
  width: 100%;
  height: 100px;
}
.card {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid #85d99b;
}
.top p {
  font-size: 30px;
  color: #f9a05e;
  text-align: center;
  line-height: 100px;
}
</style>
