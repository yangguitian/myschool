<template>
  <div>
    <Header />
    <Xiaoyuanershou />
    <div class="inner">
      <div class="box">
        <h4 class="title">发布商品</h4>
        <b-container fluid>
          <b-form @submit.stop.prevent="OnSubmit">
            <b-row cols="12">
              <b-col >
                <b-form-group
                  label="标题"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="很重要，显示在列表页"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_title')"
                    v-model="$v.UpdataForm.goods_title.$model"
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
                  label="简介"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="很重要，显示在商品详情页"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_text')"
                    class="b-form-input-1"
                    v-model="$v.UpdataForm.goods_text.$model"
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
                  label="标价"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="数字，想卖的价格"
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
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="原价"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="数字，购买时的价格"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_old_price')"
                    class="b-form-input-1"
                    v-model="$v.UpdataForm.goods_old_price.$model"
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
                  label="分类"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-select
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_fenlei')"
                    class="b-form-input-1"
                    v-model="$v.UpdataForm.goods_fenlei.$model"
                    :options="options"
                  ></b-form-select>
                  <b-form-invalid-feedback id="input-signin-region-feedback">
                    不能为空！
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="邮费"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="填写数字"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_youfei')"
                    class="b-form-input-1"
                    v-model="$v.UpdataForm.goods_youfei.$model"
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
                  label="联系方式"
                  label-align-sm="middle"
                  label-cols-xl="2"
                >
                  <b-form-input
                    placeholder="联系方式:微信号，手机号，QQ选填一项"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_lianxi')"
                    class="b-form-input-1"
                    v-model="$v.UpdataForm.goods_lianxi.$model"
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
                >
                  <span style="vertical-align: middle">
                    请在上传前进行裁剪，才会不变形，更美观。</span
                  >
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col cols="6">
                <b-button type="submit" block  variant="primary">提交</b-button>
              </b-col>
              <b-col cols="6">
                <b-button block  type="reset">取消</b-button>
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
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  data() {
    return {
      UpdataForm: {
        goods_title: null,
        goods_text: null,
        goods_price: null,
        goods_old_price: null,
        goods_fenlei: null,
        goods_lianxi: null,
        // goods_wx,tel,QQ不用
      },
      options: [
        { value: null, text: "合适的分类买家能更好地找到您的商品" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  validations: {
    UpdataForm: {
      goods_title: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16),
        // // 特殊判断
        // isUnique(value) {
        //   // 检查用户名是否有 非法字符
        //   let reg = new RegExp("[^a-zA-Z0-9]", "i");
        //   return !reg.test(value);
        // }
      },
      goods_text: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(32),
      },
      // 标价
      goods_price: {
        required,
      },
      goods_old_price: {
        required,
      },
      goods_fenlei: {
        required,
      },
      goods_youfei: {
        required,
      },
      goods_lianxi: {
        required,
      },
    },
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
      let result = await fetch("/api/Updatauser", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
      if (!this.$v.UpdataForm.$anyError) {
        alert("用户添加成功！请耐心等待处理");
        window.location.href = "/admin/dashboard";
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
  height: 1000px;
  background-color: rgb(206, 175, 175);
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