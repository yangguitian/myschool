<template>
  <div class="container1 clearfix">
    <div class="l-content">
      <div class="top">
        <div class="one-box">
          <img src="/images/图1.jpg" alt="" />
          <span>原来钱是这么赚的！！不得不承认有些同学就是那么厉害</span>
        </div>
        <div class="one-box">
          <img src="/images/图2.jpg" alt="" />
          <span>留下了不学无术的泪水——今天你刷题了吗</span>
        </div>

        <div class="one-box">
          <img src="/images/图3.jpg" alt="" />
          <span>共赴一场桃花盛典</span>
        </div>
      </div>
      <div class="button">
        <div class="title">
          <h4>校园动态</h4>
        </div>
        <div class="box">
          <div class="media-left">
            <img src="/images/图1.jpg" alt="" />
          </div>
          <div class="right">
            <div class="media-heading">
              原来钱是这么赚的！！不得不承认有些同学就是那么厉害
            </div>
            <div class="desc">
              那如何才能更快更有技术含量的赚钱呢？很快，我就发现有同学在大学校园里，卖二手车，真是个不错的生意
            </div>
            <div class="time">2021-01-02</div>
          </div>
        </div>
        <div class="box">
          <div class="media-left">
            <img src="/images/图1.jpg" alt="" />
          </div>
          <div class="right">
            <div class="media-heading">
              原来钱是这么赚的！！不得不承认有些同学就是那么厉害
            </div>
            <div class="desc">
              那如何才能更快更有技术含量的赚钱呢？很快，我就发现有同学在大学校园里，卖二手车，真是个不错的生意
            </div>
            <div class="time">2021-01-02</div>
          </div>
        </div>
        <div class="box">
          <div class="media-left">
            <img src="/images/图1.jpg" alt="" />
          </div>
          <div class="right">
            <div class="media-heading">
              原来钱是这么赚的！！不得不承认有些同学就是那么厉害
            </div>
            <div class="desc">
              那如何才能更快更有技术含量的赚钱呢？很快，我就发现有同学在大学校园里，卖二手车，真是个不错的生意
            </div>
            <div class="time">2021-01-02</div>
          </div>
        </div>
      </div>
    </div>
    <div class="r-content">
      <div class="box">
        <div class="tips">置顶</div>
        <ul>
          <li>秀色可餐 | 大学生秀寝室伙食</li>
          <span class="time">2021-03-05</span>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "hf",
};
</script>
<style lang="less" scoped>
.container1 {
  width: 1200px;
  height: auto;
  margin: 0 auto;
//   background-color: rgb(163, 133, 133);
}
.l-content {
  float: left;
  width: 850px;
  height: auto;
  margin-top: 20px;
//   background-color: rgba(207, 211, 192, 0.486);
}
.clearfix::after{
    clear: both;
    content: "";
}
.top {
  width: 850px;
  height: 153px;
}
.one-box {
  position: relative;
  float: left;
  margin-left: 1%;
  width: 32%;
  height: 153.08px;
  overflow: hidden;
  border-radius: 4%;
}
.one-box img {
  width: 100%;
  border-radius: 4%;
}
.one-box img:hover {
  transform: scale(1.1);
  transition: all 1s 0.2s;
}
.one-box span {
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 13px;
  padding: 2px 7px;
  color: #f0f0f0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
}
.l-conten .button {
  width: 850px;
  height: 1500px;
  background-color: rgb(46, 76, 175);
}
.title {
  width: 850px;
  height: 58px;
  background-color: #fff;
}
.title h4 {
  color: #4285f4;
  line-height: 58px;
  border-bottom: 1px solid #e6e8eb;
}
.box {
  width: 850px;
  height: 187px;
  padding-top: 18px;
  border-bottom: 1px solid #e6e8eb;
  padding-bottom: 18px;
}
.box:hover .media-heading {
  color: #366df0;
  transition: all 0.5s;
}
.box:hover {
  background-color: #f6f6f6;
}
.media-left {
  float: left;
  width: 248px;
  height: 148px;
  border-radius: 4%;
  background-color: rgb(120, 116, 138);
  overflow: hidden;
}
.media-left img {
  width: 100%;
  height: 100%;
}
.media-left img:hover {
  transform: scale(1.1);
  transition: all 1s 0.2s;
}
.box .right {
  float: right;
  width: 590px;
  height: 150px;
}
.media-heading {
  font-size: 18px;
  max-height: 50px;
  font-weight: 600;
  margin-bottom: 0.25rem;
  line-height: 25px;
  color: #3d464d;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  max-height: 66px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 10px;
  color: #828a92;
}
.time {
  font-size: 12px;
  margin-top: 55px;
  color: #666;
}
.r-content {
  float: left;
  width: 350px;
  height: 146px;
}
.r-content .box {
  width: 270px;
  height: 146px;
  margin-left: 80px;
}
.tips {
  text-align: center;
  color: #3d464d;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 0;
  border-top: 2px solid #4285f4;
  border-bottom: 1px dashed #e6e8eb;
  margin-top: 0;
  margin-bottom: 10px;
}
.box ul {
  width: 270px;
  height: 59px;
}
.box ul li {
  font-size: 12px;
  color: #828a95;
  line-height: 20px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
}
.box .time {
    color: #a4abb1;
}
</style>