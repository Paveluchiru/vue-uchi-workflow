<template>
  <div class="app">
    <Test/>
    <div class="example">{{ translations.tutor_1.text }}</div>
    asdasdasd
    <div class="example" v-html="translations.tutor_1.html"></div>
  </div>
</template>

<script>
import Test from "./Test";

export default {
  name: "app",
  components: { Test }
};
</script>

<style lang="scss" scoped>
.app {
  padding-top: 50px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
</style>
