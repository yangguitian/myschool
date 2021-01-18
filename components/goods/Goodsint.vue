<template>
  <div class="card">
    <img
     :src="goods_image"
      class="card-img-top"
    />
      <div class="button">
      <div class="title">{{ goods_name }}</div>
      <div class="text">{{ goods_desc }}</div>
      <div class="time">
        <span>更新于2020-03-24</span>
        <span class="peopel">250人浏览</span>
      </div>
      <div class="shuzi-box">
        <span class="jiage">
          ￥<span class="shuzi">{{ goods_price }}</span>
          <span class="sch">{{ goods_oldprice }}</span>
        </span>
      </div>
    </div>
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
.card-columns {
  column-count: 4 !important;
}
.a .card {
  display: inline-block;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #ffffff;
  margin-right: 15px;
}
.a .card img {
  width: 100%;
}
 .card .button {
  position: relative;
  width: 100%;
  max-height: 150px;
  min-height: 150px;
  padding: 5px 10px;
}
.a .card .button .title {
  font-size: 18px;
}
.a .card .button .text {
  font-size: 13px;
}
.shuzi-box {
  position: absolute;
  bottom: 15px;
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
  position: absolute;
  bottom: 40px;
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