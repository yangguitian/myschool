<template>
  <div class="card">
    <nuxt-link :to="`/detail/${goods.goods_id}`">
      <div class="imgbox"><img :src="goods_image" class="card-img-top" /></div>
    
    <div class="button">
      <div class="title">{{ goods_name }}</div>
      <div class="text">{{ goods_desc }}</div>
      <div class="time">
        <span>更新于{{date}}</span>
        <span class="peopel">250人浏览</span>
      </div>
      <div class="shuzi-box">
        <span class="jiage">
          ￥<span class="shuzi">{{ goods_price }}</span>
          <!-- <span class="sch">{{ goods_school }}</span> -->
        </span>
      </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    },
  },
  data() {
    return this.goods;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
a {
  text-decoration:none;
}
.card-columns {
  column-count: 4 !important;
}
.a .card {
  
  display: inline-block;
  overflow: hidden;
  border-radius: 8px;
  background-color: #ffffff;
  margin-right: 15px;
}
.imgbox {
  width: auto;
  height: auto;
  overflow: hidden;
}
.a .card img {
  width: 100%;

  transition: all 0.2s;
}
.a .card img:hover {
  transform: scale(1.1);
}
.card .button {
  width: 100%;
  max-height: 150px;
  min-height: 150px;
  padding: 5px 10px;
}
.a .card .button .title {
  font-size: 18px;
  color: #93999f;
  overflow: hidden;
  height: 25px;
}
.a .card .button .text {
  font-size: 13px;
  color: #93999f;
  overflow: hidden;
  height: 22px;
}
.shuzi-box {
  width: 90%;
  height: 30px;
}
.a .jiage {
  color: red;
}
.shuzi {
  font-size: 23px;
}
.button .time {
  width: 100%;
  margin-top: 20px;
}
.button .time span {
  color: #93999f;
  font-size: 12px;
}

.peopel {
  margin-left: 35px;
}
.a .sch {
  line-height: 37px;
  font-size: 14px;
  color: #2d8cf0;
  float: right;
}
</style>