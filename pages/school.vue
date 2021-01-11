<template>
  <div>
    <Header />
    <Xiaoyuanershou />
    <div class="content-box">
      <!-- 分割线一个字母start -->
      <div class="one-box" v-for="item in items" :key="item.id">
        <div class="title-box">
          <p class="text">{{item.title}}</p>
        </div>
        <div class="item-box">
          <div class="logo">
            <img :src="item.img" />
          </div>
          <div class="text-box">
            <h5>{{item.text1}}</h5>
            <p>{{item.text2}}</p>
          </div>
        </div>
        <div class="item-box">
          <div class="logo">
            <img :src="item.img" />
          </div>
          <div class="text-box">
            <h5>{{item.text1}}</h5>
            <p>{{item.text2}}</p>
          </div>
        </div>
        <div class="item-box">
          <div class="logo">
            <img :src="item.img" />
          </div>
          <div class="text-box">
            <h5>{{item.text1}}</h5>
            <p>{{item.text2}}</p>
          </div>
        </div>
      </div>
      <!-- 分割线一个字母end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "精选",img:"/images/学校1.png", text1:"所有学校", text2:"全国高校，一览无遗"},
        
        ],
    }
  },
};
</script>
<style lang="less" scoped>
.content-box {
  margin: 30px auto;
  width: 1000px;
  height: 3500px;
  background-color: rgb(156, 123, 123);
}
.one-box {
  width: 100%;
  height: 160px;
  background-color: rgb(185, 207, 124);
}
.title-box {
  width: 100%;
  height: 30px;
  background-color: rgb(128, 202, 153);
  margin-bottom: 20px;
}
.title-box .text {
  font-size: 20px;
  color: rgb(45, 140, 240);
  font-weight: 600;
  text-align: center;
}
.item-box {
  float: left;
  padding: 10px;
  margin: 0 11px;
  width: 31%;
  height: 80px;
  background-color: #f2f2f2;
}
.item-box:hover {
  background-color: #ebf5ff;
}
.item-box .logo {
  float: left;
  width: 60px;
  height: 60px;
}
.item-box .logo img {
  width: 60px;
  height: 60px;
}
.text-box {
  margin-left: 12px;
  float: left;
  width: 200px;
  height: 60px;
}
.text-box h5 {
  font-size: 17px;
  color: #555;
  font-weight: 600;
  margin-top: 5px;
}
.text-box {
  font-size: 14px;
  color: #888;
}
</style>