<template>
  <div class="relative">
    <AHeader></AHeader>
    <ABg></ABg>
    <section class="flex flex-justify-center gap-10 px-20">
      <article class="flex-1">
        <Content></Content>
      </article>
      <div class="hidden md:block">
      </div>
    </section>
  </div>
</template>
<script setup>
import { h } from 'vue';
import AHeader from './../components/a-header.vue'
import ABg from './../components/a-bg.vue'
import { usePageData } from '@vuepress/client'
const page = usePageData();


// 构建目录组件
function createDirectoryComponent(headers = [], root = '') {
  return h('ul', null, headers.map(item => {
    const { children, title, link } = item;
    return h('li', null, [h('a', { href: `${root}${link}` }, title), createDirectoryComponent(children)])
  }))
}
const Directory = createDirectoryComponent(page.value.headers, page.value.path)
console.log(Directory, 'Directory', page);

</script>