<script lang="ts" setup>
definePageMeta({
  layout: 'examples'
})

const RevenueData = [
  { month: 'January一月', desktop: 186, mobile: 80 },
  { month: 'February二月', desktop: 305, mobile: 200 },
  { month: 'March三月', desktop: 237, mobile: 120 },
  { month: 'April四月', desktop: 73, mobile: 190 },
  { month: 'May五月', desktop: 209, mobile: 130 },
  { month: 'June六月', desktop: 214, mobile: 140 },
]

const RevenueCategories = computed(() => ({
  desktop: {
    name: 'Desktop/桌面',
  },
}))

const xFormatter = (i: number): string => `${RevenueData[i]?.month}`
const yFormatter = (i: number) => i
</script>

<template>
  <v-card variant="text" class="mx-auto gap-4 px-4 py-4 w-full">
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
  </v-card>
</template>
<style lang="scss">
.css-czc1aa-bullet-legend-component {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>