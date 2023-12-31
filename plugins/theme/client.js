import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/NotFound.vue'
import BaseListLayout from './global-components/BaseListLayout.vue'

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
    BaseListLayout
  },
})