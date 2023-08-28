<template>
  <div>
    <div>kkk</div>
    <Content />
  </div>
</template>
<script setup>
import { usePagesData } from '@vuepress/client'
import { onMounted } from 'vue';

const pages = usePagesData();
onMounted(() => {
  console.log(Object.values(pages.value).forEach(f => {
    console.log(f().then(data => {
      console.log(data)
    }), 'f')
  }))
})
</script>