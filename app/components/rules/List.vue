<script setup lang="ts">
defineProps({
  rules: Array
})
</script>

<template>
  <div class="grid gap-4">
    <Card v-for="rule in rules" :key="rule.ruleID" :rule="rule" />
    <p v-if="rules.length === 0">Ingen regler fundet.</p>
  </div>
</template>
