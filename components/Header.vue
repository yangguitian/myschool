<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="white">
      <div class="img">
        <a href="/"><img src="/images/logo1.png" alt="" /></a>
      </div>
      <div class="fl">
        <b-navbar-nav>
          <b-nav-item href="/">首页</b-nav-item>
          <b-nav-item href="/goods">二手</b-nav-item>
          <b-nav-item>求购</b-nav-item>
          <b-nav-item href="/school">切换学校</b-nav-item>
          <b-nav-item>校园动态</b-nav-item>
          <b-nav-item-dropdown text="发布" left>
            <b-dropdown-item href="/release_good" class="fabu">
              <a href="/release_good">
                <a href="/release_good"><img src="/images/发布商品.png" /></a>
                <a href="/release_good"><span>发布商品</span></a>
              </a>
            </b-dropdown-item>
            <b-dropdown-item href="/release_buy" class="fabu">
              <a href="/release_buy">
                <a href="/release_buy"><img src="/images/发布求购.png" /></a>
                <a href="/release_buy"><span>发布求购</span></a>
              </a>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="更多" left>
            <b-dropdown-item href="#">兼职</b-dropdown-item>
            <b-dropdown-item href="#">优惠券</b-dropdown-item>
            <b-dropdown-item href="#">加入我们</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
      <div class="nav-right fr">
        <b-nav-item-dropdown right v-if="user" class="px-3 col-auto">
          <!-- Using 'button-content' slot -->
          <!-- 预留给登陆用的用户名显示插槽 -->
          <span class="img-sapn">
            <a href="/user_info"><img src="/images/touxiang1.png" alt="" /></a>
          </span>
          <template v-slot:button-content>{{ user.nickName }}</template>
          <b-dropdown-item
            v-for="item in userMenu"
            :key="item.id"
            :to="item.url"
            >{{ item.name }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-navbar-nav right v-else class="px-3 col-auto">
          <b-nav-item to="/account/login">登录</b-nav-item>
          <b-nav-item to="/account/signin">注册</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      // return this.$store.state.auth.user;
    },
    menu() {
      // return this.$store.state.global.menu;
    },
    userMenu() {
      if (this.user && this.user.userMenu) {
        let path = this.$route.path;
        console.log(`path: ${path}`);
        let currentMenu = this.user.userMenu[path];
        if (!currentMenu) {
          currentMenu = this.user.userMenu["default"];
          console.log("currentMenu: %O", currentMenu);
        }
        return currentMenu;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  min-width: 1200px;
  height: 64px;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
}
.img {
  margin: 0 40px 0 20px;
  width: 140px;
  height: 64px;
  background-color: #fff;
}
.img a {
  display: block;
  width: 100%;
  height: 100%;
}
.img a img {
  margin: 10px 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
// .navbar {
// }
.nav-item {
  font-size: 18px;
  margin: 0 10px;
}
.nav-link {
  color: #4d555d !important;
}
.nav-link span {
  color: #4d555d !important;
}
.dropdown-menu {
  width: 30px;
}
.nav-right {
  display: flex;
  vertical-align: middle;
  right: 100px;
  position: absolute;
  // background-color: rgb(228, 178, 178);
  width: 200px;
  height: 64px;
  padding: 10.5px 0;
}
.img-sapn {
  vertical-align: bottom;
  float: left;
  display: inline-block;
  width: 43px;
  height: 43px;
}
.img-sapn img {
  border-radius: 50%;
  float: left;
  height: 100%;
}
.number {
  line-height: 43px;
  margin: 0 30px 0 5px;
  float: left;
  display: inline-block;
}
.tuichu a {
  text-decoration: none;
  color: #4d555d;
  line-height: 43px;
}
// .fabu {
// }
.fabu img {
  width: 45px;
  height: 45px;
}
.fabu span {
  padding: 0 5px;
  text-decoration: none;
  color: #000;
}
.dropdown-menu {
  margin: 0.6rem 0 0;
}
</style>