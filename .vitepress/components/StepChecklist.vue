<template>
  <ul class="step-list">
    <li v-for="(step, idx) in steps" :key="idx" :class="{ completed: step.done }">
      <span class="step-check"></span>
      <span>{{ step.text }}</span>
      <span v-if="step.note" style="color:#888;font-size:0.85rem;margin-left:auto;">{{ step.note }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  steps: {
    type: Array,
    required: true
  }
})
</script>
