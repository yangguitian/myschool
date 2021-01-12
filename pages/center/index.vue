<template>
  <b-form @submit.stop.prevent="OnSubmit">
    <b-row cols="12">
      <b-col>
        <b-form-group label="头像" label-align-sm="middle" label-cols-xl="2">
          <div class="touxiang">
            <img src="/images/头像/头像1.png" alt="" />
          </div>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col>
        <b-form-group label="用户名" label-align-sm="middle" label-cols-xl="2">
          <b-form-input
            placeholder=""
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
        <b-form-group
          label="真实姓名"
          label-align-sm="middle"
          label-cols-xl="2"
        >
          <b-form-input
            placeholder=""
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
        <b-form-group label="学校" label-align-sm="middle" label-cols-xl="2">
          <b-form-input
            placeholder=""
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
      <b-col>
        <b-form-group label="性别" label-align-sm="middle" label-cols-xl="2">
          <b-form-radio-group
            v-model="state"
            aria-controls="ex-disabled-readonly"
          >
            <b-form-radio value="nan">男</b-form-radio>
            <b-form-radio value="nv">女</b-form-radio>
            <b-form-radio value="bm">保密</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col>
        <b-form-group label="毕业年份" label-align-sm="middle" label-cols-xl="2">
         <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
          <b-form-invalid-feedback id="input-signin-region-feedback">
            不能为空！
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row cols="12">
      <b-col>
        <b-form-group
          label="个性签名"
          label-align-sm="middle"
          label-cols-xl="2"
        >
          <b-form-textarea
            id="textarea-small"
            size="sm"
            placeholder=""
          ></b-form-textarea>
          <b-form-invalid-feedback id="input-signin-region-feedback">
            不能为空！
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row cols="12">
        <b-col cols="2"></b-col>
      <b-col cols="6">
        <b-button type="submit" block variant="primary">提交</b-button>
      </b-col>
      <b-col cols="6">
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
  layout: "center",
  mixins: [validationMixin],
  data() {
    return {
      UpdataForm: {
        schools_name: null,
        schools_xingming: null,
        schools_xianxi: null,
        // goods_wx,tel,QQ不用
      },
      state: 'bm',
      value: '',
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
.touxiang {
  background-color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.touxiang img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
.form-control {
  width: 40%;
}
.col-6 {
    max-width: 17%;
}
</style>