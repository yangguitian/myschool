<template>
  <div class="bgc">
    <Header />
    <div class="heart">
      <div class="heart-left">
        <div class="container-fluid">
          <div class="row">
            <nav id="sidebarMenu">
              <div class="sidebar-sticky">
                <b-nav vertical class="pt-4">
                  <b-nav-item class="one">个人中心</b-nav-item>
                  <b-nav-item to="/center/"
                    ><b-icon icon="toggles"></b-icon> 我的资料</b-nav-item
                  >
                  <b-nav-item to="/center/mygoods"
                    ><b-icon icon="toggles"></b-icon> 我的商品</b-nav-item
                  >
                  <b-nav-item to="/center/mybuy"
                    ><b-icon icon="toggles"></b-icon> 我的求购</b-nav-item
                  >
                  <b-nav-item to="/center/mycollection"
                    ><b-icon icon="toggles"></b-icon> 我的收藏</b-nav-item
                  >
                  <b-nav-item to="/center/renzheng"
                    ><b-icon icon="toggles"></b-icon> 我要认证</b-nav-item
                  >
                </b-nav>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="heart-right">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="less" scoped>
* {
  color: #515a6e;
}
.bgc {
  background-color: #f8f8f9;
}
.heart {
  width: 1000px;
  height: 600px;
  margin: 30px auto;
  background-color: #fff;
}
.heart-left {
  float: left;
  width: 240px;
  height: 600px;
  border-right: 1px solid #dcdee2;
}
.nav {
  text-align: center;
}
.heart-right {
  float: right;
  min-height: 600px;
  width: 760px;
  height: 600px;
  padding: 30px;
  background-color: #fff;
  padding-left: 30px;
}
#sidebarMenu {
  width: 100%;
}
.one .nav-link {
  color: #999;
  font-size: 20px;
}
.nav-link {
  color: #515a6e;
  height: 50px;
  font-size: 17px;
  font-weight: 500;
  line-height: 34px;
}
.nav-item:hover {
  font-weight: bolder;
  border-right: 2px solid #2d8cf0;
}
.nav-link.nuxt-link-exact-active {
  font-weight: bolder;
  border-right: 2px solid #2d8cf0;
  color: #2d8cf0;
}
.nav-item:hover .nav-link {
  color: #2d8cf0;
}
</style>