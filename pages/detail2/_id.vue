<template>
  <div class="qwe">
    <div class="topbox">
      <div class="toptitle">收货人信息</div>
      <div class="topbox1">
        <div class="onebox">
          <div class="name">
            <span class="usn">用户名: asdasd</span>
            <span class="usn">真实姓名: 张嘉怡</span>
            <span class="usn w">学校名: 桂林电子科技大学北海学院 </span>
            <span class="usn">学校地址: 广西北海市银海区建设路32号</span>
            <span class="usn">收货电话: 18788875468</span>
            <span class="usn w">备用电话: 15577737587</span>
            <span class="usn w">地区编号: 536000</span>
          </div>
        </div>
        <div class="onebox">
          <img src="/images/111.png" alt="" />
        </div>
      </div>

      <div class="topbox2">
        <div class="toptitle">商品信息</div>
        <div class="topbox">
          <b-row class="toptitle" cols="12">
            <b-col cols="1">商品ID</b-col>
            <b-col cols="3"></b-col>
            <b-col cols="6">商品名称</b-col>
            <b-col cols="2">商品价格</b-col>
          </b-row>
        </div>
        <div class="xq">
          <b-row class="toptitle" cols="12">
            <b-col class="ew" cols="1">{{ car.car_id }}</b-col>
            <b-col class="ew" cols="3">
              <img class="img" :src="car.car_image" alt=""
            /></b-col>
            <b-col class="ew" cols="6"> {{ car.car_name }}</b-col>
            <b-col class="ew red" cols="2">￥ {{ car.car_price }}元</b-col>
          </b-row>
        </div>
        <div class="button">
          <div class="fl">返回修改</div>
          <div class="fr">
            支付总额： <span class="red1">￥ {{ car.car_price }}.00</span>
          </div>
        </div>
        <div class="button2">
          <div class="top">请选择以下方式完成支付</div>
          <div class="button"><img src="/images/xb.jpg" alt="" /></div>
        </div>
        <div class="zzff">
          <button class="qr" @click="show=true">确认支付</button>
          <b-modal
      v-model="show"
      title="请扫码支付"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <template v-slot:modal-footer>
        <div class="w-100">
            <img class="qweewqqwe" src="/images/二维码1.png" alt="">
        </div>
      </template>
    </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      car: {},
        show: false,
        variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        headerBgVariant: 'dark',
        headerTextVariant: 'light',
        bodyBgVariant: 'light',
        bodyTextVariant: 'light',
        footerBgVariant: 'light',
        footerTextVariant: 'light'
    };
  },
  layout: "hf",
  async beforeMount() {
    let id = this.$route.params.id;
    console.log("id: %O", id);
    let result = await fetch(`/api/car/${id}`).then((res) => res.json());
    console.log("result: %O", result);

    if (result.result) {
      this.car = result.car;
    }
  },
};
</script>
<style lang="less" scoped>
.w-100 {
  width: 81% !important;
}
.qwe {
  background-color: #f5f6f8;
  margin: 20px auto;
  width: 1200px;
  height: 1100px;
}
.topbox {
  width: 100%;
  height: 40px;
  background-color: #f5f6f8;
  border: 1px solid #e4e4e6;
}
.toptitle {
  color: #646464;
  margin-left: 20px;
  line-height: 40px;
}
.topbox1 {
  padding: 30px 20px;
  width: 100%;
  height: 320px;
}
.onebox {
  float: left;
  margin-right: 30px;
  border: 3px dashed #f19791;
  width: 340px;
  height: 260px;
  background-color: #fcfcfc;
}

.name {
  width: 100%;
  height: 80px;
  margin-bottom: 5px;
}
.usn {
  line-height: 40px;
  margin: 0 20px;
}
.w {
  display: block;
}
.onebox img {
  width: 100%;
  margin-top: 30px;
}
.topbox2 {
  width: 100%;
  background-color: #f5f6f8;
  border: 1px solid #e4e4e6;
}
.xq {
  width: 100%;
  height: 212px;
}
.img {
  margin-top: 5px;
  width: 150px;
}
.ew {
  font-size: 25px;
  line-height: 212px;
}
.red {
  color: red;
}
.button {
  border: 1px solid #e4e4e6;
  width: 100%;
  height: 60px;
}
.fl {
  line-height: 60px;
  text-align: center;
  float: left;
  width: 100px;
  height: 60px;
}
.fr {
  font-size: 17px;
  font-weight: 700;
  float: right;
  line-height: 60px;
  text-align: center;
  width: 300px;
  height: 60px;
}
.red1 {
  font-size: 26px;
  color: red;
}
.button2 {
  width: 100%;
  height: 180px;
  background: #ffffff;
}
.button2 .top {
  padding: 0 10px;
  width: 100%;
  height: 40px;
  background: #f5f6f8;
  line-height: 40px;
  color: #676767;
}
.button2 .button {
  width: 100%;
  height: 140px;
}
.button2 img {
  height: 100%;
}
.zzff {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: #fff;
}
.zzff .qr {
  border: 1px solid #f36564;
  color: #fff;
  width: 200px;
  height: 50px;
  background-color: #f36564;
  top: 20px;
  right: 20px;
  position: absolute;
}
</style>