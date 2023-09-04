<template>
  <section class="bg-geekblue-1 min-h-screen">
    <AHeader class="text-bg"></AHeader>
    <ABg></ABg>
    <div class="px-2 lg:px-10rem">
      <div class="flex pt-6 gap-6 max-w-6xl ma">
        <!-- 文章列表 -->
        <AArticels class="flex-1"></AArticels>
        <div class="w-240px hidden lg:block">
          <!-- 个人简介 -->
          <div class="h-240px bg-white">
            <aSelf></aSelf>
          </div>
          <div>
            <AClassify></AClassify>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import AArticels from './../components/a-articles.vue'
import AHeader from './../components/a-header.vue'
import ABg from './../components/a-bg.vue'
import aSelf from '../components/a-self.vue'
import AClassify from './../components/a-classify.vue'
</script>