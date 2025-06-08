<script lang="ts" setup>
definePageMeta({
  layout: 'examples'
})

interface AreaChartItem {
  date: string
  desktop: number
  mobile: number
}

const categories: Record<string, BulletLegendItemInterface> = {
  mobile: { name: 'Mobile' },
}

const BarChartData: AreaChartItem[] = [
  { date: '2024-04-01', desktop: 222, mobile: 15 },
  { date: '2024-04-02', desktop: 180, mobile: 12 },
  { date: '2024-04-03', desktop: 167, mobile: 9 },
  { date: '2024-04-04', desktop: 172, mobile: 18 },
  { date: '2024-04-05', desktop: 184, mobile: 22 },
  { date: '2024-04-06', desktop: 195, mobile: 16 },
  { date: '2024-04-07', desktop: 198, mobile: 14 },
  { date: '2024-04-08', desktop: 205, mobile: 19 },
  { date: '2024-04-09', desktop: 210, mobile: 21 },
  { date: '2024-04-10', desktop: 219, mobile: 17 },
  { date: '2024-04-11', desktop: 224, mobile: 13 },
  { date: '2024-04-12', desktop: 230, mobile: 20 },
]

const xFormatter = (i: number): string | number => {
  if (!BarChartData[i]?.date) {
    return ''
  }
  const date = new Date(BarChartData[i]?.date)
  return `${date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })}`
}

const userId = ref('admin')
const actual = ref('8,110.15')
const forecasted = ref('10,230.25')
const lastInvoiceDate = ref('Sept 20, 2024')
</script>
<template>
  <div class="mx-auto max-w-3xl p-4">
    <div class="mb-4 flex items-center justify-between border-b border-(--ui-border) pb-4">
      <div>
        <h2 class="text-xl font-semibold">收益监控</h2>
        <p class="mt-1 text-sm">
          <span class="text-(--ui-text-muted)">User ID: </span>{{ userId }}
        </p>
      </div>

      <div class="grid grid-cols-3 gap-6 text-right">
        <div>
          <p class="mb-1 text-sm text-(--ui-text-muted)">现实</p>
          <p class="font-medium">${{ actual }}</p>
        </div>
        <div>
          <p class="mb-1 text-sm text-(--ui-text-muted)">预报</p>
          <p class="font-medium">${{ forecasted }}</p>
        </div>
        <div>
          <p class="mb-1 text-sm text-(--ui-text-muted)">上一张票</p>
          <p class="font-medium">
            {{ lastInvoiceDate }}
          </p>
        </div>
      </div>
    </div>

    <BarChart 
      :data="BarChartData" 
      :height="320" 
      :categories="categories" 
      :y-axis="['mobile']" 
      :group-padding="0"
      :bar-padding="0.2" 
      :yNumTicks="4" 
      :yGridLine="true" 
      :x-formatter="xFormatter"
      :legend-position="LegendPosition.Top" />
  </div>
</template>