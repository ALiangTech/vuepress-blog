import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { theme as CustomTheme } from '../../plugins/theme'
import UnoCSS from 'unocss/vite'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css' }]
  ],
  plugins: [CustomTheme()],
  bundler: viteBundler({
    viteOptions: {
      plugins: [UnoCSS()]
    }
  })
})