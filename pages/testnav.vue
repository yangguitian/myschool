<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand to="/"
        ><img src="/images/logo1.png" alt=""
      /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- 会塌陷隐藏的菜单集合 -->
      <b-collapse id="nav-collapse" is-nav>
        <!-- 真正导航菜单 -->
        <b-navbar-nav class="mx-4">
          <!-- 导航菜单的选项 -->
          <!-- 使用 布尔值属性 disabled 可以禁用 菜单的点击 -->
          <b-nav-item href="/">首页</b-nav-item>
          <b-nav-item href="/goods">二手</b-nav-item>
          <b-nav-item>求购</b-nav-item>
          <b-nav-item href="/school">切换学校</b-nav-item>
          <b-nav-item>校园动态</b-nav-item>
          <!-- <b-nav-item-dropdown text="发布" left>
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
          </b-nav-item-dropdown> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- bootstrap 是直接使用 class 名称来应用已经定好的CSS样式 -->
        <!-- class ml-auto 的效果是元素左边的空余是自动，即居右  -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-if="search" class="col-auto">
            <b-form-input
              class="mx-2 form-control-dark col-auto"
              name="search.name"
              :placeholder="search.placeholder"
            ></b-form-input>
            <b-button class="my-sm-0" type="submit">{{
              search.buttonText
            }}</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right v-if="user" class="px-3 col-auto">
            <!-- Using 'button-content' slot -->
            <!-- 预留给登陆用的用户名显示插槽 -->
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
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  props: {
    search: {
      type: Object,
      default() {
        return null;
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    // user() {
    //   return this.$store.state.auth.user;
    // },
    // menu() {
    //   return this.$store.state.global.menu;
    // },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  min-width: 1200px;
  height: 64px;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
}
// .container {
// }
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
  width: 100%;
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