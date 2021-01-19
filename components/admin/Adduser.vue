<template>
  <div>
    <b-table class="table" :items="userList" :fields="userFields" hover>
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="editUser(row.item, row.index, $event.target)"
          class="mr-1"
        >
          编辑
        </b-button>
        <b-button
          class="btn-secondary2"
          size="sm"
          @click="deleteUser(row.item, row.index, $event.target)"
        >
          删除
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="model-user-edit"
      class="bianji"
      title="编辑用户"
      @hide="resetEditUserModal"
      @ok="doEditUser"
      cancel-title="关闭"
      ok-title="确定"
    >
      <pre>{ <Edituser/> }</pre>
      <!-- { userData } -->
    </b-modal>
    <b-modal
      id="model-user-delete"
      title="删除用户"
      @hide="resetDeleteUserModal"
      @ok="doDeleteUser"
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
    userList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    user: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      userFields: [
        { key: "id", label: "ID" },
        { key: "username", label: "用户名" },
        { key: "password", label: "用户密码" },
        { key: "actions", label: "操作" }
      ],
      userData: null,
    };
    return this.user;
  },

   methods: {
    editUser(item, index, button) {
      console.log(this.userData);
      this.userData = item;
      this.$store.commit("edituser/setDatasbank",item);
      // 假设item_id 是 传进来的item 的id ，要编辑的数据id 
      //  /Admin/editdatasbank/${id}
      this.$router.push({path:`/Admin/edituser/${item.id}`})
    },

    deleteUser(item, index, button) {
      this.username = null;
      this.$root.$emit("bv::show::modal", "model-user-delete", button);
      this.$store.commit("delect/setuserData", item);
    },

    resetEditUserModal() {
      this.userData = null;
    },
    resetDeleteUserModal() {
      this.userData = null;
    },

    doEditUser() {
      // 发送编辑后的用户数据到服务器
      this.$store.dispatch("auth/editUser", this);
     
    },
    doDeleteUser(){
      this.$store.dispatch("delect/deleteUser", this);
    },

    finishEditUser() {
      // 完成用户编辑的后续处理
    },
    finishDelect(result) {
      if (result.result) {
        alert("删除成功!");
        window.location.href="/Admin/user"
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/Aduser").then((res) =>
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