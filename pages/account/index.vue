<template>
  <b-container class="account-container">
    <b-card no-body class="account-box">
      <b-tabs card justified>
        <b-tab title="登录" class="pl-5 pr-5" active>
          <Login />
        </b-tab>
        <b-tab title="注册" class="pl-5 pr-5">
          <Signin />
        </b-tab>
      </b-tabs>
    </b-card> 
  </b-container>
</template>
<script>
export default {
  layout: "hf",
};
</script>

