<template>
  <div>
    <b-container fluid>
       <b-form @submit.stop.prevent="OnSubmit">
      <b-row class="my-1">
        <b-col >
          <b-form-group label="标题" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('news_name')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.news_name.$model"
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
          <b-form-group label="内容" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('news_desc')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.news_desc.$model"
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
          <b-form-group label="图片上传" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('news_image')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.news_image.$model"
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
        news_name: null,
        news_desc: null,
        news_image: null,
      }
    };
  },
  validations: {
    UpdataForm: {
      news_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(90),
      },
      news_desc: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(152)
      },
      news_image: {
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
      let result = await fetch("/api/Upnews", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        body: postBody
      }).then((res) => res.json());
      if (!this.$v.UpdataForm.$anyError) {
        alert("用户添加成功！请耐心等待处理");
        window.location.href = "/admin/news";
      }
    }
  }
};
</script>


<style lang="less" scoped>
.container-fluid {
  width: 700px;
  height: 500px;
  margin: -50px auto 0 50px;
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