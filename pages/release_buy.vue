<template>
  <div>
    <Xiaoyuanershou />
    <div class="inner">
      <div class="box">
        <h4 class="title">发布求购</h4>
        <b-container fluid>
          <b-form @submit.stop.prevent="OnSubmit">
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="求购标题"
                  label-align-sm="middle"
                  label-cols-xl="2"
                >
                  <b-form-input
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('buy_name')"
                    v-model="$v.UpbuyForm.buy_name.$model"
                    class="b-form-input-1"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback id="input-signin-region-feedback">
                    不能为空！
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="求购描述"
                  label-align-sm="middle"
                  label-cols-xl="2"
                >
                  <b-form-input
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('buy_desc')"
                    class="b-form-input-1"
                    v-model="$v.UpbuyForm.buy_desc.$model"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback id="input-signin-region-feedback">
                    不能为空！
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="价格区间"
                  label-align-sm="middle"
                  label-cols-xl="2"
                >
                  <b-form-input
                    placeholder="数字，价格区间"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('buy_price')"
                    class="b-form-input-1"
                    v-model="$v.UpbuyForm.buy_price.$model"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback id="input-signin-region-feedback">
                    不能为空！
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="手机号"
                  label-align-sm="middle"
                  label-cols-xl="2"
                >
                  <b-form-input
                    placeholder="填写有效的手机号"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('buy_tel')"
                    class="b-form-input-1"
                    v-model="$v.UpbuyForm.buy_tel.$model"
                  >
                  </b-form-input>
                  <b-form-invalid-feedback id="input-signin-region-feedback">
                    不能为空！
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="图片上传"
                  label-align-sm="middle"
                  label-cols-xl="2"
                  description="/images/.png"
                >
                  <b-form-input
                    placeholder="图片地址"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('buy_image')"
                    class="b-form-input-1"
                    v-model="$v.UpbuyForm.buy_image.$model"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col cols="2"></b-col>
              <b-col cols="5">
                <b-button type="submit" block variant="primary">发布</b-button>
              </b-col>
              <b-col cols="5">
                <b-button block type="reset">取消</b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-container>
      </div>
    </div>
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
  sameAsPassword,
} 
from "vuelidate/lib/validators";
export default {
  middleware: "auth",
  layout: "hf",
  mixins: [validationMixin],
  data() {
    return {
      UpbuyForm: {
        buy_name: null,
        buy_desc: null,
        buy_price: null,
        buy_tel: null,
        buy_image: null,
        // buy_wx,tel,QQ不用
      },
    };
  },
  validations: {
    UpbuyForm: {
      buy_name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(70),
      },
      buy_desc: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(72),
      },
      // 标价
      buy_price: {
        required,
      },
      buy_tel: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16),
      },
      buy_image: {
        required,
      },
    },
  },
  methods: {
    validateSigninState(name) {
      const { $dirty, $error } = this.$v.UpbuyForm[name];
      return $dirty ? !$error : null;
    },
    async OnSubmit() {
      this.$v.UpbuyForm.$touch();
      if (this.$v.UpbuyForm.$anyError) {
        return;
      }
      console.log("this.UpbuyForm: %O", this.UpbuyForm);
      let postBody = Object.keys(this.UpbuyForm)
        .map((key) => {
          return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.UpbuyForm[key])
          );
        })
        .join("&");
      let result = await fetch("/api/Upbuy", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
      if (!this.$v.UpbuyForm.$anyError) {
        window.location.href = "/buy";
      }
    },
  },
};
</script>

<style lang="less" scoped>
body {
  background-color: #f8f8f8;
}
.inner {
  width: 100%;
  padding: 50px 0px;
}
.box {
  width: 800px;
  background-color: #fff;
  padding: 50px 30px;
  margin: auto;
  // background-color: rgb(255, 255, 255);
  border-radius: 6px;
  box-shadow: rgba(7, 17, 27, 0.07) 0px 4px 8px 0px;
}
.title {
  margin-bottom: 30px;
  color: rgb(51, 51, 51);
  text-align: center;
}
</style>