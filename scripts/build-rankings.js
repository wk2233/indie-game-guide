import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.resolve(__dirname, '../data')
const gamesDir = path.join(dataDir, 'games')

/**
 * 读取所有游戏 YAML 数据，返回游戏列表
 */
export function loadAllGames() {
  const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'))
  return files.map(f => {
    const content = fs.readFileSync(path.join(gamesDir, f), 'utf-8')
    return yaml.load(content)
  })
}

/**
 * 按平台筛选游戏并按流水排序
 */
export function getRankingsByPlatform(platformKey, limit = 10) {
  const games = loadAllGames()
  return games
    .filter(g => g.platform_key === platformKey)
    .sort((a, b) => (b.monthly_revenue_estimate || 0) - (a.monthly_revenue_estimate || 0))
    .slice(0, limit)
}

/**
 * 获取全平台混合排行
 */
export function getAllPlatformRankings(limit = 20) {
  const games = loadAllGames()
  return games
    .sort((a, b) => (b.monthly_revenue_estimate || 0) - (a.monthly_revenue_estimate || 0))
    .slice(0, limit)
}

/**
 * 将原始游戏对象转为排行榜展示格式
 */
export function toRankingRow(game, index) {
  const revenue = game.monthly_revenue_estimate
  let revenueStr = '未知'
  if (revenue) {
    if (revenue >= 100000000) revenueStr = `${(revenue / 100000000).toFixed(1)}亿+/月`
    else if (revenue >= 10000) revenueStr = `${(revenue / 10000).toFixed(0)}万+/月`
    else revenueStr = `${revenue}/月`
  }
  return {
    index: index + 1,
    name: game.name,
    genre: game.genre,
    platform: game.platform,
    platformKey: game.platform_key,
    revenue: revenueStr,
    teamSize: `${game.dev_team_size || '?'}人`
  }
}
