<template>
  <div>
    <b-table class="table" :items="buyList" :fields="buyFields" hover>
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="editbuy(row.item, row.index, $event.target)"
          class="mr-1"
        >
          编辑
        </b-button>
        <b-button
          class="btn-secondary2"
          size="sm"
          @click="deletebuy(row.item, row.index, $event.target)"
        >
          删除
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="model-buy-edit"
      title="编辑用户"
      @hide="resetEditbuyModal"
      @ok="doEditbuy"
      cancel-title="关闭"
      ok-title="确定"
    >
      <pre>{ <Editbuy/> }</pre>
      <!-- { buyData } -->
    </b-modal>
    <b-modal
      id="model-buy-delete"
      title="删除用户"
      @hide="resetDeletebuyModal"
      @ok="doDeletebuy"
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
    buyList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    buy: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      buyFields: [
        { key: "buy_id", label: "ID" },
        { key: "buy_name", label: "标题" },
        { key: "buy_desc", label: "描述" },
        { key: "buy_image", label: "图片" },
        { key: "buy_price", label: "可接受价格" },
        { key: "buy_tel", label: "电话" },
        { key: "actions", label: "操作" }
      ],
      buyData: null,
    };
    return this.buy;
  },

   methods: {
    editbuy(item, index, button) {
      console.log(this.buyData);
      this.buyData = item;
      this.$store.commit("editbuy/setDatasbank",item);
      // 假设item_id 是 传进来的item 的id ，要编辑的数据id 
      //  /Admin/editdatasbank/${id}
      this.$router.push({path:`/Admin/editbuy/${item.buy_id}`})
    },

    deletebuy(item, index, button) {
      this.buy_name = null;
      this.$root.$emit("bv::show::modal", "model-buy-delete", button);
      this.$store.commit("delect/setuserData", item);
    },

    resetEditbuyModal() {
      this.buyData = null;
    },
    resetDeletebuyModal() {
      this.buyData = null;
    },

    doEditbuy() {
      // 发送编辑后的用户数据到服务器
      this.$store.dispatch("auth/editbuy", this);
     
    },
    doDeletebuy(){
      this.$store.dispatch("delect/deletebuy", this);
    },

    finishEditbuy() {
      // 完成用户编辑的后续处理
    },
    finishDelect(result) {
      if (result.result) {
        alert("删除成功!");
        window.location.href="/Admin/buy"
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/Adbuy").then((res) =>
        res.json()
      );
      },
  },
};


</script>

<style lang="less" scoped>
.table {
  background-color: #ffffff;
}
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
</style>