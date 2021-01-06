<template>
 <div>
     <Header />
     <div class="heart">
         <div class="heart-top">
             <div class="menu"></div>
             <div class="right-box">
                 <div class="carousel-top"></div>
                 <div class="carousel-button"></div>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
body {
    background-color: #f8f8f9;
}
.heart {
    margin: 0 auto;
    width: 1200px;
    height: 2000px;
    
    background-color: rgb(233, 236, 187);
}
.heart-top {
    margin: 30px auto;
    width: 100%;
    height: 440px;
    overflow: hidden;
    border-radius: 8px;
    position: relative;
    background-color: #fff;
    box-shadow: 0 6px 15px 0 rgba(7, 17, 27, 0.158);
    // background-color: rgb(145, 226, 165);
}
.heart-top .menu {
    float: left;
    width: 180px;
    height: 440px;
    background-color: rgb(75, 118, 199);
}
.heart-top .right-box {
    float: left;
    width: 1020px;
    height: 440px;
}
.heart-top .right-box .carousel-top {
    width: 1020px;
    height: 360px;
    background-color: rgb(185, 59, 59);
}
.heart-top .right-box .carousel-button {
    width: 1020px;
    height: 80px;
    background-color: rgb(216, 41, 120);
}
</style>