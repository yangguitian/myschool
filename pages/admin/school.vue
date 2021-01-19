<template>
  <main role="main" class="col-md-9 body col-lg-9 col-xl-10 ml-sm-auto px-md-4">
    <div
      class="d-flex top justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">学校申请</h1>
    </div>
    <Addschool :schoolList="schoolList" />
  </main>
</template>
<script>
export default {
    methods: {
    doEditSchool() {
        // 发送编辑后的用户数据到服务器
        this.$store.dispatch("auth/UpdataSchool", this);
      },
       finishUpdateSchool() {
      // 完成用户编辑的后续处理
    }
  },
  layout: "admin",  
  props: {

  },
  data() {
    
    return {
     schoolList: []
    };
  },
  async fetch() {
    this.schoolList = await fetch("/api/Adschool").then((res) => res.json());
  }
};
</script>
<style lang="less" scoped>
.btn{
  width: 100px;
  height: 100%;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.body {
  background-color: #e3e4e6;
}
.h2 {
  font-size: 24px;
}
</style>