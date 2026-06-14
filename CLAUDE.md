# 独立游戏赚钱指南 - AI 运营指南

## 项目概述

这是一个 VitePress 驱动的静态网站，教独立开发者如何从零做游戏赚钱。
部署在 GitHub Pages，所有内容通过对话式 AI 维护。

## 网站结构

按平台分类：微信小游戏(/wechat) | 抖音(/douyin) | TapTap(/tap) | Steam(/steam) | 资源(/resources)

## 目录对应关系

- `*.md` — VitePress 页面内容（Markdown）
- `data/games/*.yml` — 游戏案例数据（完整字段见设计文档）
- `data/reports/*.yml` — 月度数据报告
- `.vitepress/config.js` — 导航/侧边栏配置
- `.vitepress/theme/style.css` — 视觉样式

## 日常操作

### 加案例
1. 创建 `data/games/游戏名.yml`
2. 创建 `平台/cases/游戏名.md`
3. 可选更新首页推荐列表

### 更新数据排行
1. 修改/新增 `data/games/*.yml` 中的游戏数据
2. 更新或创建 `data/reports/YYYY-MM.yml`

### 改外观
1. 颜色/字体 → `.vitepress/theme/style.css`
2. 导航结构 → `.vitepress/config.js`

## 发布

```bash
git add -A && git commit -m "content: 描述更新内容" && git push
```
推送后 GitHub Actions 自动构建部署，几分钟后生效。
