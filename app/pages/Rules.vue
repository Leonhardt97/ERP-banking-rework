<script setup lang="ts">
	useHead({
		title: 'Konteringsregler (FOBI)'
	})

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
		<h1 class="text-2xl font-bold">
			Konteringsregler
		</h1>

		<Toolbar
				v-model:filter-active="filterActive"
				v-model:filter-type="filterType"
				v-model:search-keyword="searchKeyword"
		/>

		<List
			:rules="filteredRules"
			:sort-key="sortKey"
			:sort-asc="sortAsc"
			:sort-list="sortList"
		/>
	</div>
</template>
