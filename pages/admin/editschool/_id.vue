<template>
  <div>
    <div
      class="yyy d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2"><Back />编辑申请</h1>
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
                v-model="Schoolobj.school_id"
                aria-describedby="input-signin-region-feedback"
                class="b-form-input-1"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col>
            <b-form-group
              label="学校名称"
              label-align-sm="right"
              label-cols-xl="4"
            >
              <b-form-input
                v-model="$v.Schoolobj.school_name.$model"
                :state="validateSigninState('school_name')"
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
            <b-form-group
              label="申请人姓名"
              label-align-sm="right"
              label-cols-xl="4"
            >
              <b-form-input
                v-model="$v.Schoolobj.school_xm.$model"
                :state="validateSigninState('school_xm')"
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
            <b-form-group
              label="联系电话"
              label-align-sm="right"
              label-cols-xl="4"
            >
              <b-form-input
                v-model="$v.Schoolobj.school_tel.$model"
                :state="validateSigninState('school_tel')"
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
    Schoolobj: {
      school_name: {
        required,
      },
      school_xm: {
        required,
      },
      school_tel: {
        required,
      },
    },
  },
  beforeMount() {
    console.log(this.$route.params.id);
    // debugger
    // 发送这个id 获取要编辑的数据
  },
  computed: {
    Schoolobj: {
      get() {
        return this.$store.state.editschool.Schoolobj;
      },
    },
  },
  methods: {
    validateSigninState(name) {
      // debugger
      const { $dirty, $error } = this.$v.Schoolobj[name];
      return $dirty ? !$error : null;
    },
    // 编辑完提交
    async OnSubmit() {
      this.$v.Schoolobj.$touch();
      if (this.$v.Schoolobj.$anyError) {
        return;
      }
      let postBody = Object.keys(this.Schoolobj)
        .map((key) => {
          return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.Schoolobj[key])
          );
        })
        .join("&");
      let result = await fetch("/api/editschool/edit", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
      if (!this.$v.Schoolobj.$anyError) {
        alert("修改成功！");
        window.location.href = "/Admin/school";
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