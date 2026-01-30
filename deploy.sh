#!/bin/bash

# 1. 进入项目目录
cd /root/react-web-site

# 2. 拉取最新代码 (确保服务器已经配置了 Gitee 的 SSH Key 免密)
git pull gitee main

# 3. 安装依赖并构建
npm install
npm run build

# 4. 使用 PM2 启动 Next.js
# 注意：Next.js 生产模式通常运行 'npm start'
pm2 restart react-site || pm2 start npm --name "react-site" -- start
