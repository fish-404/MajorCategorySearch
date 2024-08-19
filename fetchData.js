import fetch from 'node-fetch';
import fs from 'fs';
import { dataSrc } from './data/dataSrc';

async function fetchAndSaveHtml(url, filePath) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP 错误！状态: ${response.status}`);
    }
    const html = await response.text();
    fs.writeFileSync(filePath, html);
    console.log(`HTML 已成功保存到 ${filePath}`);
    return 'Success';
  } catch (error) {
    console.error('获取或保存 HTML 时出错:', error);
    return 'Failed' + error.message;
  }
}

fetchAndSaveHtml(dataSrc.link, './data/2024data.html');