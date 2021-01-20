
<template>
      <b-icon style="font-size:30px;color:red;margin-right:20px;" @click="prev" icon="arrow-left"></b-icon>
</template>

<script>
export default {
  methods: {
    prev() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" scoped>
</style>