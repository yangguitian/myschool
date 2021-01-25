<template>
  <b-form @submit.stop.prevent="OnSubmit">
    <b-row cols="12">
      <b-col>
        <b-form-group label="学校" label-align-sm="middle" label-cols-xl="2">
          <b-form-input
            placeholder="填写完整学校名称"
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('school_name')"
            v-model="$v.UpdataForm.school_name.$model"
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
            :state="validateSigninState('school_xm')"
            v-model="$v.UpdataForm.school_xm.$model"
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
            placeholder="填写正在使用的手机号"
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('school_tel')"
            v-model="$v.UpdataForm.school_tel.$model"
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
        school_name: null,
        school_xm: null,
        school_tel: null,
      },
    };
  },
  validations: {
    UpdataForm: {
      school_name: {
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
      school_xm: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(32),
      },
      school_tel: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
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
      let result = await fetch("/api/Upschool", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
      if (!this.$v.UpdataForm.$anyError) {
        alert("学校申请成功！");
        window.location.href = "/school";
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