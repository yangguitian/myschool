<template>
  <div class="big">
    <div class="content">
      <b-row>
        <b-col cols="4">
          <div class="pic">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="40000"
              controls
              indicators
              background="#ababab"
              img-width="293px"
              img-height="420px"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                img-src="/images/商品/ipad1.png"
              ></b-carousel-slide>

              <b-carousel-slide img-src="/images/商品/ipad2.png">
              </b-carousel-slide>

              <b-carousel-slide
                img-src="/images/商品/ipad3.png"
              ></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="info-box">
            <div class="top-info">
              <span class="img"
                ><img src="/images/头像/头像1.png" alt=""
              /></span>
              <span class="usn">13278943672</span>
            </div>
            <div class="title">苹果手机</div>
            <div class="title1">打算大苏打</div>
            <div class="icon-box">
              <span class="icon"
                ><b-icon-backspace-reverse
                  class="h2 mb-2"
                ></b-icon-backspace-reverse
              ></span>
              <span class="red red1">2200元</span>
            </div>
            <div class="icon-box">
              <span class="icon"
                ><b-icon-heart class="h2 mb-2"></b-icon-heart
              ></span>
              <span class="red black">原装正品</span>
            </div>
            <div class="icon-box">
              <span class="icon"
                ><b-icon-map class="h2 mb-2"></b-icon-map
              ></span>
              <span class="red black">南昌大学</span>
            </div>
            <div class="icon-box">
              <span class="icon"
                ><b-icon-clock class="h2 mb-2"></b-icon-clock
              ></span>
              <span class="red black">2020-03-17</span>
            </div>
            <div class="icon-box">
              <span class="icon"
                ><b-icon-chat class="h2 mb-2"></b-icon-chat
              ></span>
              <span class="red black">微信: 123456 QQ: 123456</span>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
            <b-button-group>
                <b-button variant="outline-warning" size="lg">立即购买</b-button>
                <b-button variant="danger" size="lg">加入购物车</b-button>
            </b-button-group>
        </b-col>
      </b-row>
    </div>
    <div class="pinlun">
      <div class="top">
        <span class="title">商品评价</span>
      </div>
      <div class="comment-item">
        <div class="left-box">
          <div class="pic">
            <img src="/images/头像/头像1.png" alt="" />
          </div>
          <div class="name">
            <div class="usn">111222</div>
            <div class="time">2020-01-15</div>
          </div>
        </div>
        <div class="right-box"><p>okokokokokokokokko</p></div>
      </div>
      <div class="comment-item">
        <div class="left-box">
          <div class="pic">
            <img src="/images/头像/头像1.png" alt="" />
          </div>
          <div class="name">
            <div class="usn">111222</div>
            <div class="time">2020-01-15</div>
          </div>
        </div>
        <div class="right-box"><p>okokokokokokokokko</p></div>
      </div>
      <div class="comment-item">
        <div class="left-box">
          <div class="pic">
            <img src="/images/头像/头像1.png" alt="" />
          </div>
          <div class="name">
            <div class="usn">111222</div>
            <div class="time">2020-01-15</div>
          </div>
        </div>
        <div class="right-box"><p>okokokokokokokokko</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout:"hf",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style lang="less" scoped>
.big {
  background-color: #f8f8f9;
}
.content {
  width: 1000px;
  height: 480px;
  margin: 30px auto;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
}
.pic {
  background-color: #fff;
  height: 350px;
}
.info-box {
  height: 420px;
  font-size: 14px;
}
.top-info {
  width: 100%;
  height: 35px;
  margin-bottom: 10px;
}
body {
  background-color: #fff;
}
.top-info span {
  display: inline-block;
}
.top-info .img {
  width: 35px;
  height: 35px;
}
.top-info .img img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.top-info .usn {
  line-height: 32px;
}
.title {
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 10px;
}
.title1 {
  font-size: 20px;
  color: #616776;
  margin-bottom: 10px;
}
.icon-box {
  margin-bottom: 10px;
  width: 100%;
}
.icon {
  display: inline-block;
}
.red1 {
    font-size: 20px;
}
.red {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  margin-left: 15px;
  color: red;
  vertical-align: top;
}
.black {
  color: #616776;
}
.btn-group {
    margin-top: 314px;
}
.pinlun {
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 1000px;
  height: 400px;
}
.pinlun .top {
  width: 100%;
  height: 45px;
  border: 1px solid #eee;
  font-weight: 400;
  padding: 10px;
  padding-left: 20px;
}
.pinlun .top .title {
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
}
.comment-item {
  width: 100%;
  height: 94px;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.left-box {
  float: left;
  width: 145px;
  height: 53px;
}
.left-box .pic {
  float: left;
  width: 50px;
  height: 50px;
}
.left-box .pic img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.left-box .name {
  float: right;
  width: 86px;
  height: 53px;
}
.name .usn {
  font-weight: 600;
  width: 88px;
  height: 25px;
}
.name .time {
  line-height: 25px;
  font-size: 13px;
  width: 88px;
  height: 25px;
}
.right-box {
  line-height: 53px;
  float: left;
  width: 400px;
  height: 53px;
}
</style>