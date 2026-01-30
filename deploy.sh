#!/bin/bash

echo "--- 开始 Nginx 静态部署 ---"
cd /root/react-web-site

# 1. 拉取代码
git pull gitee main

# 2. 安装依赖并导出
npm install
npm run build # 确保 next.config.js 中有 output: 'export'

# 3. 这里的构建结果在 out 目录，Nginx 会自动读取，无需重启服务
# 如果你修改了 Nginx 配置才需要 reload
# sudo systemctl reload nginx

echo "--- 部署完成 $(date) ---"