<template>
  <div>
    <template v-for="page of pages" :key="page.key">
      <!-- @click="gotoDetails(page.path)" -->
      <div class="mb-2">
        <section class="flex h-214px bg-white">
          <div class="flex-1 p3 flex flex-col justify-between">
            <div class="text-center">
              <h3 class="m0 pb-1">{{ page.title }}</h3>
              <span class="text-neutral text-3">创建:{{ getCreateTime(page) }}</span>
            </div>
            <div class="flex-1">
              <p class="indent-3 line-clamp-3">{{ getDescription(page) }}</p>
            </div>
            <div class="text-right">
              <span class="text-neutral text-3">更新于:{{ getUpdateTime(page) }}</span>
            </div>
          </div>
        </section>
      </div>
    </template>
  </div>
</template>
<script setup>
import { usePagesData } from '@vuepress/client'
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { transformDate } from './../utils'
import ACrad from './a-card.vue'
const router = useRouter();
// 获取pages
function getPages() {
  const tempPages = usePagesData();
  return Promise.all(Object.values(tempPages.value).reverse().map(f => f()))
}
const pages = ref([])
getPages().then(data => {
  pages.value = data.filter(({ title }) => title); // 没有title的界面 不在这里展示
  console.log(data)
})


function gotoDetails(path) {
  router.push({ path })
}

function getUpdateTime(page) {
  return transformDate(page.git?.updatedTime)
}

function getCreateTime(page) {
  return transformDate(page.git?.createdTime)
}

function getCover(page) {
  return page.frontmatter.cover || 'https://th.bing.com/th/id/OIP._S9AReGNMmBZ2eGcHlSr-gAAAA?pid=ImgDet&rs=1'
}

function getDescription(page) {
  return page.frontmatter.description || ''
}


</script>