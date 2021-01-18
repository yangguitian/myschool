<template>
     <b-card>
        <b-card-text>
          <b-avatar src="/images/头像/头像3.png"></b-avatar>
          <span>123456</span>
          <span>广西民族大学相思湖学院</span>
          <span>更新于2020-01-19</span>
        </b-card-text>
        <b-card-text>
          <h5>{{ buy_name }}</h5>
          <div>{{ buy_desc }}</div>
          <div class="middle">预算：{{ buy_price }}</div>
          <div >联系电话 ： {{ buy_tel }}</div>
        </b-card-text>
        <div class="pic33"><img :src="buy_image"></div>
      </b-card>
</template>

<script>
export default {
  props: {
    buy: {
      type: Object,
    },
  },
  data() {
    return this.buy;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.card  {
    margin-bottom: 20px;
}
.pic33 {
  top: 20px;
  right: 20px;
  position: absolute;
  width: 180px;
  height: 180px;
  background-color: rgb(70, 60, 60);
}
.middle {
  margin: 10px 0;
}
.pic33 img {
  width: 100%;
  height: 100%;
}
</style>