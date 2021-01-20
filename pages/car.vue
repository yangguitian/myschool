<template>
  <div class="h">
    <div class="top-box">
      <span class="left">
        <span><img src="/images/logo1.png" /></span>
      </span>
      <div class="right">
        <div class="left1">宝贝 <b-icon icon="chevron-down"></b-icon></div>
        <div class="right1">
          <b-icon icon="Search"></b-icon>
          <b-input></b-input>
        </div>
        <div class="ss">
          <b-button>搜 索</b-button>
        </div>
      </div>
      <div class="gwc">购物车</div>
    </div>
    <div class="top2">
      <ul>
        <li class="one">全部商品</li>
        <li>降价商品</li>
        <li>库存紧张</li>
      </ul>
    </div>
    <div class="qwe"></div>
    <div>
      <b-table class="table" :items="carList" :fields="carFields" hover>
        <template #cell(actions)="row">
          <b-button
            size="sm"
            @click="editCar(row.item, row.index, $event.target)"
            class="mr-1"
          >
            编辑
          </b-button>
          <b-button
            class="btn-secondary2"
            size="sm"
            @click="deleteCar(row.item, row.index, $event.target)"
          >
            删除
          </b-button>
        </template>
      </b-table>
      <b-modal
        id="model-car-edit"
        title="编辑用户"
        @hide="resetEditCarModal"
        @ok="doEditCar"
        cancel-title="关闭"
        ok-title="确定"
      >
        <pre>{ <Editcar/> }</pre>
        <!-- { carData } -->
      </b-modal>
      <b-modal
        id="model-car-delete"
        title="删除用户"
        @hide="resetDeleteCarModal"
        @ok="doDeleteCar"
        cancel-title="关闭"
        ok-title="确定"
      >
        <pre>请确认是否删除！</pre>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  layout: "hf",
  props: {
    carList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    car: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      carFields: [
        { key: "car_id", label: "ID" },
        { key: "car_name", label: "商品名称" },
        { key: "car_price", label: "商品价格" },
        { key: "car_oldprice", label: "商品原价" },
        { key: "actions", label: "操作" },
      ],
      carData: null,
    };
    return this.car;
  },

  methods: {
    editCar(item, index, button) {
      console.log(this.carData);
      this.carData = item;
      this.$store.commit("editcar/setDatasbank", item);
      // 假设item_id 是 传进来的item 的id ，要编辑的数据id
      //  /Admin/editdatasbank/${id}
      this.$router.push({ path: `/Admin/editcar/${item.car_id}` });
    },

    deleteCar(item, index, button) {
      this.car_name = null;
      this.$root.$emit("bv::show::modal", "model-car-delete", button);
      this.$store.commit("delect/setuserData", item);
    },

    resetEditCarModal() {
      this.carData = null;
    },
    resetDeleteCarModal() {
      this.carData = null;
    },

    doEditCar() {
      // 发送编辑后的用户数据到服务器
      this.$store.dispatch("auth/editCar", this);
    },
    doDeleteCar() {
      this.$store.dispatch("delect/deleteCar", this);
    },

    finishEditCar() {
      // 完成用户编辑的后续处理
    },
    finishDelect(result) {
      if (result.result) {
        alert("删除成功!");
        window.location.href = "/Admin/car";
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/car").then((res) => res.json());
    },
  },
};
</script>
<style lang="less" scoped>
.h {
  padding: 0;
  width: 1200px;
  margin: 20px auto;
  height: 2000px;
  background-color: rgb(122, 148, 128);
}
.top-box {
  width: 100%;
  height: 95px;
  background-color: rgb(160, 105, 105);
}
.top-box .left {
  display: inline-block;
  overflow: hidden;
  width: 60px;
  height: 95px;
  background-color: rgb(84, 71, 87);
}
.top-box .left img {
  margin-top: 20px;
  height: 55px;
}
.top-box .right {
  float: right;
  width: 550px;
  height: 55px;
  margin-top: 20px;
  border: 2px solid #ff4400;
  background-color: rgb(43, 68, 121);
}
.top-box .right .left1 {
  float: left;
  display: inline-block;
  width: 80px;
  height: 100%;
  background-color: #f5f5f5;
}
.top-box .right .left1 {
  border-right: 1px solid #e5e5e5;
  color: #6b6b6b;
  text-align: center;
  line-height: 51px;
}
.top-box .right .right1 {
  position: relative;
  float: left;
  width: 370px;
  height: 100%;
  display: inline-block;
  background-color: rgb(153, 66, 66);
}
.form-control {
  height: 100%;
}
.form-control:focus {
  border-color: #e6e6e6;
  box-shadow: 0 0 0 0;
}
.b-icon {
  font-size: 30px;
  color: #cccccc;
  top: 12px;
  left: 10px;
  position: absolute;
}
.ss {
  width: 100%;
  height: 100%;
  background-color: rgb(158, 89, 89);
}
.btn {
  background-color: #ff4400;
  font-size: 23px;
  width: 96px;
  height: 100%;
}
.btn-secondary:not(:disabled):not(.disabled):active {
  background-color: #ff4400;
  border-color: #ff4400;
}
.btn:focus {
  border-color: #e6e6e600;
  box-shadow: 0 0 0 0;
}
.gwc {
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 85px;
  //   background-color: rgb(211, 128, 128);
}
.top2 {
  width: 100%;
  height: 40px;
  background-color: rgb(85, 167, 98);
  border-bottom: 2px solid #e6e6e6;
}
.top2 ul {
  margin-left: 20px;
  width: 500px;
  height: 40px;
  // background-color: rgb(106, 90, 116);
}
.top2 ul li {
  text-align: center;
  float: left;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-right: 1px solid #e8e8e8;
  width: 133px;
  height: 40px;
  // background-color: rgb(138, 115, 115);
  list-style: none;
}
.top2 ul li:hover {
  font-weight: 500;
  color: #ff4400;
  border-bottom: 2px solid #ff4400;
}
.top2 ul .one {
  font-weight: 600;
  color: #ff4400;
  border-bottom: 2px solid #ff4400;
}
.qwe {
  width: 100%;
  height: 42px;
  background-color: #fff;
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
.table {
  background-color: #ffffff;
}
</style>