<script setup lang="ts">

definePageMeta({
  layout: 'examples'
})

const donutData = ref([35, 25, 20, 15, 5]) // Percentages

const marketShareLabels = [
  { name: 'Product A', color: '#3b82f6' }, // Blue
  { name: 'Product B', color: '#14b8a6' }, // Teal
  { name: 'Product C', color: '#f59e0b' }, // Amber
  { name: 'Product D', color: '#ef4444' }, // Red
  { name: 'Other', color: '#6b7280' }, // Gray
]
</script>

<template>
  <v-card variant="text" class="mx-auto gap-4 px-4 py-14 w-min">
  <DonutChart
    :data="donutData"
    :height="275"
    :radius="0"
    :type="'full'"
    :labels="marketShareLabels"
  >
    <div class="absolute text-center py-24">
      <div class="font-semibold">Label</div>
      <div class="text-(--ui-text-muted)">2 seconds ago</div>
    </div>
  </DonutChart>
  </v-card>
</template>
