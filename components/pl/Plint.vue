<template>
  <div class="comment-item">
    <div class="left-box">
      <div class="pic">
        <img :src="pl_image" alt="" />
      </div>
      <div class="name">
        <div class="usn">{{ pl_name }}</div>
        <div class="time">{{ createdAt }}</div>
      </div>
    </div>
    <div class="right-box">
      <p>{{ pl_text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pl: {
      type: Object,
    },
  },
  data() {
    return this.pl;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.comment-item {
  width: 100%;
  height: 94px;
  padding: 20px;
  border-bottom: 1px solid #eee;
}
.left-box {
  float: left;
  width: 145px;
  height: 53px;
}
.left-box .pic {
  float: left;
  width: 50px;
  height: 50px;
}
.left-box .pic img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.left-box .name {
  float: right;
  width: 86px;
  height: 53px;
}
.name .usn {
  font-weight: 600;
  width: 88px;
  height: 25px;
}
.name .time {
  line-height: 25px;
  font-size: 13px;
  width: 88px;
  height: 25px;
}
.right-box {
  line-height: 53px;
  float: left;
  width: 400px;
  height: 53px;
}
</style>