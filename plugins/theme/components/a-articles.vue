<template>
  <div>
    <template v-for="item of pages" :key="item.key">
      <article @click="gotoDetails(item.path)">
        <h2>{{ item.title }}</h2>
      </article>
    </template>
  </div>
</template>
<script setup>
import { usePagesData } from '@vuepress/client'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();
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


function gotoDetails(path) {
  router.push({ path })
}



</script>