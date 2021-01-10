<template>
  <b-form > 
       <b-row>
          <b-col cols="12">
            <b-form-group
              label="学校"
              label-cols-xl="2"
              label-align-sm="right"
            >
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="填写完整学校名称"
                  class="b-form-input-1"
                >
                </b-form-input>
                <b-form-invalid-feedback >
                  不能为空！
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="姓名"
              label-cols-xl="2"
              label-align-sm="right"
            >
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="填写完整您的姓名"
                  class="b-form-input-1"
                >
                </b-form-input>
                <b-form-invalid-feedback >
                  不能为空！
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="QQ"
              label-cols-xl="2"
              label-align-sm="right"
            >
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="联系方式选填一项"
                  class="b-form-input-1"
                >
                </b-form-input>
                <b-form-invalid-feedback >
                  不能为空！
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="微信"
              label-cols-xl="2"
              label-align-sm="right"
            >
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="联系方式选填一项"
                  class="b-form-input-1"
                >
                </b-form-input>
                <b-form-invalid-feedback >
                  不能为空！
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-form-group
              label="手机"
              label-cols-xl="2"
              label-align-sm="right"
            >
              <b-form-group>
                <b-form-input
                  type="text"
                  placeholder="联系方式选填一项"
                  class="b-form-input-1"
                >
                </b-form-input>
                <b-form-invalid-feedback >
                  不能为空！
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form-group>
          </b-col>
        </b-row>
         <b-row>
          <b-col cols="2"></b-col>
          <b-col cols="10">
            <b-form-group>
              <b-form-group>
               <b-button type="submit" variant="primary" >提交</b-button>
              </b-form-group>
            </b-form-group>
          </b-col>
        </b-row>
  </b-form>
</template>

<script>

</script>

<style lang="less" scoped>
.btn {

    width: 100%;
}
</style>