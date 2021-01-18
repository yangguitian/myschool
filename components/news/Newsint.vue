<template>
     <div class="box">
          <div class="media-left">
            <img :src="news_image" alt="" />
          </div>
          <div class="right">
            <div class="media-heading">
              {{ news_name }}
            </div>
            <div class="desc">
              {{ news_desc }}
            </div>
            <div class="time">{{ news_date}}</div>
          </div>
        </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
    },
  },
  data() {
    return this.news;
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.box {
  width: 850px;
  height: 187px;
  padding-top: 18px;
  border-bottom: 1px solid #e6e8eb;
  padding-bottom: 18px;
}
.box:hover .media-heading {
  color: #366df0;
  transition: all 0.5s;
}
.box:hover {
  background-color: #f6f6f6;
}
.media-left {
  float: left;
  width: 248px;
  height: 148px;
  border-radius: 4%;
  background-color: rgb(120, 116, 138);
  overflow: hidden;
}
.media-left img {
  width: 100%;
  height: 100%;
}
.media-left img:hover {
  transform: scale(1.1);
  transition: all 1s 0.2s;
}
.box .right {
  float: right;
  width: 590px;
  height: 150px;
}
.media-heading {
  font-size: 18px;
  max-height: 50px;
  font-weight: 600;
  margin-bottom: 0.25rem;
  line-height: 25px;
  color: #3d464d;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  max-height: 66px;
  font-size: 14px;
  line-height: 22px;
  padding-right: 10px;
  color: #828a92;
}
.time {
  font-size: 12px;
  margin-top: 55px;
  color: #666;
}
</style>