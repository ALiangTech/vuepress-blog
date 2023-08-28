import path from 'path'
export const theme = (options) => {
  return {
    name: 'vuepress-theme-at',
    // C:/Users/Aliang/Documents/local/AT-vuepress-blog/plugins/theme/client.js
    clientConfigFile: path.resolve(__dirname, './client.js').replace(/\\/g, '/'),
  }
}