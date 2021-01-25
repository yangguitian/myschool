<template>
  <div>
    <div class="g" v-for="item in fetchGoodsList" :key="item.id">
      <div class="img-box"><img :src="item.sc_image" /></div>
      <div class="right-box">
        <div class="title">{{ item.sc_name }}</div>
        <div class="tetx">{{ item.sc_desc }}</div>
        <div class="button">
          <b-row cols="12">
            <b-col cols="10">
              <span class="jiage">￥{{ item.sc_price }}</span>
              <span class="time">{{ item.date }}</span>
            </b-col>
            <b-col cols="2">
              <b-button
                class="btn-secondary2"
                variant="danger"
                size="sm"
                @click="enter(item)"
              >
                删除
              </b-button>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fetchGoodsList: [],
    };
    return this.sc;
  },
  methods: {
    enter(item) {
      console.log("item: %O", item);
          this.$store.commit("delect/setuserData", item);
          this.$store.dispatch("delect/removePer", this);
    
    },
    finishRemove(result) {
      console.log("result: %O", result);
      if (result.result) {
       window.location.href="/center/mycollection"
      } else {
        alert("删除失败");
      }

      setTimeout(() => {
        this.$router.go(0);
      }, 1000);
    },
  },
 async fetch() {
    this.fetchGoodsList = await fetch("/api/sc") // 承诺实现，并传值给fetchGoodsList
      .then((res) => res.json()); // 知道是一个 json 格式的数据，就将json 字符串解析为对象

    console.log("this.fetchGoodsList: %O", this.fetchGoodsList);
  },
};
</script>

<style lang="less" scoped>
.g {
  width: 698px;
  height: 122px;
  border: 1px solid #e8eaec;
  padding: 16px;
}
.g:hover {
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  transition: 0.5s;
}
.img-box {
  float: left;
  width: 90px;
  height: 90px;
}
.img-box img {
  width: 90px;
  height: 90px;
}
.right-box {
  float: right;
  width: 556px;
  height: 90px;
}
.right-box .button {
  width: 100%;
}
.jiage {
  line-height: 31px;
  color: red;
  font-size: 15px;
  margin-right: 15px;
}
.tetx {
  font-size: 13px;
  margin-bottom: 15px;
}
.time {
  color: #8f86a2;
  font-size: 14px;
}
.btn-block {
  width: 68%;
}
</style>