import fetch from 'node-fetch';
import fs from 'fs';

async function fetchAndSaveHtml(url, filePath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 错误！状态: ${response.status}`);
    }
    const html = await response.text();
    fs.writeFileSync(filePath, html);
    console.log(`HTML 已成功保存到 ${filePath}`);
  } catch (error) {
    console.error('获取或保存 HTML 时出错:', error);
  }
}

fetchAndSaveHtml('https://rst.fujian.gov.cn/zw/ztzl/zxzt/sydwrczp/zc/202401/t20240105_6373183.htm', './data/2024data.html');