<template>
  <div>
    <Header />
    <div class="heart">
      <div class="heart-left"></div>
      <div class="heart-right"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
body {
  background-color: #f8f8f9;
}
.heart {
  width: 1000px;
  height: 600px;
  margin: 30px auto;
  background-color: rgb(231, 180, 180);
}
.heart-left {
  float: left;
  width: 240px;
  height: 600px;
  background-color: rgb(99, 201, 59);
}
.heart-right {
  float: right;
  min-height: 600px;
  width: 760px;
  height: 600px;
  background-color: rgb(243, 64, 163);
  padding-left: 30px;
}
</style>