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
              background="#ffffff"
              img-height="508px"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide :img-src="goods.goods_image"></b-carousel-slide>
              <b-carousel-slide :img-src="goods.goods_image">
              </b-carousel-slide>
              <b-carousel-slide :img-src="goods.goods_image"></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="info-box">
            <div class="title">
              <span class="a"> 校园购 </span>
              {{ goods.goods_name }}
              <span class="right">
                <b-dropdown
                  id="dropdown-1"
                  text="举报"
                  class="m-md-2"
                  size="sm"
                  variant="outline-primary"
                >
                  <b-dropdown-item v-b-modal.modal-2 variant="danger"
                    >商品信息违规
                  </b-dropdown-item>
                  <b-dropdown-item v-b-modal.modal-2
                    >联系方式错误</b-dropdown-item
                  >
                  <b-dropdown-item v-b-modal.modal-2
                    >商品已售出</b-dropdown-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item active>其他</b-dropdown-item>
                  <b-dropdown-item disabled>自定义举报内容</b-dropdown-item>
                </b-dropdown>
              </span>
              <b-modal id="modal-2" title="提示">
                <p class="my-4">举报成功.我们会及时处理</p>
              </b-modal>
            </div>

            <div class="title1">
              {{ goods.goods_desc }}
            </div>
            <div class="top-info">
              <span class="img"
                ><img src="/images/头像/头像1.png" alt=""
              /></span>
              <span class="usn">{{ goods.goods_tel }}</span>
            </div>
            <div class="icon-box">
              <span class="icon">
                <b-icon-backspace-reverse class="h2 mb-2">
                </b-icon-backspace-reverse>
              </span>

              <span class="red red1">￥{{ goods.goods_price }}元</span>
              <span class="red fff">原价￥{{ goods.goods_oldprice }}元</span>
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
              <span class="red black">联系电话：{{ goods.goods_tel }}</span>
            </div>
            <b-col cols="12">
              <b-button-group>
                <b-button variant="outline-warning" size="lg"
                  >立即购买</b-button
                >
                <b-button v-b-modal.modal-1 variant="danger" size="lg"
                  >添加收藏</b-button
                >
              </b-button-group>
              <b-modal id="modal-1" title="提示">
                <p class="my-4">收藏成功</p>
              </b-modal>
            </b-col>
          </div>
        </b-col>
        <b-col cols="4">
          <div class="right1">
            <div class="rer">
              <div class="top">
                <div class="titlebox">
                  <span><img src="/images/头像/icon1.png" alt="" /></span>
                  <span class="name">物流运输</span>
                </div>
                <div class="qfy">
                  国内主要分支口岸区域物流服务中心全球600家分支机构及海外国际代理服务网络
                </div>
              </div>
              <div class="top">
                <div class="titlebox">
                  <span><img src="/images/头像/icon2.png" alt="" /></span>
                  <span class="name">支付方式</span>
                </div>
                <div class="qfy">
                  以现汇逐笔结清债权债务的支付方式。按信用划分，有属于银行信用的信用证、购买证、银行保证书等结算方式，统称“有证支付方式”。
                </div>
              </div>
              <div class="top">
                <div class="titlebox">
                  <span><img src="/images/头像/icon3.png" alt="" /></span>
                  <span class="name">退还政策</span>
                </div>
                <div class="qfy">
                  在订单开始3D打印之前,Treatstock允许客户取消订单并全款退还。一旦订单开始3D打印,客户将不能取消订单。
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="pinlun">
      <div class="top">
        <span class="title">商品评价</span>
        <span class="right"
          ><b-button v-b-modal.modal-2 variant="primary" size="sm"
            >发表评论</b-button
          >
          <b-modal id="modal-2" title="提示">
            <p class="my-4">尚未开通，敬请期待！！！！！！！</p>
          </b-modal>
        </span>
      </div>
      <div class="comment-item">
        <div class="left-box">
          <div class="pic">
            <img src="/images/头像/头像6.png" alt="" />
          </div>
          <div class="name">
            <div class="usn">1509335600</div>
            <div class="time">2020-01-15</div>
          </div>
        </div>
        <div class="right-box"><p>厉害了真的强！</p></div>
      </div>
      <div class="comment-item">
        <div class="left-box">
          <div class="pic">
            <img src="/images/头像/头像5.png" alt="" />
          </div>
          <div class="name">
            <div class="usn">198495298</div>
            <div class="time">2020-01-16</div>
          </div>
        </div>
        <div class="right-box"><p>多少钱，在哪里</p></div>
      </div>
      <div class="comment-item">
        <div class="left-box">
          <div class="pic">
            <img src="/images/头像/头像4.png" alt="" />
          </div>
          <div class="name">
            <div class="usn">1557733562</div>
            <div class="time">2020-01-16</div>
          </div>
        </div>
        <div class="right-box"><p>okokokokokokokokko</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async beforeMount() {
    let id = this.$route.params.id;
    console.log("id: %O", id);
    let result = await fetch(`/api/goods/${id}`).then((res) => res.json());
    console.log("result: %O", result);

    if (result.result) {
      this.goods = result.goods;
    }
  },
  layout: "hf",
  data() {
    return {
      slide: 0,
      sliding: null,
      goods: {},
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
  async fetch() {},
};
</script>
<style lang="less" scoped>
.big {
  // background-color: #f8f8f9;
  // background-color: #9797c9;
  background-color: #f8f8f9;
}
.content {
  width: 1200px;
  height: auto;
  margin: 30px auto;
  background-color: #fff;
  // background-color: rgb(218, 125, 117);
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(128, 128, 128, 0.753);
}
.pic {
  width: 410px;
  overflow: hidden;
  height: 508px;
  // background-color: #fff;
  background-color: #fff;
  height: auto;
}
.img-fluid,
.slide {
  width: 410px;
  height: 508px;
}
.info-box {
  margin-left: 40px;
  width: 400px;
  // background-color: rgb(82, 76, 134);
  height: 508px;
  font-size: 14px;
}
.top-info {
  // background-color: rgb(93, 160, 104);
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
.title .a {
  display: inline-block;
  width: 50px;
  text-align: center;
  line-height: 30px;
  height: 30px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 20%;
  color: #fff;
  background-color: rgb(206, 57, 57);
}
.title .right {
  background-color: #fff;
}
.btn-group {
  background-color: #fff !important;
}
.title1 {
  font-size: 20px;
  color: #616776;
  margin-bottom: 10px;
}
.my-4 {
  font-size: 20px;
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
  color: red;
}
.fff {
  margin-top: 2px;
  color: #969696;
}
.red {
  display: inline-block;
  height: 35px;
  line-height: 35px;
  margin-left: 15px;

  vertical-align: top;
}
.black {
  color: #616776;
}
// 按钮
.btn-group {
  background-color: rgb(116, 67, 81);
  // margin-top: 314px;
}
.pinlun {
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 1200px;
  height: auto;
}
.pinlun .right {
  position: absolute;
  right: 20px;
}
.pinlun .top {
  position: relative;
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
.right1 {
  margin-left: 70px;
  width: 283px;
  height: 508px;
  // background-color: rgb(153, 60, 60);
  border: 1px solid #e8e8e8;
}
.rer {
  width: 243px;
  height: 468px;
  margin: 40px auto;
  // background-color: rgb(61, 155, 111);
}
.rer .top {
  width: 100%;
  height: 150px;
  // background-color: rgb(104, 59, 105);
}
.rer .top .titlebox {
  width: 100%;
  height: 24px;
  // background-color: rgb(96, 153, 110);
}
.rer .top .name {
  margin-left: 15px;
  font-size: 16px;
}
.rer .top .qfy {
  width: 243px;
  height: 105px;
  // background-color: #fff;
  padding: 5px 0 32px 43px;
  font-size: 13px;
  border-bottom: 1px solid #e8e8e8;
}
</style>