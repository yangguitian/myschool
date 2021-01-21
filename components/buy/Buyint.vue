<template>
     <b-card>
        <b-card-text>
          <b-avatar src="/images/头像/头像3.png"></b-avatar>
          <span>15577737997</span>
          <span>桂电北海校区</span>
         
        </b-card-text>
        <b-card-text>
          <h5>{{ buy_name }}</h5>
          <div>{{ buy_desc }}</div>
          <div class="middle">预算：{{ buy_price }}元</div>
          <sapn >联系电话 ： {{ buy_tel }}</sapn>
           <span class="time">更新于 : {{ date }}</span>
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
.time {
  margin-left: 400px;
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