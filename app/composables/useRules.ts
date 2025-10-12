// composables/useRules.ts
export const useRules = () => {
  const filterActive = ref<'all' | 'active' | 'inactive'>('all')
  const filterType = ref<'all' | 'standard' | 'single' | 'exception'>('all')
  const searchKeyword = ref('')

  const { data: rulesData, refresh } = useAsyncData('rules', () =>
    $fetch('/api/rules')
  )

  const filteredRules = computed(() => {
    if (!rulesData.value) return []

    let list = [...rulesData.value]

    // Filter på aktiv/inaktiv
    if (filterActive.value === 'active')
      list = list.filter(r => r.activeBool)
    else if (filterActive.value === 'inactive')
      list = list.filter(r => !r.activeBool)

    // Filter på type
    if (filterType.value === 'single') list = list.filter(r => r.tempBool)
    else if (filterType.value === 'exception') list = list.filter(r => r.exceptionBool)
    else if (filterType.value === 'standard') list = list.filter(r => !r.tempBool && !r.exceptionBool)

    // Søgning
    if (searchKeyword.value.trim() !== '') {
      const kw = searchKeyword.value.toLowerCase()
      list = list.filter(r =>
        (r.reference?.toLowerCase().includes(kw)) ||
        (r.sender?.toLowerCase().includes(kw)) ||
        (r.relatedBankAccountName?.toLowerCase().includes(kw))
      )
    }

    return list
  })

  const sortKey = ref('')
  const sortAsc = ref(true)

  const sortList = (key: string) => {
    if (sortKey.value === key) sortAsc.value = !sortAsc.value
    else {
      sortKey.value = key
      sortAsc.value = true
    }

    filteredRules.value.sort((a, b) => {
      const valA = a[key] ?? ''
      const valB = b[key] ?? ''

      if (valA < valB) return sortAsc.value ? -1 : 1
      if (valA > valB) return sortAsc.value ? 1 : -1
      return 0
    })
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