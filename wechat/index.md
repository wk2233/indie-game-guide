---
title: 微信小游戏
description: 微信小游戏从零入门到赚钱的全流程指导
---

<script setup>
import { ref } from 'vue'

const wechatRankings = ref([
  { name: '羊了个羊', genre: '消除', platform: '微信小游戏', platformKey: 'wechat', revenue: '500万+/月', teamSize: '5人' },
  { name: '寻道大千', genre: 'RPG', platform: '微信小游戏', platformKey: 'wechat', revenue: '300万+/月', teamSize: '8人' },
  { name: '咸鱼之王', genre: '放置', platform: '微信小游戏', platformKey: 'wechat', revenue: '250万+/月', teamSize: '6人' },
  { name: '疯狂骑士团', genre: 'RPG', platform: '微信小游戏', platformKey: 'wechat', revenue: '200万+/月', teamSize: '10人' },
  { name: '我要当国王', genre: '模拟经营', platform: '微信小游戏', platformKey: 'wechat', revenue: '150万+/月', teamSize: '4人' },
])
</script>

# 🟢 微信小游戏

> 国内最大的小游戏平台，月活用户 5 亿+。**个人开发者无需版号即可发布**，广告+IAP双变现模式成熟。

<div class="data-card">
  <div class="data-card-item">
    <div class="value">5亿+</div>
    <div class="label">月活用户</div>
  </div>
  <div class="data-card-item">
    <div class="value">0元</div>
    <div class="label">注册门槛</div>
  </div>
  <div class="data-card-item">
    <div class="value">无需版号</div>
    <div class="label">个人即可发布</div>
  </div>
  <div class="data-card-item">
    <div class="value">eCPM 1-15元</div>
    <div class="label">广告收益</div>
  </div>
</div>

## 📖 快速导航

- **[📖 入门指南](./guide/)** —— 注册 → 开发 → 审核 → 上线全流程
- **[📊 案例拆解](./cases/)** —— 爆款游戏深度分析，含流水数据和开发经验
- **[💰 变现教程](./monetize/)** —— 广告接入、eCPM优化、内购设计
- **[📈 数据排行](./data/)** —— 月度流水TOP榜单，品类趋势分析

## 🔥 本月流水 TOP 5

<GameRankingTable :games="wechatRankings" />

## 📝 最新微信小游戏案例

- [《羊了个羊》深度拆解](./cases/yang-le-ge-yang.md) —— 社交裂变标杆
- [《咸鱼之王》变现密码](./cases/xian-yu-zhi-wang.md) —— 放置+IAA混合变现

## 🚀 零成本起步路线

<StepChecklist :steps="[
  { text: '注册微信小游戏账号（免费）', done: false },
  { text: '下载 Cocos Creator / Laya（免费引擎）', done: false },
  { text: '学习基础教程（本站提供）', done: false },
  { text: '做一个简单demo并提交审核', done: false },
  { text: '接入广告SDK → 上线赚钱', done: false },
]" />

> 📌 **数据来源：公开数据整理，仅供参考。**
