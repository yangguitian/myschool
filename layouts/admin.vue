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
              <b-nav-item to="/admin/addatasbank">商品管理</b-nav-item>
              <b-nav-item to="/admin/adsupplier">评论管理</b-nav-item>
              <b-nav-item to="/admin/adnewpro">学校申请</b-nav-item>
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
  // layout: "admin",
};
</script>

<style lang="less" scoped>
.container-fluid {
  height: 900px;
  background-color: rgb(114, 40, 40);
}
.row {
  height: 900px;
  background-color: rgb(90, 69, 149);
}
.nav-link {
  text-align: center;
  background-color: rgb(74, 173, 79);
}
.nav-link:hover {
  background-color: rgb(139, 44, 44);
  color: #fff;
}
.sidebar-sticky {
  background-color: rgb(60, 34, 134);
}
.bg-light {
  padding: 0;
}
</style>