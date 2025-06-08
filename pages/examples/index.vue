<template>
  <v-card class="w-full">
    <v-data-iterator :items="games" :items-per-page="6" :search="search">
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field v-model="search" density="comfortable" placeholder="搜索" prepend-inner-icon="mdi-magnify"
            style="max-width: 300px;" variant="outlined" clearable hide-details>
          </v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col v-for="item in items" :key="item.title" cols="auto" md="4">
              <v-card class="pb-3" border flat>
                <a :href="item.raw.img" target="_blank">
                  <v-img :src="item.raw.img"></v-img>
                </a>
                <v-list-item :subtitle="item.raw.subtitle" class="mb-2">
                  <template v-slot:title>
                    <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                  </template>
                </v-list-item>
                <div class="d-flex justify-space-between px-4">
                  <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                    <v-icon icon="mdi-clock" start></v-icon>
                    <div class="text-truncate">{{ item.raw.duration }}</div>
                  </div>
                  <v-btn class="text-none" :href="item.raw.img" target="_blank" size="small" text="阅读" variant="flat"
                    border>
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal" rounded
            @click="prevPage">
          </v-btn>
          <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>
          <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right" variant="tonal" rounded
            @click="nextPage">
          </v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>
<script setup>

definePageMeta({
  layout: 'examples'
})

import { shallowRef } from 'vue'

const search = shallowRef('')
const games = [
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png',
    title: '科幻射击游戏体验',
    subtitle: '深入一个充满激烈战斗和外星生物遭遇的未来世界。',
    advanced: false,
    duration: '8 分钟',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png',
    title: '开放世界中的史诗冒险',
    subtitle: '踏上穿越广阔、沉浸式景观和任务的旅程。',
    advanced: true,
    duration: '10 分钟',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png',
    title: '在空间站恐怖事件中幸存',
    subtitle: '在这款令人毛骨悚然的生存恐怖游戏中，探索一座闹鬼的空间站。',
    advanced: false,
    duration: '9 分钟',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png',
    title: '霓虹灯下的高速竞速刺激体验',
    subtitle: '在充满未来感的霓虹城市中体验肾上腺素飙升的竞速。',
    advanced: true,
    duration: '12 分钟',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png',
    title: '复古风格平台冒险游戏',
    subtitle: '在这个经典风格的平台游戏中，跳跃和冲刺穿越像素化的世界。',
    advanced: false,
    duration: '11 分钟',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png',
    title: '中世纪战略战争战役',
    subtitle: '在这款策略战争游戏中，率领军队进行史诗般的战斗，征服各个王国。.',
    advanced: true,
    duration: '10 分钟',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png',
    title: '水下VR探险冒险',
    subtitle: '潜入深海，探索水下世界的神秘.',
    advanced: true,
    duration: '11 分钟',
  },
  {
    img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
    title: '1920年代神秘侦探编年史',
    subtitle: '在迷人的1920年代，破解案件，揭开秘密.',
    advanced: false,
    duration: '9 分钟',
  },
]
</script>