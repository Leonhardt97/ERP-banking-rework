<script setup lang="ts">
	definePageMeta({
		title: 'Fællesoffentlig Bankintegration'
	})
</script>

<template>
	<div class="max-w-6xl mx-auto p-6 space-y-12">
		<!-- HERO -->
		<section class="text-center space-y-2">
			<h1 class="text-4xl md:text-5xl font-bold">
				Fællesoffentlig Bankintegration (FOBI)
			</h1>
			<p class="text-lg text-muted max-w-2xl mx-auto">
				Automatiseret kontering og bankintegration
			</p>
		</section>

		<!-- INTRO CARD -->
		<UCard
			class="bg-primary-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden"
		>
			<p class="text-lg md:text-xl font-semibold leading-relaxed">
				Fællesoffentlig bankintegration (<b>FOBI</b>) integrerer dit
				økonomisystem (ØS) og dine bankkonti for fuldautomatisk bogføring af
				hovedkonto 8.22.05 og semi-automatisk bogføring af bankposteringer i
				kommunernes kontoplan
			</p>
			<p class="mt-4 text-sm text-muted leading-relaxed">
				Ved hjælp af generiske konteringsregler matcher og bogfører FOBI
				bankposteringer med den ønskede kontering i kommunens ØS
			</p>
		</UCard>

		<!-- Separator med bank-ikon (centreret med linjer til siderne) -->
		<section class="my-8">
			<div class="max-w-6xl mx-auto flex items-center w-full gap-6">
				<div class="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
				<div class="flex flex-col items-center">
					<span class="bg-primary-50 dark:bg-gray-800 rounded-full p-2 shadow-md">
						<IconBank class="w-6 h-6 text-primary-600 dark:text-primary-300" />
					</span>
				</div>
				<div class="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
			</div>
		</section>

		<!-- GRID SEKTION -->
		<section class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<UCard class="p-6 shadow hover:shadow-lg transition">
				<template #icon>
					<IconCompass />
				</template>
				<h3 class="font-semibold text-lg mb-2">
					Sådan bruger du FOBI
				</h3>
				<p class="text-sm">
					I navigationen finder du 5 moduler:
				</p>
				<p class="mt-2 text-sm">
					<b>Konteringsregler</b>: Administration af konteringsregler til matching
					af bankposteringer
				</p>
				<p class="mt-2 text-sm">
					<b>Posteringer</b>: Behandling af posteringer uden matchende
					konteringsregel
				</p>
				<p class="mt-2 text-sm">
					<b>Kørsler</b>: Historik over kørsler med mulighed for gentart
				</p>
				<p class="mt-2 text-sm">
					<b>Filer</b>: Posteringsbilag, afstemningsbilag og manuelle posteringer
				</p>
				<p class="mt-2 text-sm">
					<b>Administration</b>: Stamdata, f.eks. bankkonti og valg af ØS
				</p>
			</UCard>

			<UCard class="p-6 shadow hover:shadow-lg transition">
				<template #icon>
					<IconNB />
				</template>
				<h3 class="font-semibold text-lg mb-2">
					Hvordan kommer du i gang?
				</h3>
				<p class="text-sm">
					Indgå aftaler med din bank og ØS-leverandør for dataudveksling
				</p>
				<p class="mt-2 text-sm">
					<b>Bankdata</b>: Kontakt din banks bogføringscentral for adgang
				</p>
				<p class="mt-2 text-sm">
					<b>ØS</b>: Kontakt din ØS-leverandør om aflevering poster fra tredjepartssystem
				</p>
				<p class="mt-2 text-sm">
					<i>Kontakt evt. udvikler Christian Skermer Leonhardt på
						csl@randers.dk for hjælp.</i>
				</p>
			</UCard>

			<UCard class="p-6 shadow hover:shadow-lg transition">
				<template #icon>
					<IconDocText />
				</template>
				<h3 class="font-semibold text-lg mb-2">
					Dokumentation
				</h3>
				<p class="text-sm">
					Find kildekoden og mere information på
					<a
						class="text-primary-600 dark:text-primary-300 underline"
						href="https://github.com/randerskommune/auto-bankposteringer-nordea-kmdopus"
						target="_blank"
						rel="noopener"
					>
						GitHub</a>.
				</p>
			</UCard>

			<UCard class="p-6 shadow hover:shadow-lg transition">
				<template #icon>
					<IconRSS />
				</template>
				<h3 class="font-semibold text-lg mb-2">
					Driftsstatus
				</h3>
				<Status />
			</UCard>
		</section>
	</div>
</template>
