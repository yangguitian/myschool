<template>
  <div>
    <b-table class="table" :items="carList" :fields="carFields" hover>
      <template #cell(actions)="row">
        <b-button
          class="btn-secondary3"
          size="sm"
          @click="deleteCar(row.item, row.index, $event.target)"
        >
          删除
        </b-button>
        <!-- <nuxt-link :to="'/detail2/' + car_id"> -->
          <b-button
          @click="GOCar(row.item, row.index, $event.target)"
           class="btn-secondary2" size="sm">
            去付款
          </b-button>
          <!-- </nuxt-link -->
        
      </template>
    </b-table>
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
</template>

<script>
export default {
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
        { key: "car_id", label: "商品ID" },
        { key: "car_name", label: "商品名称" },
        { key: "car_desc", label: "商品名称" },
        { key: "car_price", label: "商品价格" },
        { key: "car_oldprice", label: "商品原价" },
        { key: "actions", label: "操作" },
      ],
      carData: null,
    };
    return this.car;
  },

  methods: {
    GOCar(item, index, button){
      console.log("item %O",item);
      console.log("index %O",index);
      console.log("button %O",button);
      this.$router.push(`/detail2/${item.car_id}`);
    },
    deleteCar(item, index, button) {
      this.car_name = null;
      this.$root.$emit("bv::show::modal", "model-car-delete", button);
      this.$store.commit("delect/setuserData", item);
    },
    resetDeleteCarModal() {
      this.carData = null;
    },
    doDeleteCar() {
      this.$store.dispatch("delect/deleteCar", this);
    },
    finishDelect(result) {
      if (result.result) {
        alert("删除成功!");
        window.location.href = "/car";
      } else {
        alert("删除失败");
      }
      this.getTabList();
    },
    async getTabList() {
      this.applicationList = await fetch("/api/car").then((res) => res.json());
      console.log("this.applicationList %O",this.applicationList);
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
.btn-secondary3 {
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