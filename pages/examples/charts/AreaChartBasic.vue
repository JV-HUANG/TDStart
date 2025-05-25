<script lang="ts" setup>
definePageMeta({
  layout: 'examples'
})

interface AreaChartItem {
  month: string
  desktop: number
}

const categories: Record<string, BulletLegendItemInterface> = {
  desktop: { name: 'Desktop', color: '#22c55e' },
}

const AreaChartData: AreaChartItem[] = [
  { month: 'January一月', desktop: 186 },
  { month: 'February二月', desktop: 305 },
  { month: 'March三月', desktop: 237 },
  { month: 'April四月', desktop: 73 },
  { month: 'May五月', desktop: 209 },
  { month: 'June六月', desktop: 214 },
]

const xFormatter = (i: number): string | number => `${AreaChartData[i]?.month}`
</script>
<template>
  <v-card variant="text" class="mx-auto gap-4 px-4 py-4 w-full">
    <AreaChart :data="AreaChartData" :height="275" x-label="Month" :categories="categories" :y-num-ticks="4"
      :x-num-ticks="7" :y-grid-line="true" :legend-position="LegendPosition.Top" :x-formatter="xFormatter" />
  </v-card>
</template>

<style lang="scss">
.css-czc1aa-bullet-legend-component {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>