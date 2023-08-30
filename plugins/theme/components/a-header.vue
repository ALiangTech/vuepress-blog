<template>
  <header class="flex justify-between items-center px-5 sticky top-0 z-999 gsap-header text-white">
    <h1 class="m0 p-4">AliangTech</h1>
    <div>
      <Docsearch />
    </div>
  </header>
</template>
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// 添加背景色
function useAnimation() {
  onMounted(() => {
    gsap.timeline({
      scrollTrigger: {
        start: 'top - 300',
        end: 1000,
        scrub: true
        // pin: true
      }
    })
      .to('.gsap-header', { backgroundColor: '#3eaf7c' })
  })
}
useAnimation()
</script>