<template>
  <div>
      <div
      class="yyy d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2"><Back />编辑新闻</h1>
    </div>
    <b-container fluid>
      <b-form @submit.stop.prevent="OnSubmit">
        <b-row class="my-1">
          <b-col>
            <!-- id name source browse content date images -->
            <b-form-group
              hidden
              label="id"
              label-align-sm="right"
              label-cols-xl="4"
            >
              <b-form-input
                v-model="Newsobj.news_id"
                aria-describedby="input-signin-region-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="标题" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Newsobj.news_name.$model"
                :state="validateSigninState('news_name')"
                aria-describedby="input-name-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-name-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="内容" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Newsobj.news_desc.$model"
                :state="validateSigninState('news_desc')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
                不能为空！
              </b-form-invalid-feedback>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group label="插图" label-align-sm="right" label-cols-xl="4">
              <b-form-input
                v-model="$v.Newsobj.news_image.$model"
                :state="validateSigninState('news_image')"
                aria-describedby="input-range-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
              <b-form-invalid-feedback id="input-range-feedback">
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
  numeric, //仅数字
  required, //非空
  minLength, //最小长度
  maxLength, //最大长度
  email, //邮箱
  alpha, //仅接受字母字符
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    Newsobj: {
      news_name: {
        required,
      },
      news_desc: {
        required,
      },
      news_image: {
        required,
      },
    },
  },
  beforeMount() {
    console.log(this.$route.params.id);
    
    // 发送这个id 获取要编辑的数据
  },
  computed: {
    Newsobj: {
      get() {
        return this.$store.state.editnews.Newsobj;
      },
    },
  },
  methods: {
    validateSigninState(name) {
      const { $dirty, $error } = this.$v.Newsobj[name];
      return $dirty ? !$error : null;
    },
    // 编辑完提交
    async OnSubmit() {
      this.$v.Newsobj.$touch();
      if (this.$v.Newsobj.$anyError) {
        return;
      }
      let postBody = Object.keys(this.Newsobj)
        .map((key) => {
          return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.Newsobj[key])
          );
        })
        .join("&");
      let result = await fetch("/api/editnews/edit", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
      if (!this.$v.Newsobj.$anyError) {
        alert("修改成功！");
        window.location.href = "/Admin/news";
      }
    },
  },
  layout: "admin",
};
</script>
<style lang="less" scoped>
.yyy {
  margin-left: 346px;
}
.yyy .h2 {
  font-size: 23px;
}
.container-fluid {
  width: 700px;
  height: 500px;
  margin: 20px auto 0 500px;
  padding-top: 30px;
  // background-color: blueviolet;
}
.my-1 {
  margin-top: 10px !important;
}
.btn {
  margin: 50px auto auto 220px;
  width: 100px;
  height: 40px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.b-col {
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}
</style>