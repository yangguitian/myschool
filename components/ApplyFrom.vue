<template>
  <b-form @submit.stop.prevent="OnSubmit">
    <b-row cols="12">
      <b-col>
        <b-form-group label="学校" label-align-sm="middle" label-cols-xl="2">
          <b-form-input
            placeholder="填写完整学校名称"
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('schools_name')"
            v-model="$v.UpdataForm.schools_name.$model"
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
        <b-form-group label="姓名" label-align-sm="middle" label-cols-xl="2">
          <b-form-input
            placeholder="填写完整您的名称"
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('schools_xingming')"
            v-model="$v.UpdataForm.schools_xingming.$model"
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
          label="手机号"
          label-align-sm="middle"
          label-cols-xl="2"
        >
          <b-form-input
            placeholder="微信号，手机号，QQ选填一项"
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('schools_xianxi')"
            v-model="$v.UpdataForm.schools_xianxi.$model"
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
      <b-col cols="2"></b-col>
      <b-col cols="5">
        <b-button type="submit" block variant="primary">申请</b-button>
      </b-col>
      <b-col cols="5">
        <b-button block type="reset">取消</b-button>
      </b-col>
    </b-row>
  </b-form>
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
        schools_name: null,
        schools_xingming: null,
        schools_xianxi: null,
        // goods_wx,tel,QQ不用
      },
    };
  },
  validations: {
    UpdataForm: {
      schools_name: {
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
      schools_xingming: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(32),
      },
      schools_xianxi: {
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
.btn {
  width: 100%;
}
</style>