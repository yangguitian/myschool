<template>
  <div class="footer">
    <div class="footer-heart">
      <div class="footer-top">
        <div class="footer-top-top">
          <div class="footer-left">
            <h5 class="top">联系我们/ contact us</h5>
            <p class="botton">Q群 : 991825992</p>
            <p class="botton">QQ : 1027275314</p>
            <p class="botton">地址 : 广西北海甲骨文学院</p>
          </div>
          <div class="footer-middle">
            <img src="../assets/images/二维码.png" alt="" />
            <p>关注微信公众平台</p>
          </div>
          <div class="footer-right">
            <p>TEL:18177950827</p>
            <span>24小时在线客服</span>
            <a class="wb" href="http://weibo.com/u/276233227/" title="新浪微博"></a>
            <a class="qq" href="#" title="客服QQ"></a>
            <a class="wx" href="#" title="微信"></a>
          </div>
        </div>
      </div>
    </div>
     <div class="footer-button">
          <p>版权所有 @ All Rights Reserved，桂ICP备15000254号</p>
      </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 207px;
  background-color: #282c36;
}
.footer-heart {
  margin: 0 auto;
  width: 1000px;
  height: 207px;
//   background-color: rgb(172, 37, 37);
}
.footer-top {
  padding: 28.5px 0;
  width: 100%;
  height: 207px;
//   background-color: rgb(90, 201, 39);
}
.footer-top-top {
  width: 100%;
  height: 150px;
//   background-color: rgb(40, 107, 170);
}
.footer-left {
  float: left;
  width: 400px;
  height: 100%;
//   background-color: rgb(211, 230, 45);
}
.footer-middle {
  border-left: 1px solid #30343f;
  border-right: 1px solid #30343f;
  float: left;
  text-align: center;
  padding: 10px 40px 0;
  width: 200px;
  height: 100%;
//   background-color: rgb(128, 77, 77);
}
.footer-right {
  float: right;
  width: 190px;
  height: 100%;
//   background-color: rgb(97, 26, 56);
}
.footer-left .top {
    margin-top: 10px;
    font-size: 15px;
  color: #999;
  font-weight: normal;
//   background-color: rgb(56, 196, 91);
}
.footer-left .botton {
  font-size: 14px;
  margin-top: 7px;
  color: #999;
}
.footer-middle img {
  width: 106px;
  height: 106px;
}
.footer-middle p {
  color: #999;
  font-size: 14px;
  padding-top: 5px;
}
.footer-right p {
  color: #999;
  font-size: 22px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
}
.footer-right span {
  display: block;
  width: 190px;
  font-size: 14px;
  margin: 10px 0;
  background-color: #cc424b;
  color: #fff;
  text-align: center;
  line-height: 35px;
  height: 35px;
}
.footer-right a {
    display: block;
    width: 50px;
    height: 50px;

}
.footer-right .wb {
    float: left;
    background: url(../assets/images/雪碧图.png) no-repeat 0 0;
}
.footer-right .qq {
    float: left;
    background: url(../assets/images/雪碧图.png) no-repeat -58px 0;
    margin-left: 20px;
}
.footer-right .wx {
    float: left;
    background: url(../assets/images/雪碧图.png) no-repeat -115px 0;
    margin-left: 20px;
}
.footer-button {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #999;
    font-size: 14px;
    background-color: #22252e;
}
.footer-button p {
    color: #999;
}
</style>