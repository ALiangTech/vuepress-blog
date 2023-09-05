<template>
  <header class="flex justify-between items-center px-5 py-2 sticky top-0 z-100 gsap-header bg">
    <div class="flex items-center">
      <!-- <img src="./../assets/logo.png" class="h-15 w-15"> -->
      <h1 class="m0 clip text-4">北境博客</h1>
    </div>
    <ul class="flex list-none m0">
      <li>
        <a href="/">首页</a>
      </li>
      <li>系列</li>
    </ul>
    <div>
      <Docsearch />
    </div>
  </header>
</template>
<script setup>
// import { onMounted } from 'vue'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

// 添加背景色
// function useAnimation() {
//   onMounted(() => {
//     gsap.timeline({
//       scrollTrigger: {
//         start: 'top - 300',
//         end: 1000,
//         scrub: true
//         // pin: true
//       }
//     })
//       .to('.gsap-header', { backgroundColor: '#2f54eb' })
//   })
// }
// useAnimation()
</script>
<style scoped>
.bg {
  background-color: #f5f5f5;
}

.clip {
  background: linear-gradient(120deg, var(--vp-c-brand) 40%, var(--vp-c-brand-next));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 30s linear infinite;
}

@keyframes rainbow {
  0% {
    --vp-c-brand: #00a98e;
    --vp-c-brand-next: #009ff7
  }

  1.25% {
    --vp-c-brand: #00a996;
    --vp-c-brand-next: #009dfa
  }

  2.5% {
    --vp-c-brand: #00a99f;
    --vp-c-brand-next: #009bfc
  }

  3.75% {
    --vp-c-brand: #00a9a7;
    --vp-c-brand-next: #0098fd
  }

  5% {
    --vp-c-brand: #00a9b0;
    --vp-c-brand-next: #0096fd
  }

  6.25% {
    --vp-c-brand: #00a9b8;
    --vp-c-brand-next: #0093fd
  }

  7.5% {
    --vp-c-brand: #00a9c0;
    --vp-c-brand-next: #2e90fc
  }

  8.75% {
    --vp-c-brand: #00a8c7;
    --vp-c-brand-next: #4d8dfa
  }

  10% {
    --vp-c-brand: #00a8cf;
    --vp-c-brand-next: #638af8
  }

  11.25% {
    --vp-c-brand: #00a7d5;
    --vp-c-brand-next: #7587f5
  }

  12.5% {
    --vp-c-brand: #00a6dc;
    --vp-c-brand-next: #8583f1
  }

  13.75% {
    --vp-c-brand: #00a6e2;
    --vp-c-brand-next: #9280ed
  }

  15% {
    --vp-c-brand: #00a4e7;
    --vp-c-brand-next: #9f7ce9
  }

  16.25% {
    --vp-c-brand: #00a3ec;
    --vp-c-brand-next: #aa78e3
  }

  17.5% {
    --vp-c-brand: #00a2f1;
    --vp-c-brand-next: #b574dd
  }

  18.75% {
    --vp-c-brand: #00a0f4;
    --vp-c-brand-next: #be71d7
  }

  20% {
    --vp-c-brand: #009ff7;
    --vp-c-brand-next: #c76dd1
  }

  21.25% {
    --vp-c-brand: #009dfa;
    --vp-c-brand-next: #cf69c9
  }

  22.5% {
    --vp-c-brand: #009bfc;
    --vp-c-brand-next: #d566c2
  }

  23.75% {
    --vp-c-brand: #0098fd;
    --vp-c-brand-next: #dc63ba
  }

  25% {
    --vp-c-brand: #0096fd;
    --vp-c-brand-next: #e160b3
  }

  26.25% {
    --vp-c-brand: #0093fd;
    --vp-c-brand-next: #e65eab
  }

  27.5% {
    --vp-c-brand: #2e90fc;
    --vp-c-brand-next: #e95ca2
  }

  28.75% {
    --vp-c-brand: #4d8dfa;
    --vp-c-brand-next: #ed5a9a
  }

  30% {
    --vp-c-brand: #638af8;
    --vp-c-brand-next: #ef5992
  }

  31.25% {
    --vp-c-brand: #7587f5;
    --vp-c-brand-next: #f15989
  }

  32.5% {
    --vp-c-brand: #8583f1;
    --vp-c-brand-next: #f25981
  }

  33.75% {
    --vp-c-brand: #9280ed;
    --vp-c-brand-next: #f25a79
  }

  35% {
    --vp-c-brand: #9f7ce9;
    --vp-c-brand-next: #f25c71
  }

  36.25% {
    --vp-c-brand: #aa78e3;
    --vp-c-brand-next: #f15e69
  }

  37.5% {
    --vp-c-brand: #b574dd;
    --vp-c-brand-next: #ef6061
  }

  38.75% {
    --vp-c-brand: #be71d7;
    --vp-c-brand-next: #ed635a
  }

  40% {
    --vp-c-brand: #c76dd1;
    --vp-c-brand-next: #eb6552
  }

  41.25% {
    --vp-c-brand: #cf69c9;
    --vp-c-brand-next: #e8694b
  }

  42.5% {
    --vp-c-brand: #d566c2;
    --vp-c-brand-next: #e46c44
  }

  43.75% {
    --vp-c-brand: #dc63ba;
    --vp-c-brand-next: #e06f3d
  }

  45% {
    --vp-c-brand: #e160b3;
    --vp-c-brand-next: #db7336
  }

  46.25% {
    --vp-c-brand: #e65eab;
    --vp-c-brand-next: #d77630
  }

  47.5% {
    --vp-c-brand: #e95ca2;
    --vp-c-brand-next: #d17a2a
  }

  48.75% {
    --vp-c-brand: #ed5a9a;
    --vp-c-brand-next: #cc7d24
  }

  50% {
    --vp-c-brand: #ef5992;
    --vp-c-brand-next: #c6811e
  }

  51.25% {
    --vp-c-brand: #f15989;
    --vp-c-brand-next: #bf8418
  }

  52.5% {
    --vp-c-brand: #f25981;
    --vp-c-brand-next: #b98713
  }

  53.75% {
    --vp-c-brand: #f25a79;
    --vp-c-brand-next: #b28a0f
  }

  55% {
    --vp-c-brand: #f25c71;
    --vp-c-brand-next: #ab8d0c
  }

  56.25% {
    --vp-c-brand: #f15e69;
    --vp-c-brand-next: #a3900b
  }

  57.5% {
    --vp-c-brand: #ef6061;
    --vp-c-brand-next: #9c920d
  }

  58.75% {
    --vp-c-brand: #ed635a;
    --vp-c-brand-next: #949510
  }

  60% {
    --vp-c-brand: #eb6552;
    --vp-c-brand-next: #8b9715
  }

  61.25% {
    --vp-c-brand: #e8694b;
    --vp-c-brand-next: #83991b
  }

  62.5% {
    --vp-c-brand: #e46c44;
    --vp-c-brand-next: #7a9b21
  }

  63.75% {
    --vp-c-brand: #e06f3d;
    --vp-c-brand-next: #719d27
  }

  65% {
    --vp-c-brand: #db7336;
    --vp-c-brand-next: #679e2e
  }

  66.25% {
    --vp-c-brand: #d77630;
    --vp-c-brand-next: #5da035
  }

  67.5% {
    --vp-c-brand: #d17a2a;
    --vp-c-brand-next: #51a13c
  }

  68.75% {
    --vp-c-brand: #cc7d24;
    --vp-c-brand-next: #44a244
  }

  70% {
    --vp-c-brand: #c6811e;
    --vp-c-brand-next: #34a44b
  }

  71.25% {
    --vp-c-brand: #bf8418;
    --vp-c-brand-next: #1ba553
  }

  72.5% {
    --vp-c-brand: #b98713;
    --vp-c-brand-next: #00a65b
  }

  73.75% {
    --vp-c-brand: #b28a0f;
    --vp-c-brand-next: #00a663
  }

  75% {
    --vp-c-brand: #ab8d0c;
    --vp-c-brand-next: #00a76c
  }

  76.25% {
    --vp-c-brand: #a3900b;
    --vp-c-brand-next: #00a874
  }

  77.5% {
    --vp-c-brand: #9c920d;
    --vp-c-brand-next: #00a87d
  }

  78.75% {
    --vp-c-brand: #949510;
    --vp-c-brand-next: #00a985
  }

  80% {
    --vp-c-brand: #8b9715;
    --vp-c-brand-next: #00a98e
  }

  81.25% {
    --vp-c-brand: #83991b;
    --vp-c-brand-next: #00a996
  }

  82.5% {
    --vp-c-brand: #7a9b21;
    --vp-c-brand-next: #00a99f
  }

  83.75% {
    --vp-c-brand: #719d27;
    --vp-c-brand-next: #00a9a7
  }

  85% {
    --vp-c-brand: #679e2e;
    --vp-c-brand-next: #00a9b0
  }

  86.25% {
    --vp-c-brand: #5da035;
    --vp-c-brand-next: #00a9b8
  }

  87.5% {
    --vp-c-brand: #51a13c;
    --vp-c-brand-next: #00a9c0
  }

  88.75% {
    --vp-c-brand: #44a244;
    --vp-c-brand-next: #00a8c7
  }

  90% {
    --vp-c-brand: #34a44b;
    --vp-c-brand-next: #00a8cf
  }

  91.25% {
    --vp-c-brand: #1ba553;
    --vp-c-brand-next: #00a7d5
  }

  92.5% {
    --vp-c-brand: #00a65b;
    --vp-c-brand-next: #00a6dc
  }

  93.75% {
    --vp-c-brand: #00a663;
    --vp-c-brand-next: #00a6e2
  }

  95% {
    --vp-c-brand: #00a76c;
    --vp-c-brand-next: #00a4e7
  }

  96.25% {
    --vp-c-brand: #00a874;
    --vp-c-brand-next: #00a3ec
  }

  97.5% {
    --vp-c-brand: #00a87d;
    --vp-c-brand-next: #00a2f1
  }

  98.75% {
    --vp-c-brand: #00a985;
    --vp-c-brand-next: #00a0f4
  }

  to {
    --vp-c-brand: #00a98e;
    --vp-c-brand-next: #009ff7
  }
}
</style>