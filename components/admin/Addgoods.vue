<template>
  <div>
    <b-table class="table" :items="goodsList" :fields="goodsFields" hover>
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="editGoods(row.item, row.index, $event.target)"
          class="mr-1"
        >
          编辑
        </b-button>
        <b-button
          class="btn-secondary2"
          size="sm"
          @click="deleteGoods(row.item, row.index, $event.target)"
        >
          删除
        </b-button>
      </template>
    </b-table>
    <b-modal
      id="model-goods-edit"
      title="编辑用户"
      @hide="resetEditGoodsModal"
      @ok="doEditGoods"
      cancel-title="关闭"
      ok-title="确定"
    >
      <pre>{ <Editgoods/> }</pre>
      <!-- { goodsData } -->
    </b-modal>
    <b-modal
      id="model-goods-delete"
      title="删除用户"
      @hide="resetDeleteGoodsModal"
      @ok="doDeleteGoods"
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
    goodsList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    goods: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      goodsFields: [
        { key: "goods_id", label: "ID" },
        { key: "classify_id", label: "分类ID" },
        { key: "goods_name", label: "名称" },
        { key: "goods_desc", label: "描述" },
        { key: "goods_image", label: "图片" },
        { key: "goods_price", label: "价格" },
        { key: "goods_oldprice", label: "原价" },
        { key: "goods_postage", label: "邮费" },
        { key: "goods_tel", label: "电话" },
        { key: "actions", label: "操作" }
      ],
      goodsData: null,
    };
    return this.goods;
  },

   methods: {
    editGoods(item, index, button) {
      console.log(this.goodsData);
      this.goodsData = item;
      this.$store.commit("editgoods/setDatasbank",item);
      // 假设item_id 是 传进来的item 的id ，要编辑的数据id 
      //  /Admin/editdatasbank/${id}
      this.$router.push({path:`/Admin/editgoods/${item.goods_id}`})
    },

    deleteGoods(item, index, button) {
      this.goods_name = null;
      this.$root.$emit("bv::show::modal", "model-goods-delete", button);
      this.$store.commit("delect/setuserData", item);
    },

    resetEditGoodsModal() {
      this.goodsData = null;
    },
    resetDeleteGoodsModal() {
      this.goodsData = null;
    },

    doEditGoods() {
      // 发送编辑后的用户数据到服务器
      this.$store.dispatch("auth/editGoods", this);
     
    },
    doDeleteGoods(){
      this.$store.dispatch("delect/deleteGoods", this);
    },

    finishEditGoods() {
      // 完成用户编辑的后续处理
    },
    finishDelect(result) {
      if (result.result) {
        alert("删除成功!");
        window.location.href="/Admin/goods"
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/Adgoods").then((res) =>
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