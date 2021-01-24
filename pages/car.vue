<template>
  <div class="h">
    <div class="top-box">
      <span class="left">
        <span><img src="/images/logo1.png" /></span>
      </span>
      <div class="right">
        <div class="left1">宝贝</div>
        <div class="right1">
          <b-icon icon="Search"></b-icon>
          <b-input></b-input>
        </div>
        <div class="ss">
          <b-button>搜 索</b-button>
        </div>
      </div>
      <div class="gwc">购物车</div>
    </div>
    <div class="top2">
      <ul>
        <li class="one">全部商品</li>
        <li>降价商品</li>
        <li>库存紧张</li>
      </ul>
    </div>
    <div class="qwe"></div>
    <Carr :carList="carList"/>
  </div>
</template>
<script>
export default {
  middleware: "auth",
  layout: "hf",
  data() {
    return {
     carList: []
    };
  },
  async fetch() {
    this.carList = await fetch("/api/car").then((res) => res.json());
    console.log("this.carList %O",this.carList);
  }
  };
</script>
<style lang="less" scoped>
.h {
  padding: 0;
  width: 1200px;
  margin: 20px auto;
}
.top-box {
  width: 100%;
  height: 95px;
}
.top-box .left {
  display: inline-block;
  overflow: hidden;
  width: 60px;
  height: 95px;
}
.top-box .left img {
  margin-top: 20px;
  height: 55px;
}
.top-box .right {
  float: right;
  width: 550px;
  height: 55px;
  margin-top: 20px;
}
.top-box .right .left1 {
  float: left;
  display: inline-block;
  width: 80px;
  height: 100%;
  background-color: #f5f5f5;
}
.top-box .right .left1 {
  border-right: 1px solid #e5e5e5;
  color: #6b6b6b;
  text-align: center;
  line-height: 51px;
}
.top-box .right .right1 {
  position: relative;
  float: left;
  width: 370px;
  height: 100%;
  display: inline-block;
}
.form-control {
  height: 100%;
}
.form-control:focus {
  border-color: #e6e6e6;
  box-shadow: 0 0 0 0;
}
.b-icon {
  font-size: 30px;
  color: #cccccc;
  top: 12px;
  left: 10px;
  position: absolute;
}
.ss {
  width: 100%;
  height: 100%;
}
.btn {
  background-color: #ff4400;
  font-size: 23px;
  width: 96px;
  height: 100%;
}
.btn-secondary:not(:disabled):not(.disabled):active {
  background-color: #ff4400;
  border-color: #ff4400;
}
.btn:focus {
  border-color: #e6e6e600;
  box-shadow: 0 0 0 0;
}
.gwc {
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 85px;
  //   background-color: rgb(211, 128, 128);
}
.top2 {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #e6e6e6;
}
.top2 ul {
  margin-left: 20px;
  width: 500px;
  height: 40px;
  // background-color: rgb(106, 90, 116);
}
.top2 ul li {
  text-align: center;
  float: left;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-right: 1px solid #e8e8e8;
  width: 133px;
  height: 40px;
  // background-color: rgb(138, 115, 115);
  list-style: none;
}
.top2 ul li:hover {
  font-weight: 500;
  color: #ff4400;
  border-bottom: 2px solid #ff4400;
}
.top2 ul .one {
  font-weight: 600;
  color: #ff4400;
  border-bottom: 2px solid #ff4400;
}
.qwe {
  width: 100%;
  height: 42px;
  background-color: #fff;
}

</style>