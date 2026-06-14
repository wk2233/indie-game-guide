---
layout: home

hero:
  name: "独立游戏赚钱指南"
  text: "从零到盈利"
  tagline: 个人开发者如何在零预算下做出赚钱的游戏
  actions:
    - theme: brand
      text: 🔥 查看最新排行
      link: /wechat/data/
    - theme: alt
      text: 📖 从零入门
      link: /wechat/guide/
---

<script setup>
import { ref } from 'vue'

const topGames = ref([
  { name: '羊了个羊', genre: '消除', platform: '微信小游戏', platformKey: 'wechat', revenue: '500万+/月', teamSize: '5人' },
  { name: '寻道大千', genre: 'RPG', platform: '微信小游戏', platformKey: 'wechat', revenue: '300万+/月', teamSize: '8人' },
  { name: '咸鱼之王', genre: '放置', platform: '微信小游戏', platformKey: 'wechat', revenue: '250万+/月', teamSize: '6人' },
  { name: '疯狂骑士团', genre: 'RPG', platform: '微信小游戏', platformKey: 'wechat', revenue: '200万+/月', teamSize: '10人' },
  { name: '合成大西瓜', genre: '合成', platform: '抖音小游戏', platformKey: 'douyin', revenue: '180万+/月', teamSize: '3人' },
  { name: '我要当国王', genre: '模拟经营', platform: '微信小游戏', platformKey: 'wechat', revenue: '150万+/月', teamSize: '4人' },
  { name: '房东模拟器', genre: '模拟经营', platform: 'TapTap', platformKey: 'tap', revenue: '120万+/月', teamSize: '5人' },
  { name: '星露谷物语', genre: '模拟经营', platform: 'Steam', platformKey: 'steam', revenue: '100万+/月', teamSize: '1人' },
  { name: '吸血鬼幸存者', genre: 'Roguelike', platform: 'Steam', platformKey: 'steam', revenue: '90万+/月', teamSize: '1人' },
  { name: '贪吃蛇大作战', genre: '休闲竞技', platform: '微信小游戏', platformKey: 'wechat', revenue: '80万+/月', teamSize: '3人' },
])
</script>

## 🔥 本月各平台流水 TOP 10

<GameRankingTable :games="topGames" />

<div style="margin-top: 12px; font-size: 0.8rem; color: #999;">
  📌 数据来源：公开数据整理，仅供参考。最后更新：2026年6月
</div>

---

## 📊 核心数据

<div class="data-card">
  <div class="data-card-item">
    <div class="value">500+</div>
    <div class="label">游戏案例</div>
  </div>
  <div class="data-card-item">
    <div class="value">4</div>
    <div class="label">覆盖平台</div>
  </div>
  <div class="data-card-item">
    <div class="value">月更</div>
    <div class="label">数据报告</div>
  </div>
  <div class="data-card-item">
    <div class="value">50+</div>
    <div class="label">零成本案例</div>
  </div>
</div>

---

## 🎯 快速入门

<div class="platform-cards">

<a class="platform-card wechat" href="/wechat/">
  <h3>🟢 微信小游戏</h3>
  <p>国内最大平台，月活5亿+，个人开发者首选。广告+内购双变现。</p>
  <small>零成本入门 →</small>
</a>

<a class="platform-card douyin" href="/douyin/">
  <h3>🎵 抖音小游戏</h3>
  <p>短视频导量红利期，IAA休闲游戏最佳选择，增长最快。</p>
  <small>零成本入门 →</small>
</a>

<a class="platform-card tap" href="/tap/">
  <h3>📱 TapTap / 手游</h3>
  <p>核心玩家社区，内购变现首选。适合中重度、有特色的独立游戏。</p>
  <small>零成本入门 →</small>
</a>

<a class="platform-card steam" href="/steam/">
  <h3>🎮 Steam 独立游戏</h3>
  <p>全球最大的PC游戏平台，买断制。单人也能做出百万销量。</p>
  <small>零成本入门 →</small>
</a>

</div>

---

## 📝 最新案例拆解

- **[《羊了个羊》深度拆解：为什么它能火？](./wechat/cases/yang-le-ge-yang.md)** —— 🟢 微信小游戏 · 消除 · 社交裂变 · 月流水500万+
- **[《星露谷物语》单人开发传奇](./steam/cases/stardew-valley.md)** —— 🎮 Steam · 模拟经营 · 1人开发 · 全球销量3000万+
- **[《咸鱼之王》放置游戏的变现密码](./wechat/cases/xian-yu-zhi-wang.md)** —— 🟢 微信小游戏 · 放置挂机 · 内购+IAA · 月流水250万+

---

## 📈 最新数据报告

- [2026年6月 · 微信小游戏流水排行榜 TOP20](./wechat/data/)
- [2026年Q2 · 抖音小游戏趋势分析](./douyin/data/)
- [2026年 · Steam独立游戏中国市场表现](./steam/data/)
