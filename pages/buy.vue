<template>
  <div>
    <div class="buy-box">
      <Buyint v-for="buy in buyList" :key="buy.buy_id" :buy="buy" />
      <!-- <b-card>
        <b-card-text>
          <b-avatar src="/images/touxiang1.png"></b-avatar>
          <span>123456</span>
          <span>广西民族大学相思湖学院</span>
          <span>更新于2020-01-05</span>
        </b-card-text>
        <b-card-text>
          <h5>寒假租一辆电动车</h5>
          <div>寒假实习，求租一辆电动车假实习，求租一辆电动车</div>
          <div class="middle">预算2000-2500</div>
          <div >联系电话 ： 3220531545</div>
        </b-card-text>
        <div class="pic33"><img src="/images/商品/电动车1.png" alt=""></div>
      </b-card> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "hf",
  data() {
    return {
      slide: 0,
      tabIndex: 0,
      sliding: null,
      buyList: [],
    };
  },
  async fetch() {
    await this.getList();
  },
  methods: {
  },
  computed: {
    ehbtlist: {
      get() {
        // console.log(this.$store.state.exhibits.exhibits);
        // return this.$store.state.exhibits.exhibits;
      },
    },
  },
  async fetch() {
    this.buyList = await fetch("/api/buy") // 承诺实现，并传值给fetchBuysList
      .then((res) => res.json()); // 知道是一个 json 格式的数据，就将json 字符串解析为对象

    console.log("this.buyList: %O", this.buyList);
  },
};
</script>

<style lang="less" scoped>
.buy-box {
  margin: 30px auto;
  width: 1000px;
}
.card-body {
  position: relative;
  height: 214px;
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  background: #fff;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
}

</style>