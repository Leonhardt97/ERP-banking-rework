<script setup lang="ts">
const {
  filteredRules,
  filterActive,
  filterType,
  searchKeyword,
  sortKey,
  sortAsc,
  sortList
} = useRules()
</script>

<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">Konteringsregler</h1>

    <Toolbar
      :filterActive="filterActive"
      :filterType="filterType"
      :searchKeyword="searchKeyword"
    />

    <List :rules="filteredRules" />
  </div>
</template>