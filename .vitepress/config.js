import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '独立游戏赚钱指南',
  description: '从零开发游戏到上线赚钱，个人开发者的实战路径',
  lang: 'zh-CN',
  base: '/indie-game-guide/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/images/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '微信小游戏', link: '/wechat/' },
      { text: '抖音小游戏', link: '/douyin/' },
      { text: 'TapTap/手游', link: '/tap/' },
      { text: 'Steam独立游戏', link: '/steam/' },
      { text: '通用资源', link: '/resources/' },
    ],

    sidebar: {
      '/wechat/': [
        {
          text: '🟢 微信小游戏',
          items: [
            { text: '板块首页', link: '/wechat/' },
            { text: '入门指南', link: '/wechat/guide/' },
            { text: '案例拆解', link: '/wechat/cases/' },
            { text: '变现教程', link: '/wechat/monetize/' },
            { text: '数据排行', link: '/wechat/data/' },
          ]
        }
      ],
      '/douyin/': [
        {
          text: '🎵 抖音小游戏',
          items: [
            { text: '板块首页', link: '/douyin/' },
            { text: '入门指南', link: '/douyin/guide/' },
            { text: '案例拆解', link: '/douyin/cases/' },
            { text: '变现教程', link: '/douyin/monetize/' },
            { text: '数据排行', link: '/douyin/data/' },
          ]
        }
      ],
      '/tap/': [
        {
          text: '📱 TapTap / 手游',
          items: [
            { text: '板块首页', link: '/tap/' },
            { text: '入门指南', link: '/tap/guide/' },
            { text: '案例拆解', link: '/tap/cases/' },
            { text: '变现教程', link: '/tap/monetize/' },
            { text: '数据排行', link: '/tap/data/' },
          ]
        }
      ],
      '/steam/': [
        {
          text: '🎮 Steam 独立游戏',
          items: [
            { text: '板块首页', link: '/steam/' },
            { text: '入门指南', link: '/steam/guide/' },
            { text: '案例拆解', link: '/steam/cases/' },
            { text: '变现教程', link: '/steam/monetize/' },
            { text: '数据排行', link: '/steam/data/' },
          ]
        }
      ],
      '/resources/': [
        {
          text: '🔧 通用资源',
          items: [
            { text: '引擎对比', link: '/resources/#引擎对比' },
            { text: '免费素材', link: '/resources/#免费素材' },
            { text: '工具推荐', link: '/resources/#工具推荐' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME/indie-game-guide' }
    ],

    footer: {
      message: '数据来源：公开数据整理，仅供参考',
      copyright: 'Copyright © 2026 独立游戏赚钱指南'
    },

    search: {
      provider: 'local'
    },
  }
})
