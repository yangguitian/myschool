<template>
    <div id="goTop">
        <div class="goTop" v-show="goTopShow" @click="goTop">
            <b-icon icon="arrow-up-circle" scale="2" variant="danger"></b-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: "goTop",
    data() {
        return {
            scrollTop: "",
            goTopShow: false
        };
    },
    watch: {
        scrollTop(val) {
            if (this.scrollTop > 500) {
                this.goTopShow = true;
            } else {
                this.goTopShow = false;
            }
        }
    },
    methods: {
        handleScroll() {
            this.scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (this.scrollTop > 500) {
                this.goTopShow = true;
            }
        },
        goTop() {
            let timer = null,
                _that = this;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn() {
                if (_that.scrollTop > 0) {
                    _that.scrollTop -= 250;
                    document.body.scrollTop = document.documentElement.scrollTop =
                        _that.scrollTop;
                    timer = requestAnimationFrame(fn);
                } else {
                    cancelAnimationFrame(timer);
                    _that.goTopShow = false;
                }
            });
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

<style lang="less" scoped>
.goTop {
    position: fixed;
    right:73px;
    bottom: 270px;
    cursor: pointer;
}
.goTop img{
    float: right;
    width:80px;
    height: 80px;
}
</style>

​