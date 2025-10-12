<script setup lang="ts">
defineProps({
  filterActive: Object,
  filterType: Object,
  searchKeyword: Object
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
    <UInput
      v-model="searchKeyword.value"
      placeholder="Søg regler..."
      :prepend-icon="SearchIcon"
      clearable
    />

    <div class="flex gap-4">
      <URadioGroup v-model="filterActive.value" label="Status">
        <URadio label="Alle" value="all" />
        <URadio label="Aktive" value="active" />
        <URadio label="Inaktive" value="inactive" />
      </URadioGroup>

      <URadioGroup v-model="filterType.value" label="Type">
        <URadio label="Alle" value="all" />
        <URadio label="Almindelig" value="standard" />
        <URadio label="Engangsregel" value="single" />
        <URadio label="Undtagelse" value="exception" />
      </URadioGroup>
    </div>
  </div>
</template>
