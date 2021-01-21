<template>
   <b-form @submit.stop.prevent="OnSubmit">
    <b-row cols="12">
      <b-col>
        <b-form-group label="显示昵称" label-align-sm="middle" label-cols-xl="2">
          <b-form-input
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('pl_name')"
            v-model="$v.UpdataForm.pl_name.$model"
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
        <b-form-group label="显示头像" label-align-sm="middle" label-cols-xl="2" description = "/images/头像/头像1.png">
          <b-form-input
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('pl_image')"
            v-model="$v.UpdataForm.pl_image.$model"
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
          label="评论内容"
          label-align-sm="middle"
          label-cols-xl="2"
        >
          <b-form-input
            aria-describedby="input-signin-region-feedback"
            :state="validateSigninState('pl_text')"
            v-model="$v.UpdataForm.pl_text.$model"
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
        <b-button type="submit" block variant="primary">发表</b-button>
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
        pl_name: null,
        pl_image: null,
        pl_text: null,
      },
    };
  },
  validations: {
    UpdataForm: {
      pl_name: {
        required,
        // // 特殊判断
        // isUnique(value) {
        //   // 检查用户名是否有 非法字符
        //   let reg = new RegExp("[^a-zA-Z0-9]", "i");
        //   return !reg.test(value);
        // }
      },
      pl_image: {
        required,
      },
      pl_text: {
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
      let result = await fetch("/api/Uppl", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
       if (!this.$v.UpdataForm.$anyError) {
        alert("发表评论成功！");
        // window.location.href = `/api/goods/${id}`;
        window.location.href = "/goods";
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