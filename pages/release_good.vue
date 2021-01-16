<template>
  <div>
    <Xiaoyuanershou />
    <div class="inner">
      <div class="box">
        <h4 class="title">发布商品</h4>
        <b-container fluid>
          <b-form @submit.stop.prevent="OnSubmit">
            <b-row cols="12">
              <b-col>
                <b-form-group
                  label="标题"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="很重要，显示在列表页"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_name')"
                    v-model="$v.UpgoodsForm.goods_name.$model"
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
                    :state="validateSigninState('goods_desc')"
                    class="b-form-input-1"
                    v-model="$v.UpgoodsForm.goods_desc.$model"
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
                    v-model="$v.UpgoodsForm.goods_price.$model"
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
                    :state="validateSigninState('goods_oldprice')"
                    class="b-form-input-1"
                    v-model="$v.UpgoodsForm.goods_oldprice.$model"
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
                   <b-form-input
                    placeholder="填写分类"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('classify_id')"
                    class="b-form-input-1"
                    v-model="$v.UpgoodsForm.classify_id.$model"
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
                  label="邮费"
                  label-align-sm="middle"
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="填写数字"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_postage')"
                    class="b-form-input-1"
                    v-model="$v.UpgoodsForm.goods_postage.$model"
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
                  label-cols-xl="1"
                >
                  <b-form-input
                    placeholder="填写有效的手机号"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_tel')"
                    class="b-form-input-1"
                    v-model="$v.UpgoodsForm.goods_tel.$model"
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
                  <b-form-input
                    placeholder="图片地址"
                    aria-describedby="input-signin-region-feedback"
                    :state="validateSigninState('goods_image')"
                    class="b-form-input-1"
                    v-model="$v.UpgoodsForm.goods_image.$model"
                  >
                  </b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row cols="12">
              <b-col cols="6">
                <b-button type="submit" block variant="primary">发布</b-button>
              </b-col>
              <b-col cols="6">
                <b-button block type="reset">取消</b-button>
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
  layout: "hf",
  mixins: [validationMixin],
  data() {
    return {
      UpgoodsForm: {
        goods_name: null,
        goods_desc: null,
        goods_price: null,
        goods_oldprice: null,
        classify_id: null,
        goods_postage: null,
        goods_tel: null,
        goods_image: null,
        // goods_wx,tel,QQ不用
      },
    };
  },
  validations: {
    UpgoodsForm: {
      goods_name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16),
      },
      goods_desc: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(32),
      },
      // 标价
      goods_price: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16),
      },
      goods_oldprice: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16),
      },
      classify_id: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(16),
      },
      goods_postage: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16),
      },
      goods_tel: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(16),
      },
      goods_image: {
        required,
      },
    },
  },
  methods: {
    validateSigninState(name) {
      const { $dirty, $error } = this.$v.UpgoodsForm[name];
      return $dirty ? !$error : null;
    },
    async OnSubmit() {
      this.$v.UpgoodsForm.$touch();
      if (this.$v.UpgoodsForm.$anyError) {
        return;
      }
      console.log("this.UpgoodsForm: %O", this.UpgoodsForm);
      let postBody = Object.keys(this.UpgoodsForm)
        .map((key) => {
          return (
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(this.UpgoodsForm[key])
          );
        })
        .join("&");
      let result = await fetch("/api/Upgoods", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        body: postBody,
      }).then((res) => res.json());
      if (!this.$v.UpgoodsForm.$anyError) {
        alert("用户添加成功！请耐心等待处理");
        window.location.href = "/goods";
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