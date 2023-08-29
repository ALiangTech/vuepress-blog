<template>
  <section>
    <div class="h-sm header">
      <AHeader></AHeader>
    </div>
    <div>
      <AArticels></AArticels>
    </div>
  </section>
</template>
<script setup>
import AArticels from './../components/a-articles.vue'
import AHeader from './../components/a-header.vue'

</script>
<style scoped>
.header {
  background-image: url('https://i.postimg.cc/ZKWXFFjV/R.jpg');
  background-size: cover;
}
</style>