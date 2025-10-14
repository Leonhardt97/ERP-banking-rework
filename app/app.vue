<script setup lang="ts">
	useHead({
		meta: [
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
		],
		title: 'Fællesoffentlig Bankintegration (FOBI)',
		link: [{ rel: 'icon', href: '/favicon.ico' }],
		htmlAttrs: { lang: 'da' }
	})

	const route = useRoute()

	const navItems = [
		{ label: 'Forside', to: '/' },
		{ label: 'Konteringsregler', to: '/rules' },
		{ label: 'Posteringer', to: '/postings' },
		{ label: 'Kørsler', to: '/runs' },
		{ label: 'Filer', to: '/files' },
		{ label: 'Administration', to: '/admin' }
	]

	const isActive = (path: string) => {
		// Special-case root so '/' doesn't match every route.
		if (path === '/') {
			return route.path === '/' || route.path === ''
		}

		// For other paths, match exact or as a prefix (so /rules and /rules/123 both match)
		return route.path === path || route.path.startsWith(path + '/')
	}
</script>

<template>
	<UApp>
		<!-- HEADER -->
		<UHeader>
			<template #left>
				<NuxtLink
					to="/"
					class="flex items-center gap-2"
				>
					<AppLogo class="w-auto h-6 shrink-0" />
					<span class="font-semibold text-lg">
						Fællesoffentlig Bankintegration
					</span>
				</NuxtLink>
			</template>

			<template #right>
				<!-- Topnavigation -->
				<nav class="flex gap-1">
					<NuxtLink
						v-for="item in navItems"
						:key="item.to"
						:to="item.to"
						:class="[
							'px-3 py-2 text-sm font-medium rounded-md transition',
							isActive(item.to)
								? 'bg-primary/10 text-primary-700 dark:text-primary-300'
								: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
						]"
					>
						{{ item.label }}
					</NuxtLink>
				</nav>
			</template>
		</UHeader>

		<!-- MAIN CONTENT -->
		<UMain>
			<div class="max-w-7xl mx-auto p-6">
				<NuxtPage />
			</div>
		</UMain>

		<!-- FOOTER -->
		<UFooter class="border-t border-gray-200 dark:border-gray-800">
			<template #left>
				<p class="text-sm text-muted">
					{{ new Date().getFullYear() }} Christian Leonhardt @ Randers Kommune
				</p>
			</template>

			<template #right>
				<div class="flex items-center gap-3">
					<span class="text-sm text-muted">Bygget med Nuxt UI</span>
					<UColorModeButton />
				</div>
			</template>
		</UFooter>
	</UApp>
</template>
