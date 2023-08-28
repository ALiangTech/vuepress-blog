const fs = require('fs');
const path = require('path');

// node_modules\@vuepress\client\dist\app.js
const filePath = path.join(__dirname, '..', 'node_modules', '@vuepress', 'client', 'dist', 'app.js'); // 替换成你的文件路径
const lineToInsert = "import 'virtual:uno.css';";

// 读取原文件内容
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // 在文件内容中插入新行
  let newData = data
  if (data.includes(lineToInsert)) {
    console.error('不用重复插入')
    return
  } else {
    newData = lineToInsert + '\n' + data;
  }

  // 将更新后的内容写回文件
  fs.writeFile(filePath, newData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Code inserted successfully.');
  });
});