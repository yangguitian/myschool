<template>
  <div>
    <b-container fluid>
       <b-form @submit.stop.prevent="OnSubmit">
      <b-row class="my-1">
        <b-col >
          <b-form-group label="用户名" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('username')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.username.$model"
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
          <b-form-group label="密码" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('password')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.password.$model"
            >
            </b-form-input>
            <b-form-invalid-feedback id="input-signin-region-feedback">
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
        username: null,
        password: null,
      }
    };
  },
  validations: {
    UpdataForm: {
      username: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16),
        // // 特殊判断
        // isUnique(value) {
        //   // 检查用户名是否有 非法字符
        //   let reg = new RegExp("[^a-zA-Z0-9]", "i");
        //   return !reg.test(value);
        // }
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(32)
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
      let result = await fetch("/api/Upuser", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        body: postBody
      }).then((res) => res.json());
      if (!this.$v.UpdataForm.$anyError) {
        alert("用户添加成功！请耐心等待处理");
        window.location.href = "/admin/user";
      }
    }
  }
};
</script>


<style lang="less" scoped>
.container-fluid {
  width: 700px;
  margin: 0px auto 0 50px;
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

.b-col{
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
}
</style>