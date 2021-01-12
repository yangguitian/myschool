<template>
  <div>
    <div class="img">
      <img src="/images/学校.png" alt="" />
    </div>
    <div class="content-box">
      <ApplyFrom />
    </div>
  </div>
</template>

<script>
export default {
  layout:"hf",
}
</script>
<style lang="less" scoped>
body {
  background-color: #f8f8f9;
}
.img {
  text-align: center;
  width: 800px;
  margin: 30px auto;
}
.img img {
  height: 350px;
}
.content-box {
  width: 400px;
  margin: 50px auto;
}
</style>