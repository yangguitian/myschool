<template>
  <div>
    <div class="top">
      <div class="text-box">
        <h3 class="title">柚子校园</h3>
        <p class="desc">— 专注校园二手 —</p>
      </div>
      <div class="top-item-btn">
        <div class="container-bao">
           <div class="box">
            <a href="/goods">
              <div class="imgbx">
              <b-img src="/images/图3.png"></b-img>
            </div>
            <div class="content">
              <h2>校园二手</h2>
              <p>带不走的东西，丢不掉的记忆</p>
              <p>让小柚子，帮它找到新的主人</p>
            </div>
            </a>
          </div>
          <div class="box">
            <a href="/buy">
              <div class="imgbx">
                <b-img src="/images/图1.png"></b-img>
              </div>
              <div class="content">
                <h2>校园求购</h2>
                <p>众里寻它，蓦然回首</p>
                <p>原来它就在这里－柚子求购</p>
              </div>
            </a>
          </div>
          <div class="box">
            <a href="/apply">
              <div class="imgbx">
                <b-img src="/images/图2.png"></b-img>
              </div>
              <div class="content">
                <h2>开通学校</h2>
                <p>年华已去，梦想犹在</p>
                <p>入驻我们，或获得属于你的平台</p>
              </div>
            </a>
          </div>
         
        </div>
      </div>
    </div>

    <div class="desc-box">
      <h3>专注校园二手</h3>
      <div class="top-box">
        <div class="one">
          <span class="yuan">
            <b-icon-exclamation-circle
              font-scale="2.5"
            ></b-icon-exclamation-circle>
          </span>
          <div class="text">
            <p class="p">快捷</p>
            <p>同校交易，省去物流，不用等待。</p>
          </div>
        </div>
        <div class="one">
          <span class="yuan">
            <b-icon-envelope font-scale="2.5"></b-icon-envelope>
          </span>
          <div class="text">
            <p class="p">简单</p>
            <p>简单注册，简洁发布，一键到底。</p>
          </div>
        </div>
        <div class="one">
          <span class="yuan">
            <b-icon-shield-fill-check
              font-scale="2.5"
            ></b-icon-shield-fill-check>
          </span>
          <div class="text">
            <p class="p">方便</p>
            <p>PC＋APP，分类明晰，快速搜索。</p>
          </div>
        </div>
        <div class="one">
          <span class="yuan">
            <b-icon-geo-alt-fill font-scale="2.5"></b-icon-geo-alt-fill>
          </span>
          <div class="text">
            <p class="p">安全</p>
            <p>当面沟通，信息对称，确保安全。</p>
          </div>
        </div>
      </div>
    </div>
    <b-embed type="video" aspect="16by9" controls poster="/images/首页1.jpg">
      <source src="/images/video.MP4" type="video/mp4" />
    </b-embed>
    <Footer />
  </div>
</template>
<style lang="less" scoped>
.top {
  background-attachment: fixed;
  background-size: cover;
  color: #555;
  width: 100%;
  min-height: 700px;
  position: relative;
  text-align: center;
  background-image: url(/images/首页1.jpg);
}
.top .text-box {
  padding-top: 200px;
  color: #666;
}
.text-box .title {
  color: #666666;
  font-size: 50px;
  margin-bottom: 15px;
}
.text-box .desc {
  font-size: 30px;
}
.top-item-btn {
  background-color: #ffffff;
  width: 1200px;
  height: 330px;
  margin: auto;
  position: absolute;
  bottom: -60px;
  left: 50%;
  margin-left: -600px;
  z-index: 99;
  -moz-box-shadow: 0 1px 15px #333;
  -webkit-box-shadow: 0 1px 15px #333;
  box-shadow: 0 1px 15px #333;
  border-radius: 4px;
  overflow: hidden;
}
.content {
  text-align: center;
  width: 100%;
  height: 258px;
}

.content h2 {
  font-size: 24px;
  display: block;
  font-weight: 400px;
  -webkit-text-stroke: 0.1px rgb(255, 255, 255);
}
.content p {
  font-size: 16px;
}
/* container诗 */
.container-bao {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.container-bao .box {
  position: relative;
  width: 400px;
  height: 330px;
  box-sizing: border-box;
  overflow: hidden;
}
.box a {
  color: #555555;
}
.container-bao .box .imgbx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  clip-path: circle(400px at center 100px);
  transition: all 0.5s;
  transition-delay: 0.5s;
}
.container-bao .box .imgbx img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container-bao .box:hover .imgbx {
  clip-path: circle(80px at center 100px);
  transition-delay: 0s;
}
.container-bao .box:hover .imgbx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container-bao .box .content {
  font-family: "fang";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
}
.container-bao .box .content h2 {
  margin: 10px 0;
  padding: 0;
}
.content h2:hover {
  color: #39bc54;
  transition: 0.7s;
}
.container-bao .box .content h2,
.container-bao .box .content p {
  opacity: 0;
  transition: 0.5s;
  transform: translateY(20px);
}
.container-bao .box:hover .content h2 {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.5s;
}
.container-bao .box:hover .content p {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.7s;
}
.showphoto {
  max-width: 1000px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  position: relative;
  margin: 20px 0;
  width: 300px;
  height: 400px;
  background: #fff;
  transform-style: preserve-3d;
  transform: perspective(2000px);
  transition: 1s;
  box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5);
}
.card:hover {
  z-index: 1000;
  transform: perspective(2000px) rotate(-10deg);
  box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.5);
}
.card .imgBox {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  box-sizing: border-box;
  transform-origin: left;
  z-index: 1;
  transition: 1s;
}
.card:hover .imgBox {
  transform: rotateY(-135deg);
}
.card .imgBox .img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .imgBox img {
  width: 100%;
  height: 100%;
}
.card .details {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 20px;
}

.desc-box {
  width: 1200px;
  height: 291px;
  // background-color: rgba(136, 24, 24, 0.5);
  margin: 150px auto 0;
}
h3 {
  color: #39bc54;
  font-size: 2em;
  padding-bottom: 0.5em;
  position: relative;
  text-align: center;
  margin-bottom: 35px;
  font-weight: 400;
}
.top-box {
  width: 100%;
  height: 80px;
  // background-color: rgba(122, 50, 110, 0.384);
}
.top-box .one {
  margin-bottom: 30px;
  float: left;
  width: 600px;
  height: 80px;
  // background-color: rgba(216, 130, 81, 0.418);
}
.yuan {
  float: left;
  margin: 0 35px;
  border-radius: 50%;
  display: block;
  width: 80px;
  height: 80px;
  background-color: #52d3aa;
}
.b-icon {
  margin: 20px;
  color: #fff;
}
.one .text {
  float: left;
  width: 450px;
  height: 80px;
}
.one .text .p {
  color: #212121;
  font-size: 1.5em;
  line-height: 1.2em;
  margin: 0 0 0.5em;
  text-transform: capitalize;
}
.one .text .p:hover {
  color: #39bc54;
  transition: 1s;
}
.one .text p {
  color: #999;
  font-size: 1em;
  line-height: 1.8em;
}
.embed-responsive {
  margin-bottom: 150px;
}
</style>
