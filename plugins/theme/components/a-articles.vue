<template>
  <div>
    <div class="lg:w-4xl lg:ma pt-6">
      <template v-for="page of pages" :key="page.key">
        <!-- @click="gotoDetails(page.path)" -->
        <div @click="gotoDetails(page.path)" class="mb-2">
          <ACrad class="rounded-20px">
            <div class="z-1">
              <section class="flex flex-col lg:flex-row flex-items-center md:gap-4 lg:h-214px">
                <div class="h-160px w100% md:w-300px md:h-100%">
                  <img :src="getCover(page)" alt="封面" class="h100% w100%">
                </div>
                <div class="flex-1 flex flex-col flex-justify-between h-100%">
                  <div>
                    <h3 class="">{{ page.title }}</h3>
                    <p class="indent-4 line-clamp-4">{{ getDescription(page) }}</p>
                  </div>
                  <div class="flex gap-2">
                    <span class="text-neutral">更新:{{ getUpdateTime(page) }}</span>
                    <span class="text-neutral">创建:{{ getCreateTime(page) }}</span>
                  </div>
                </div>
              </section>
            </div>
          </ACrad>
        </div>
      </template>
    </div>
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