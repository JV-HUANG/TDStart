<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'examples'
})

import { VueUi3dBar } from "vue-data-ui";
import "vue-data-ui/style.css";

const config = ref({ "style": { "fontFamily": "inherit", "shape": "bar", "chart": { "animation": { "use": true, "speed": 1, "acceleration": 1 }, "backgroundColor": "#2A2A2A", "color": "#CCCCCC", "bar": { "color": "#5f8bee", "stroke": "#5f8bee", "strokeWidth": 0.7, "shadeColor": "#2D353C" }, "box": { "stroke": "#CCCCCC", "strokeWidth": 0.7, "strokeDasharray": 2, "dimensions": { "width": 160, "height": 326, "top": 27, "bottom": 9, "left": 24, "right": 24, "perspective": 18 } }, "title": { "text": "专卖店收入", "color": "#CCCCCC", "fontSize": 20, "bold": true, "subtitle": { "color": "#A1A1A1", "text": "2025", "fontSize": 16, "bold": false } }, "legend": { "showDefault": true, "fontSize": 10, "color": "#CCCCCC", "bold": false, "roundingValue": 0, "roundingPercentage": 0, "prefix": "", "suffix": "k€", "hideUnderPercentage": 3 }, "dataLabel": { "show": true, "bold": true, "color": "#5f8bee", "fontSize": 12, "rounding": 1 } } }, "userOptions": { "show": true }, "table": { "show": false, "responsiveBreakpoint": 300, "columnNames": { "series": "Series", "value": "Value", "percentage": "Percentage" }, "th": { "backgroundColor": "#2A2A2A", "color": "#CCCCCC", "outline": "none" }, "td": { "backgroundColor": "#2A2A2A", "color": "#CCCCCC", "outline": "none", "roundingValue": 0, "roundingPercentage": 0 } } });

const dataset = ref({ "series": [{ "name": "巴西", "value": 153, "color": "#42d392", "breakdown": [{ "name": "圣保罗", "value": 90 }, { "name": "里约热内卢", "value": 50 }, { "name": "巴西利亚", "value": 13 }] }, { "name": "法国", "value": 255, "color": "#6376DD", "breakdown": [{ "name": "巴黎", "value": 150 }, { "name": "里昂", "value": 55 }, { "name": "马赛", "value": 50 }] }, { "name": "印度", "value": 113, "color": "#d98320", "breakdown": [{ "name": "孟买", "value": 75 }, { "name": "德里", "value": 25 }, { "name": "班加罗尔", "value": 13 }] }, { "name": "日本", "value": 290, "color": "#d94126", "breakdown": [{ "name": "东京", "value": 220 }, { "name": "横滨", "value": 50 }, { "name": "大阪", "value": 20 }] }, { "name": "德国", "value": 275, "color": "#f5ee38", "breakdown": [{ "name": "柏林", "value": 100 }, { "name": "汉堡", "value": 90 }, { "name": "慕尼黑", "value": 85 }] }] });

</script>

<template>
  <!-- 将组件放置在一个具有指定宽度的 div 中 -->
  <label class="text-h4">
    <a href="https://vue-data-ui.graphieros.com/examples" target="_blank">
      https://vue-data-ui.graphieros.com/examples
    </a>
  </label>
  <div class="h-full w-full">
    <VueUi3dBar :dataset="dataset" :config="config" />
  </div>
</template>