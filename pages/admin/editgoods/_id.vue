<template>
  <div>
    <b-container fluid>
      <b-form @submit.stop.prevent="OnSubmit">
        <b-row class="my-1">
          <b-col>
            <!-- id name source browse content date images -->
            <b-form-group
              hidden
              label="id"
              label-align-sm="right"
              label-cols-xl="4"
            >
              <b-form-input
                v-model="Goodsobj.id"
                aria-describedby="input-signin-region-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="name" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.goods_name.$model"
                :state="validateSigninState('goods_name')"
                aria-describedby="input-name-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-name-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="date" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.goods_desc.$model"
                :state="validateSigninState('goods_desc')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="date" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.goods_price.$model"
                :state="validateSigninState('goods_price')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="date" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.goods_oldprice.$model"
                :state="validateSigninState('goods_oldprice')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="date" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.classify_id.$model"
                :state="validateSigninState('classify_id')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="date" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.goods_postage.$model"
                :state="validateSigninState('goods_postage')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
          <b-row class="my-1">
          <b-col>
            <b-form-group label="date" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.goods_tel.$model"
                :state="validateSigninState('goods_tel')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
          <b-row class="my-1">
          <b-col>
            <b-form-group label="date" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Goodsobj.goods_image.$model"
                :state="validateSigninState('goods_image')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>

        <b-button type="submit">提交</b-button>
        <b-button type="reset">取消</b-button>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import {
  numeric, //仅数字
  required, //非空
  minLength, //最小长度
  maxLength, //最大长度
  email, //邮箱
  alpha, //仅接受字母字符
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    Goodsobj: {
       goods_name: {
        required,
      },
      goods_desc: {
        required,
      },
      goods_price: {
        required,
      },
      goods_oldprice: {
        required,
      },
      classify_id: {
        required,
      },
      goods_postage: {
        required,
      },
      goods_tel: {
        required,
      },
      goods_image: {
        required,
      },
    },
  },
  beforeMount() {
    console.log(this.$route.params.id);
    // debugger
    // 发送这个id 获取要编辑的数据
  },
  computed: {
    Goodsobj: {
      get() {
        return this.$store.state.editgoods.Goodsobj;
      },
    },
  },
  methods: {
    validateSigninState(name) {
      const { $dirty, $error } = this.$v.Goodsobj[name];
      return $dirty ? !$error : null;
    },
    // 编辑完提交
    async OnSubmit() {
      this.$v.Goodsobj.$touch();
      if (this.$v.Goodsobj.$anyError) {
        return;
      }
      let postBody = Object.keys(this.Goodsobj)
        .map((key) => {
          return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.Goodsobj[key])
          );
        })
        .join("&");
      let result = await fetch("/api/editugoods/edit", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
      if (!this.$v.Goodsobj.$anyError) {
        alert("修改成功！");
        window.location.href = "/Admin/goods";
      }
    },
  },
  layout: "admin",
};
</script>
<style lang="less" scoped>
.container-fluid {
  width: 700px;
  height: 500px;
  margin: 50px auto 0 450px;
  padding-top: 30px;
  // background-color: blueviolet;
}
.my-1 {
  margin-top: 30px !important;
}
.btn {
  margin: 50px auto auto 220px;
  width: 80px;
  height: 40px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.b-col {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}
</style>