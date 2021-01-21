<template>
  <div>
    <Scint />
  </div>
</template>

<script>
export default {
  layout: "center",
}
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