<template>
  <div>
    <Header />
    <Xiaoyuanershou />
    <div class="inner">
      <div class="box">
        <h4 class="title">发布商品</h4>
        <b-form>
          <b-form-group
            id="fieldset-1"
            label="标题"
            label-cols-sm="4"
            label-cols-lg="2"
            :state="state"
          >
            <b-form-input
              id="input-1"
              type="text"
              placeholder="很重要，显示在列表页"
              :state="state"
              autocomplete="false"
              v-model="name"
              trim
            ></b-form-input>
          </b-form-group>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      return this.name.length >= 2;
    },
    // invalidFeedback() {
    //   if (this.name.length > 0) {
    //     return "Enter at least 4 characters.";
    //   }
    //   return "Please enter something.";
    // },
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="less" scoped>
body {
  background-color: #f8f8f8;
}
.inner {
  width: 100%;
  padding: 50px 0px;
}
.box {
  width: 800px;
  height: 1000px;
  background-color: rgb(85, 69, 69);
  padding: 50px 30px;
  margin: auto;
  // background-color: rgb(255, 255, 255);
  border-radius: 6px;
  box-shadow: rgba(7, 17, 27, 0.07) 0px 4px 8px 0px;
}
.title {
  margin-bottom: 30px;
  color: rgb(51, 51, 51);
  text-align: center;
}
</style>