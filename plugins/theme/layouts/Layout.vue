<template>
  <div>
    <Content />
    <template v-for="item of pages" :key="item.key">
      <article>
        <h2>{{ item.title }}</h2>
      </article>
    </template>
  </div>
</template>
<script setup>
import { usePagesData } from '@vuepress/client'
import { ref } from 'vue';


// 获取pages
function getPages(params) {
  const tempPages = usePagesData();
  return Promise.all(Object.values(tempPages.value).reverse().map(f => f()))
}
const pages = ref([])
getPages().then(data => {
  pages.value = data;
  console.log(data)
})



</script>