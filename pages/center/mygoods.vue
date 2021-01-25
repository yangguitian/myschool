<template>
  <div>
    <div class="g">
      <div class="img-box"><img src="/images/商品/耳机1.png" /></div>
      <div class="right-box">
        <div class="title">Airpods二代耳机蓝牙耳机运动款</div>
        <div class="tetx">99新，诚意出，仅限同校交易</div>
        <div class="button">
          <b-row cols="12">
            <b-col cols="10">
              <span class="jiage">￥599</span>
              <span class="time">2021-01-24</span>
            </b-col>
            <b-col cols="2">
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
    <div class="g">
      <div class="img-box"><img src="/images/商品/篮球1.png" /></div>
      <div class="right-box">
        <div class="title">斯波特篮球</div>
        <div class="tetx">翻毛皮 棕色 带打气筒、球针、球袋</div>
        <div class="button">
          <b-row cols="12">
            <b-col cols="10">
              <span class="jiage">￥29</span>
              <span class="time">2021-01-24</span>
            </b-col>
            <b-col cols="2">
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
    <div class="g">
    <div class="img-box"><img src="/images/商品/图书1.jpeg"/></div>
    <div class="right-box">
      <div class="title">正版 三毛作品全集11册全套珍藏版</div>
      <div class="tetx">全新！！一套11本！！不砍价！！加好友，备注来源！！</div>
      <div class="button">
        <b-row cols="12">
          <b-col cols="10">
            <span class="jiage">￥88</span>
            <span class="time">2021-01-26</span>
          </b-col>
          <b-col cols="2">
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
  margin-bottom: 10px;
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