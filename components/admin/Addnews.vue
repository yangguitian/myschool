<template>
  <div>
    <b-table class="table" :items="newsList" :fields="newsFields" hover>
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="editNews(row.item, row.index, $event.target)"
          class="mr-1"
        >
          编辑
        </b-button>
        <b-button
          class="btn-secondary2"
          size="sm"
          @click="deleteNews(row.item, row.index, $event.target)"
        >
          删除
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="model-news-edit"
      title="编辑用户"
      @hide="resetEditNewsModal"
      @ok="doEditNews"
      cancel-title="关闭"
      ok-title="确定"
    >
      <pre>{ <Editnews/> }</pre>
      <!-- { newsData } -->
    </b-modal>
    <b-modal
      id="model-news-delete"
      title="删除用户"
      @hide="resetDeleteNewsModal"
      @ok="doDeleteNews"
      cancel-title="关闭"
      ok-title="确定"
    >
      <pre>请确认是否删除！</pre>
    </b-modal>
  </div>
</template>

<script>
export default {
 
  props: {
    newsList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    news: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      newsFields: [
        { key: "news_id", label: "ID" },
        { key: "news_name", label: "名称" },
        { key: "news_desc", label: "描述" },
        { key: "news_image", label: "图片" },
        { key: "news_date", label: "电话" },
        { key: "actions", label: "操作" }
      ],
      newsData: null,
    };
    return this.news;
  },

   methods: {
    editNews(item, index, button) {
      console.log(this.newsData);
      this.newsData = item;
      this.$store.commit("editnews/setDatasbank",item);
      // 假设item_id 是 传进来的item 的id ，要编辑的数据id 
      //  /Admin/editdatasbank/${id}
      this.$router.push({path:`/Admin/editnews/${item.news_id}`})
    },

    deleteNews(item, index, button) {
      this.news_name = null;
      this.$root.$emit("bv::show::modal", "model-news-delete", button);
      this.$store.commit("delect/setuserData", item);
    },

    resetEditNewsModal() {
      this.newsData = null;
    },
    resetDeletenewsModal() {
      this.newsData = null;
    },

    doEditNews() {
      // 发送编辑后的用户数据到服务器
      this.$store.dispatch("auth/editNews", this);
     
    },
    doDeleteNews(){
      this.$store.dispatch("delect/deleteNews", this);
    },

    finishEditNews() {
      // 完成用户编辑的后续处理
    },
    finishDelect(result) {
      if (result.result) {
        alert("删除成功!");
        window.location.href="/Admin/news"
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/Adnews").then((res) =>
        res.json()
      );
      },
  },
};


</script>

<style lang="less" scoped>
.justify-content-center {
  justify-content: center !important;
  margin: 30px 230px 30px 0;
}
.PageNumber {
  margin-top: 8px;
}
.btn-secondary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-secondary2 {
  color: #fff;
  background-color: #b12934;
  border-color: #b12934;
}
.table {
  background-color: #ffffff;
}
</style>