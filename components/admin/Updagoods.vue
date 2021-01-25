<template>
  <div>
    <b-container fluid>
       <b-form @submit.stop.prevent="OnSubmit">
      <b-row class="my-1">
        <b-col >
          <b-form-group label="标题" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('goods_name')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.goods_name.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col >
          <b-form-group label="描述" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('goods_desc')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.goods_desc.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col >
          <b-form-group label="标价" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('goods_price')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.goods_price.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col >
          <b-form-group label="原价" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('goods_oldprice')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.goods_oldprice.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col >
          <b-form-group label="分类" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('classify_id')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.classify_id.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col >
          <b-form-group label="邮费" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('goods_postage')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.goods_postage.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col >
          <b-form-group label="手机号" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('goods_tel')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.goods_tel.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col >
          <b-form-group label="图片上传" label-align-sm="right" label-cols-xl="4"  description="/images/商品/.jpg">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('goods_image')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.goods_image.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
              不能为空！
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit">提交</b-button>
      <b-button type="reset">重置</b-button>
    </b-form>
    </b-container>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  sameAs,
  isUnique,
  email,
  or,
  alphaNum,
  and,
  sameAsPassword
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      UpdataForm: {
        goods_name: null,
        goods_desc: null,
        goods_price: null,
        goods_oldprice: null,
        classify_id: null,
        goods_postage: null,
        goods_tel: null,
        goods_image: null,
      }
    };
  },
  validations: {
    UpdataForm: {
      goods_name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      goods_desc: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(102)
      },
      goods_price: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(10)
      },
      goods_oldprice: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(10)
      },
      classify_id: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(90)
      },
      goods_postage: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(10)
      },
      goods_tel: {
        required,
        minLength: minLength(9),
        maxLength: maxLength(11)
      },
      goods_image: {
        required,
      },
    }
  },
  methods: {
    validateSigninState(name) {
      const { $dirty, $error } = this.$v.UpdataForm[name];
      return $dirty ? !$error : null;
    },
    async OnSubmit() {
      this.$v.UpdataForm.$touch();
      if (this.$v.UpdataForm.$anyError) {
        return;
      }
      console.log("this.UpdataForm: %O", this.UpdataForm);
      let postBody = Object.keys(this.UpdataForm)
        .map((key) => {
          return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.UpdataForm[key])
          );
        })
        .join("&");
      let result = await fetch("/api/Upgoods", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        body: postBody
      }).then((res) => res.json());
      if (!this.$v.UpdataForm.$anyError) {
        alert("添加商品成功");
        window.location.href = "/admin/goods";
      }
    }
  }
};
</script>


<style lang="less" scoped>
.container-fluid {
  width: 700px;
  height: 500px;
  margin: 0px auto 0 150px;
  // background-color: blueviolet;
}
.my-1 {
  margin-top: 10px !important;
}
.btn {
  margin: 20px auto auto 220px;
  width: 112px;
  height: 40px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.b-col{
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}
</style>