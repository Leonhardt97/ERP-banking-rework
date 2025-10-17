<script setup lang="ts">
	import Card from './Card.vue'

	defineProps({
		rules: Array,
		sortKey: String,
		sortAsc: Boolean,
		sortList: Function
	})

	const columns = [
		{ label: 'Kontonavn', key: 'relatedBankAccountName' },
		{ label: 'Afsender', key: 'sender' },
		{ label: 'Reference', key: 'reference' },
		{ label: 'Sidst anvendt', key: 'lastUsed' }
	]
</script>

<template>
	<div class="space-y-4">
		<!-- Sorteringsbar -->
		<div
			class="flex flex-wrap justify-between border-b pb-2 font-medium text-gray-700"
		>
			<div
				v-for="col in columns"
				:key="col.key"
				class="cursor-pointer hover:text-black flex items-center gap-1"
				@click="sortList(col.key)"
			>
				<span>{{ col.label }}</span>
				<span v-if="sortKey === col.key">
					<ChevronUpIcon
						v-if="sortAsc"
						class="w-4 h-4"
					/>
					<ChevronDownIcon
						v-else
						class="w-4 h-4"
					/>
				</span>
			</div>
		</div>

		<!-- Kortvisning -->
		<div class="grid gap-4 mt-3">
			<Card
				v-for="rule in rules"
				:key="rule.ruleID"
				:rule="rule"
			/>
			<p v-if="!rules || rules.length === 0">
				Ingen regler fundet.
			</p>
		</div>
	</div>
</template>
