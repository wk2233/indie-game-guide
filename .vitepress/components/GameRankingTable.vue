<template>
  <table class="ranking-table">
    <thead>
      <tr>
        <th>排名</th>
        <th>游戏</th>
        <th>类型</th>
        <th>平台</th>
        <th>月流水</th>
        <th>开发人数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(game, idx) in games" :key="game.name">
        <td><span :class="['rank-badge', `rank-${idx+1}`]" v-if="idx < 3">{{ idx + 1 }}</span><span v-else>{{ idx + 1 }}</span></td>
        <td><strong>{{ game.name }}</strong></td>
        <td>{{ game.genre }}</td>
        <td><span :class="['platform-tag', `platform-${game.platformKey}`]">{{ game.platform }}</span></td>
        <td><strong>{{ game.revenue }}</strong></td>
        <td>{{ game.teamSize }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  games: {
    type: Array,
    required: true
  }
})
</script>
