<script lang="ts" setup>

definePageMeta({
  layout: 'examples'
})

interface AreaChartItem {
  date: string
  desktop: number
  mobile: number
}

const categories: Record<string, BulletLegendItemInterface> = computed(() => ({
  desktop: {
    name: 'Desktop',
  },
  mobile: {
    name: 'Mobile',
  },
}))

const AreaChartData: AreaChartItem[] = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 180, mobile: 97 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 260, mobile: 240 },
  { date: '2024-04-05', desktop: 240, mobile: 290 },
]

const xFormatter = (i: number): string | number => `${AreaChartData[i]?.date}`
</script>

<template>
  <!-- :key="colorMode.value" re-renders the component on colorMode change -->
  <AreaChart
    :data="AreaChartData"
    :height="275"
    :categories="categories"
    :y-grid-line="true"
    :x-formatter="xFormatter"
    :curve-type="CurveType.MonotoneX"
  />
</template>
