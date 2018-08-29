<template>
  <div class="bobo">{{ hello }}</div>
</template>
<script>
export default {
  data: () => ({
    hello: "hi man!"
  })
};
</script>

<style lang="scss" scoped>
.bobo {
  background: red;
}
</style>
