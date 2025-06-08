<script lang="ts" setup>

definePageMeta({
  layout: 'examples'
})

interface AreaChartItem {
  date: string
  ['This year']: number
  ['Last year']: number
}

const categories: Record<string, BulletLegendItemInterface> = {
  'This year': { name: 'This year', color: '#577a9d' },
  'Last year': { name: 'Last year', color: '#22c55e' },
}

const AreaChartData: AreaChartItem[] = [
  {
    date: 'Jan 23',
    'This year': 10200,
    'Last year': 3800,
  },
  {
    date: 'Feb 23',
    'This year': 15100,
    'Last year': 6910,
  },
  {
    date: 'Mar 23',
    'This year': 16100,
    'Last year': 7210,
  },
  {
    date: 'Apr 23',
    'This year': 17100,
    'Last year': 9200,
  },
  {
    date: 'May 23',
    'This year': 24800,
    'Last year': 9100,
  },
  {
    date: 'Jun 23',
    'This year': 20500,
    'Last year': 10210,
  },
  {
    date: 'Jul 23',
    'This year': 22130,
    'Last year': 10810,
  },
  {
    date: 'Aug 23',
    'This year': 28100,
    'Last year': 12120,
  },
  {
    date: 'Sep 23',
    'This year': 31700,
    'Last year': 10620,
  },
  {
    date: 'Oct 23',
    'This year': 32230,
    'Last year': 11350,
  },
  {
    date: 'Nov 23',
    'This year': 42200,
    'Last year': 12550,
  },
  {
    date: 'Dec 23',
    'This year': 59100,
    'Last year': 22150,
  },
]

const xFormatter = (i: number): string | number => `${AreaChartData[i]?.date}`

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
</script>
<template>
  <div class="mx-auto w-full px-20">
    <div class="w-auto">
      <div class="space-y-1">
        <h2 class="text-2xl font-medium">收益</h2>
        <h3 class="text-sm text-(--ui-text-muted)">
          今年同期与去年同期对比
        </h3>
        <br />
      </div>
      <div class="-mt-2 mb-4 grid grid-cols-3 gap-2 border-b border-(--ui-border) pb-4">
        <div>
          <p class="mb-1 text-sm text-(--ui-text-muted)">现实</p>
          <p class="font-medium">$255</p>
        </div>
        <div>
          <p class="mb-1 text-sm text-(--ui-text-muted)">预报</p>
          <p class="font-medium">$300</p>
        </div>
        <div>
          <p class="mb-1 text-sm text-(--ui-text-muted)">上一张发票</p>
          <p class="font-medium">2025-04-12</p>
        </div>
      </div>
      <AreaChart 
        :data="AreaChartData" 
        :height="420" class="h-full w-full"
        :categories="categories" 
        :y-grid-line="true"
        :x-formatter="xFormatter" 
        :y-formatter="(i: number) => `${formatCurrency(i)}`" 
        :x-num-ticks="4" 
        :y-num-ticks="5"
        :curve-type="CurveType.MonotoneX" 
        :legend-position="LegendPosition.Bottom" 
      />
    </div>
  </div>
</template>
