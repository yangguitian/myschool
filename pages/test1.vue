<template>
  <div>
    <div class="submenu">
      <ul>
        <li>
          <a href="#">乡村爱情11</a>
          <div class="f"></div>
        </li>
        <li>
          <a href="#">乡村爱情111</a>
          <div class="f"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.submenu {
  width: 180px;
  height: 440px;
  background-color: #4e4c5b;
}
.submenu ul {
  background-color: #ba9481;
}
.submenu ul li {
    width: 180px;
  text-align: center;
  list-style: none;
  z-index: 2;
}
.submenu ul li a {
  display: inline-block;
  text-decoration: none;
  width: 180px;
  height: 50px;
  line-height: 42px;
  color: #593e37;
}
.submenu ul li a:hover {
  background-color: #aeb7c6;
}
.submenu ul li:hover .f {
  opacity: 1;
  transition: opacity 0.4s ease-in-out;

  /* 显示盒子 */
  /* display: block; */
}
.submenu ul li .f {
  opacity: 0;
  /* 隐藏盒子 */
  /* display: none; */
  /* clear: both; */
  position: absolute;
  top: 0px;
  left: 180px;
  width: 700px;
  height: 440px;
  background-color: rgba(0, 0, 0, 0.692);
  z-index: 10;
}
</style>