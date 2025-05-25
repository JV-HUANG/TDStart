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
    name: 'Desktop/PC桌面',
  },
  mobile: {
    name: 'Mobile/移动设备',
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
  <v-card variant="text" class="mx-auto gap-4 px-4 py-4 w-full">
    <!-- :key="colorMode.value" re-renders the component on colorMode change -->
    <AreaChart :data="AreaChartData" :height="275" :categories="categories" :y-grid-line="true"
      :x-formatter="xFormatter" :curve-type="CurveType.MonotoneX" />
  </v-card>
</template>

<style lang="scss">
.css-czc1aa-bullet-legend-component {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>