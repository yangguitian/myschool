<template>
  <div>
    <b-table class="table" :items="plList" :fields="plFields" hover>
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="editPl(row.item, row.index, $event.target)"
          class="mr-1"
        >
          编辑
        </b-button>
        <b-button
          class="btn-secondary2"
          size="sm"
          @click="deletePl(row.item, row.index, $event.target)"
        >
          删除
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="model-pl-edit"
      title="编辑用户"
      @hide="resetEditPlModal"
      @ok="doEditPl"
      cancel-title="关闭"
      ok-title="确定"
    >
      <pre>{ <Editpl/> }</pre>
      <!-- { plData } -->
    </b-modal>
    <b-modal
      id="model-pl-delete"
      title="删除用户"
      @hide="resetDeletePlModal"
      @ok="doDeletePl"
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
    plList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    pl: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      plFields: [
        { key: "pl_id", label: "ID" },
        { key: "pl_name", label: "昵称" },
        { key: "pl_image", label: "头像" },
        { key: "pl_text", label: "评论内容" },
        { key: "pl_date", label: "评论时间" },
        { key: "actions", label: "操作" }
      ],
      plData: null,
    };
    return this.pl;
  },

   methods: {
    editPl(item, index, button) {
      console.log(this.plData);
      this.plData = item;
      this.$store.commit("editpl/setDatasbank",item);
      // 假设item_id 是 传进来的item 的id ，要编辑的数据id 
      //  /Admin/editdatasbank/${id}
      this.$router.push({path:`/Admin/editpl/${item.pl_id}`})
    },

    deletePl(item, index, button) {
      this.pl_name = null;
      this.$root.$emit("bv::show::modal", "model-pl-delete", button);
      this.$store.commit("delect/setuserData", item);
    },

    resetEditPlModal() {
      this.plData = null;
    },
    resetDeletePlModal() {
      this.plData = null;
    },

    doEditPl() {
      // 发送编辑后的用户数据到服务器
      this.$store.dispatch("auth/editPl", this);
     
    },
    doDeletePl(){
      this.$store.dispatch("delect/deletePl", this);
    },

    finishEditPl() {
      // 完成用户编辑的后续处理
    },
    finishDelect(result) {
      if (result.result) {
        window.location.href="/Admin/pl"
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/Adpl").then((res) =>
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