<script lang="ts" setup>
definePageMeta({
  layout: 'examples'
})

const chartData = [
  {
    date: 'Jan 一月 23',
    subscriptions: 2890,
    downloads: 2338,
  },
  {
    date: 'Feb 二月 23',
    subscriptions: 2756,
    downloads: 2103,
  },
  {
    date: 'Mar 三月 23',
    subscriptions: 3322,
    downloads: 2194,
  },
  {
    date: 'Apr 四月 23',
    subscriptions: 3470,
    downloads: 2108,
  },
  {
    date: 'May 五月 23',
    subscriptions: 3475,
    downloads: 1812,
  },
  {
    date: 'Jun 六月 23',
    subscriptions: 3129,
    downloads: 1726,
  },
  {
    date: 'Jul 七月 23',
    subscriptions: 3490,
    downloads: 1982,
  },
  {
    date: 'Aug 八月 23',
    subscriptions: 2903,
    downloads: 2012,
  },
  {
    date: 'Sep 九月 23',
    subscriptions: 2643,
    downloads: 2342,
  },
  {
    date: 'Oct 十月 23',
    subscriptions: 2837,
    downloads: 2473,
  },
  {
    date: 'Nov 十一月 23',
    subscriptions: 2954,
    downloads: 3848,
  },
  {
    date: 'Dec 十二月 23',
    subscriptions: 3239,
    downloads: 3736,
  },
]

const categories: Record<string, BulletLegendItemInterface> = {
  subscriptions: { name: '订阅', color: '#156F36' },
  downloads: { name: '下载', color: '#22c55e' },
}

const xFormatter = (i: number): string | number => `${chartData[i]?.date}`
</script>
<template>
  <v-card variant="text" class="mx-auto gap-4 px-4 py-4 w-full">
  <LineChart
    :data="chartData"
    :height="275"
    y-label="Sales"
    :x-num-ticks="4"
    :y-num-ticks="4"
    :categories="categories"
    :x-formatter="xFormatter"
    :y-grid-line="true"
    :curve-type="CurveType.Linear"
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