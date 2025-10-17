<script setup lang="ts">
	import { computed } from 'vue'

	const props = defineProps<{
		filterActive: string
		filterType: string
		searchKeyword: string
	}>()

	const emit = defineEmits([
		'update:filter-active',
		'update:filter-type',
		'update:search-keyword'
	])

	const localFilterActive = computed({
		get: () => props.filterActive,
		set: (v: string) => emit('update:filter-active', v)
	})

	const localFilterType = computed({
		get: () => props.filterType,
		set: (v: string) => emit('update:filter-type', v)
	})

	const localSearchKeyword = computed({
		get: () => props.searchKeyword,
		set: (v: string) => emit('update:search-keyword', v)
	})
</script>

<template>
	<div
		class="flex flex-col md:flex-row gap-4 md:items-center md:justify-between"
	>
		<UInput
			v-model="localSearchKeyword"
			placeholder="Søg regler..."
			clearable
		/>

		<div class="flex gap-4">
			<URadioGroup
				v-model="localFilterActive"
				label="Status"
			>
				<URadio
					label="Alle"
					value="all"
				/>
				<URadio
					label="Aktive"
					value="active"
				/>
				<URadio
					label="Inaktive"
					value="inactive"
				/>
			</URadioGroup>

			<URadioGroup
				v-model="localFilterType"
				label="Type"
			>
				<URadio
					label="Alle"
					value="all"
				/>
				<URadio
					label="Almindelig"
					value="standard"
				/>
				<URadio
					label="Engangsregel"
					value="single"
				/>
				<URadio
					label="Undtagelse"
					value="exception"
				/>
			</URadioGroup>
		</div>
	</div>
</template>
