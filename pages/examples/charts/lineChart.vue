<script setup lang="ts">

definePageMeta({
  layout: 'examples'
})

interface SpendingData {
  month: number
  amount: number
}

const chartData = ref<SpendingData[]>([
  { month: 1, amount: 2500 },
  { month: 2, amount: 1500 },
  { month: 3, amount: 3000 },
  { month: 4, amount: 4000 },
  { month: 5, amount: 4500 },
  { month: 6, amount: 2800 },
  { month: 7, amount: 3500 },
  { month: 8, amount: 3800 },
  { month: 9, amount: 2000 },
  { month: 10, amount: 4200 },
  { month: 11, amount: 2200 },
  { month: 12, amount: 1800 },
])

const categories: Record<string, BulletLegendItemInterface> = {
  amount: { name: 'Monthly Spending', color: '#22c55e' },
}

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
  <div class="mx-auto px-10">
    <div class="space-y-1">
      <h3 class="text-sm text-(--ui-text-muted)">当前余额</h3>
      <h2 class="text-2xl font-medium">$43,137.20</h2>
    </div>

    <LineChart class="px-20"
      :data="chartData" 
      :height="320" 
      :categories="categories" 
      :y-axis="['amount']" 
      :y-num-ticks="2"
      :curve-type="CurveType.Basis" 
      :legend-position="LegendPosition.Top" 
      :x-formatter="(i) =>
          new Date(`2025-${chartData[i]?.month}-02`).toLocaleDateString(
            'en-US',
            {
              month: 'short',
            },
          )
        " 
      :y-formatter="formatCurrency" />

    <div class="flex justify-center gap-4">
      <v-btn variant="text">浏览交易记录</v-btn>
    </div>
  </div>
</template>
