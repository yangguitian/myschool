<template>
  <div class="g">
    <div class="img-box"><img src="/images/商品/篮球1.png"/></div>
    <div class="right-box">
      <div class="title">标题</div>
      <div class="tetx">内容</div>
      <div class="button">
        <b-row cols="12">
          <b-col cols="9">
            <span class="jiage">￥49</span>
            <span class="time">2021-01-12</span>
          </b-col>
          <b-col cols="3">
            <b-button
              @click="onClick(row.item, row.index, $event.target)"
              variant="warning"
              size="sm"
              class="mr-1"
            >
              编辑
            </b-button>
            <b-button
              class="btn-secondary2"
              variant="danger"
              size="sm"
              @click="deleteDatabank(row.item, row.index, $event.target)"
            >
              删除
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "center",
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