<template>
  <div>
    <b-table :items="schoolList" :fields="schoolFields" hover>
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="editSchool(row.item, row.index, $event.target)"
          class="mr-1"
        >
          编辑
        </b-button>
        <b-button
          class="btn-secondary2"
          size="sm"
          @click="deleteSchool(row.item, row.index, $event.target)"
        >
          删除
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="model-school-edit"
      title="编辑用户"
      @hide="resetEditSchoolModal"
      @ok="doEditSchool"
      cancel-title="关闭"
      ok-title="确定"
    >
      <pre>{ <Editschool/> }</pre>
      <!-- { schoolData } -->
    </b-modal>
    <b-modal
      id="model-school-delete"
      title="删除用户"
      @hide="resetDeleteSchoolModal"
      @ok="doDeleteSchool"
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
    schoolList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    school: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      schoolFields: [
        { key: "school_id", label: "ID" },
        { key: "school_name", label: "学校名称" },
        { key: "school_xm", label: "申请学生" },
        { key: "school_tel", label: "联系电话" },
        { key: "actions", label: "操作" }
      ],
      schoolData: null,
    };
    return this.school;
  },

   methods: {
    editSchool(item, index, button) {
      console.log(this.schoolData);
      this.schoolData = item;
      this.$store.commit("editschool/setDatasbank",item);
      // 假设item_id 是 传进来的item 的id ，要编辑的数据id 
      //  /Admin/editdatasbank/${id}
      this.$router.push({path:`/Admin/editschool/${item.school_id}`})
    },

    deleteSchool(item, index, button) {
      this.school_name = null;
      this.$root.$emit("bv::show::modal", "model-school-delete", button);
      this.$store.commit("delect/setuserData", item);
    },

    resetEditSchoolModal() {
      this.schoolData = null;
    },
    resetDeleteSchoolModal() {
      this.schoolData = null;
    },

    doEditSchool() {
      // 发送编辑后的用户数据到服务器
      this.$store.dispatch("auth/editSchool", this);
     
    },
    doDeleteSchool(){
      this.$store.dispatch("delect/deleteSchool", this);
    },

    finishEditSchool() {
      // 完成用户编辑的后续处理
    },
    finishDelect(result) {
      if (result.result) {
        alert("删除成功!");
        window.location.href="/Admin/school"
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/Adschool").then((res) =>
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
</style>