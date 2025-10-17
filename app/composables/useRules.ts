// composables/useRules.ts
import { ref, computed, watch } from 'vue'
import { useAsyncData, useRoute, useRouter } from '#app'

export const useRules = () => {
  const route = useRoute()
  const router = useRouter()

  const filterActive = ref<'all' | 'active' | 'inactive'>('all')
  const filterType = ref<'all' | 'standard' | 'single' | 'exception'>('all')
  const searchKeyword = ref('')

  // Indlæs fra URL ved første load
  if (
    route.query.status
    && ['all', 'active', 'inactive'].includes(route.query.status as string)
  ) {
    filterActive.value = route.query.status as any
  }
  if (
    route.query.type
    && ['all', 'standard', 'single', 'exception'].includes(
      route.query.type as string
    )
  ) {
    filterType.value = route.query.type as any
  }
  if (route.query.search) {
    searchKeyword.value = route.query.search as string
  }

  // Opdater URL når værdier ændres
  watch([filterActive, filterType, searchKeyword], ([a, t, s]) => {
    const query: Record<string, string> = {}
    if (a !== 'all') query.status = a
    if (t !== 'all') query.type = t
    if (s.trim() !== '') query.search = s.trim()

    router.replace({ query })
  })

  const { data: rulesData, refresh } = useAsyncData('rules', () =>
    $fetch('/api/rules')
  )

  const sortKey = ref('')
  const sortAsc = ref(true)

  const filteredRules = computed(() => {
    if (!rulesData.value) return []

    let list = [...rulesData.value]

    if (filterActive.value === 'active')
      list = list.filter(r => r.activeBool)
    else if (filterActive.value === 'inactive')
      list = list.filter(r => !r.activeBool)

    if (filterType.value === 'single') list = list.filter(r => r.tempBool)
    else if (filterType.value === 'exception')
      list = list.filter(r => r.exceptionBool)
    else if (filterType.value === 'standard')
      list = list.filter(r => !r.tempBool && !r.exceptionBool)

    if (searchKeyword.value.trim() !== '') {
      const kw = searchKeyword.value.toLowerCase()
      list = list.filter(
        r =>
          r.reference?.toLowerCase().includes(kw)
          || r.sender?.toLowerCase().includes(kw)
          || r.relatedBankAccountName?.toLowerCase().includes(kw)
      )
    }

    if (sortKey.value) {
      const key = sortKey.value
      const asc = sortAsc.value
      list.sort((a, b) => {
        const valA = a[key] ?? ''
        const valB = b[key] ?? ''
        return asc ? valA.localeCompare(valB) : valB.localeCompare(valA)
      })
    }

    return list
  })

  const sortList = (key: string) => {
    if (sortKey.value === key) sortAsc.value = !sortAsc.value
    else {
      sortKey.value = key
      sortAsc.value = true
    }
  }

  return {
    rulesData,
    filteredRules,
    filterActive,
    filterType,
    searchKeyword,
    sortKey,
    sortAsc,
    sortList,
    refresh
  }
}
