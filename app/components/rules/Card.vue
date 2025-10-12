<script setup lang="ts">

defineProps({
  rule: Object
})

const router = useRouter()

const getTypeBadge = () => {
  if (rule.tempBool) return { label: 'Engangsregel', color: 'yellow' }
  if (rule.exceptionBool) return { label: 'Undtagelse', color: 'red' }
  return { label: 'Almindelig', color: 'blue' }
}
</script>

<template>
  <UCard class="mb-3 p-4 flex justify-between items-start">
    <div>
      <h3 class="font-semibold">{{ rule.relatedBankAccountName }}</h3>
      <p>Reference: {{ rule.reference }}</p>
      <p>Afsender: {{ rule.sender }}</p>
      <p>Sidst anvendt: {{ rule.lastUsed }}</p>
      <UBadge :color="getTypeBadge().color">{{ getTypeBadge().label }}</UBadge>
      <UBadge v-if="!rule.activeBool" color="gray">Inaktiv</UBadge>
    </div>
    <div>
      <UButton size="sm" color="orange" @click="router.push(`/edit-rule/${rule.ruleID}`)">
        <EditIcon />
      </UButton>
    </div>
  </UCard>
</template>
