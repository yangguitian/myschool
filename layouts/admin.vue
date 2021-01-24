<template>
  <div>
    <Header1/>
    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-3 col-xl-2 d-md-block bg-light sidebar collapse"
        >
          <div class="sidebar-sticky">
            <b-nav vertical class="pt-4">
              <b-nav-item to="/admin/user">用户管理</b-nav-item>
              <b-nav-item to="/admin/goods">商品管理</b-nav-item>
              <b-nav-item to="/admin/buy">求购管理</b-nav-item>
              <b-nav-item to="/admin/pl">评论管理</b-nav-item>
              <b-nav-item to="/admin/school">学校申请</b-nav-item>
              <b-nav-item to="/admin/news">新闻管理</b-nav-item>
            </b-nav>
          </div>
        </nav>
        <Nuxt />
        <Top />
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
body {
  background-color: rgb(204, 52, 52);
}
.container-fluid {
  height: 879px;
  background-color: rgb(114, 40, 40);
}
.row {
  height: 100%;
  background-color: #f8f9fa;
}
// .col-xl-2 {
//   max
// }
.sidebar .sidebar-sticky .nav-link.nuxt-link-exact-active {
  background-color: #19202a;
  font-weight: 600;
}
.nav-link {
  text-align: center;
  color: #b9bab5;
  font-size: 18px;
  height: 60px;
  line-height: 44px;
  border-bottom: 1px solid #666;
  background-color: #29333f;
}
.nav-link:hover {
  background-color: #29333f;
  color: #b9bab5;
}
.sidebar-sticky {
  background-color: rgb(107, 134, 34);
}
.bg-light {
  position: fixed;
  height: 879px;
  background-color: #29333f !important;
  padding: 0;
}
.pt-4{
  background-color: #29333f;
}
</style>