<template>
  <section>
    <AHeader></AHeader>
    <ABg></ABg>
    <AArticels></AArticels>
  </section>
</template>
<script setup>
import AArticels from './../components/a-articles.vue'
import AHeader from './../components/a-header.vue'
import ABg from './../components/a-bg.vue'

</script>
<style scoped>
.header {
  background-image: url('https://i.postimg.cc/ZKWXFFjV/R.jpg');
  background-size: cover;
}
</style>