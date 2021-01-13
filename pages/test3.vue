<template>
      <div class="banner" id="banner_1">
        <div class="container">
            <img src="/images/商品/内存条1.jpg">
        </div>
        <div class="container">
            <img src="/images/商品/内存条2.jpg">
        </div>
        <div class="container">
            <img src="/images/商品/内存条3.jpg">
        </div>
        <div class="container">
            <img src="/images/商品/内存条1.jpg">
        </div>
        <div class="container">
            <img src="/images/商品/内存条1.jpg">
        </div>
        <div class="radio-container">
            <div class="radio">
                <input type="radio" name="banner-radio" id="banner-radio-a" checked>
                <label for="banner-radio-a"><img src="/images/商品/内存条1.jpg"></label>
                <input type="radio" name="banner-radio" id="banner-radio-b">
                <label for="banner-radio-b"><img src="/images/商品/内存条2.jpg"></label>
                <input type="radio" name="banner-radio" id="banner-radio-c">
                <label for="banner-radio-c"><img src="/images/商品/内存条3.jpg"></label>
                <input type="radio" name="banner-radio" id="banner-radio-d">
                <label for="banner-radio-d"><img src="/images/商品/内存条1.jpg"></label>
                <input type="radio" name="banner-radio" id="banner-radio-e">
                <label for="banner-radio-e"><img src="/images/商品/内存条1.jpg"></label>
            </div>
        </div>
        <div class="control-container">
            <div class="control pre" id="pre"></div>
            <div class="control next" id="next"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    }
}
</script>
<style lang="less" scoped>
@import '~assets/styles/Y-最后一个轮播图.css';
</style>