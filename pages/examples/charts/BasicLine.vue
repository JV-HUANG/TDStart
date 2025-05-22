<script lang="ts" setup>
definePageMeta({
  layout: 'examples'
})

const RevenueData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]

const RevenueCategories = computed(() => ({
  desktop: {
    name: 'Desktop',
  },
}))

const xFormatter = (i: number): string => `${RevenueData[i]?.month}`
const yFormatter = (i: number) => i
</script>

<template>
  <BarChart
    :data="RevenueData"
    :height="275"
    :categories="RevenueCategories"
    :y-axis="['desktop']"
    :xNumTicks="6"
    :radius="4"
    :y-grid-line="false"
    :x-formatter="xFormatter"
    :y-formatter="yFormatter"
    :legend-position="LegendPosition.Top"
  />
</template>