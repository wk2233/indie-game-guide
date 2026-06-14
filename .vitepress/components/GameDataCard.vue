<template>
  <div class="data-card">
    <div class="data-card-item" v-for="item in items" :key="item.label">
      <div class="value">{{ item.value }}</div>
      <div class="label">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
