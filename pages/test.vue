<template>
  <div class="container-bao">
    <div class="box">
      <div class="imgbx">
        <b-img src="/images/图1.png"></b-img>
      </div>
      <div class="content">
        <h2>校园二手</h2>
        <p>带不走的东西，丢不掉的记忆</p>
        <p>让小柚子，帮它找到新的主人</p>
      </div>
    </div>
    <div class="box">
      <div class="imgbx">
        <b-img src="/images/图2.png"></b-img>
      </div>
      <div class="content">
        <h2>校园二手</h2>
        <p>带不走的东西，丢不掉的记忆</p>
        <p>让小柚子，帮它找到新的主人</p>
      </div>
    </div>
    <div class="box">
      <div class="imgbx">
        <b-img src="/images/图3.png"></b-img>
      </div>
      <div class="content">
        <h2>校园二手</h2>
        <p>带不走的东西，丢不掉的记忆</p>
        <p>让小柚子，帮它找到新的主人</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>  
.content {
  text-align: center;
  width: 100%;
  height: 258px;
}

.content h1 {
  font-size: 40px;
  line-height: 100px;
  display: block;
  -webkit-text-stroke: 0.1px rgb(255, 255, 255);
}

.content p a {
  color: black;
  font-size: 20px;
  line-height: 60px;
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
  margin: 20px 0;
  box-sizing: border-box;
  overflow: hidden;
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
</style>