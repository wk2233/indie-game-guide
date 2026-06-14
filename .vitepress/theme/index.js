import DefaultTheme from 'vitepress/theme'
import './style.css'
import GameRankingTable from '../components/GameRankingTable.vue'
import GameDataCard from '../components/GameDataCard.vue'
import StepChecklist from '../components/StepChecklist.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('GameRankingTable', GameRankingTable)
    app.component('GameDataCard', GameDataCard)
    app.component('StepChecklist', StepChecklist)
  }
}
