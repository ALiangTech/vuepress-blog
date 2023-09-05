import path from 'path'
export const theme = (options) => {
  let x = path.resolve(__dirname, 'templates', 'dev.html');
  return {
    name: 'vuepress-theme-at',
    // C:/Users/Aliang/Documents/local/AT-vuepress-blog/plugins/theme/client.js
    clientConfigFile: path.resolve(__dirname, './client.js').replace(/\\/g, '/'),
  }
}