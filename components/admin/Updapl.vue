<template>
  <div>
    <b-container fluid>
       <b-form @submit.stop.prevent="OnSubmit">
      <b-row class="my-1">
        <b-col >
          <b-form-group label="昵称" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('pl_name')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.pl_name.$model"
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
          <b-form-group label="头像" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('pl_image')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.pl_image.$model"
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
          <b-form-group label="评论内容" label-align-sm="right" label-cols-xl="4">
            <b-form-input
              aria-describedby="input-signin-region-feedback"
              :state="validateSigninState('pl_text')"
              class="b-form-input-1"
              v-model="$v.UpdataForm.pl_text.$model"
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
        pl_name: null,
        pl_image: null,
        pl_text: null,
      }
    };
  },
  validations: {
    UpdataForm: {
      pl_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(20),
      },
      pl_image: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(52)
      },
      pl_text: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(50)
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
      let result = await fetch("/api/Uppl", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        body: postBody
      }).then((res) => res.json());
      if (!this.$v.UpdataForm.$anyError) {
        window.location.href = "/admin/pl";
      }
    }
  }
};
</script>


<style lang="less" scoped>
.container-fluid {
  width: 700px;
  height: 500px;
  margin: 0px auto 0 50px;
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