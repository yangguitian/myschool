<template>
  <div>
    <Header/>
    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-3 col-xl-2 d-md-block bg-light sidebar collapse"
        >
          <div class="sidebar-sticky">
            <b-nav vertical class="pt-4">
              <b-nav-item to="/admin/user">用户管理</b-nav-item>
              <b-nav-item to="/admin/addatasbank">常见问题库</b-nav-item>
              <b-nav-item to="/admin/adsupplier">供应商管理</b-nav-item>
              <b-nav-item to="/admin/adnewpro">申请提交修改</b-nav-item>

              <b-nav-item to="/admin/adanli">案例修改</b-nav-item>
              <b-nav-item to="/admin/adrankings">巡检修改</b-nav-item>
            </b-nav>
          </div>
        </nav>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
};
</script>

<style lang="less" scoped>

</style>