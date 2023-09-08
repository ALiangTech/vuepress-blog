import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { theme as CustomTheme } from '../../plugins/theme'
import UnoCSS from 'unocss/vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { gitPlugin } from '@vuepress/plugin-git'
import path from 'path'
export default defineUserConfig({
  lang: 'zh-CN',
  title: '极境',
  description: 'vue javascript vue go',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/normalize/8.0.1/normalize.min.css' }],
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [CustomTheme(), docsearchPlugin({ apiKey: 'kk', appId: '213', indexName: '' }), gitPlugin({
    // 配置项
    createdTime: true,
    updatedTime: true,
  }),
    // googleAnalyticsPlugin({
    //   // 配置项
    //   id: 'G-JPZ03GJTKD',
    //   debug: true,
    // }),
  ],
  bundler: viteBundler({
    viteOptions: {
      plugins: [UnoCSS()]
    }
  }),
  templateBuild: path.resolve(__dirname, 'templates', 'build.html'),
})