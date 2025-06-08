<template>
  <v-card class="mx-auto w-full">
    <v-list v-model:opened="open">
      <v-list-item title="返回首页" href="/"></v-list-item>
      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="内容">
          </v-list-item>
        </template>
        <v-list-item v-for="([title, url], i) in admins" :key="i" :to="url" :title="title" :value="title">
        </v-list-item>
      </v-list-group>
      <v-list-group value="Actions">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="数据可视化">
          </v-list-item>
        </template>
        <v-list-item v-for="([title, url], i) in cruds" :key="i" :to="url" :title="title" :value="title">
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'

const open = ref(['Admin', 'Actions'])

const admins = [
  ['关于', '/about'],
  ['示例', '/examples'],
]
const cruds = [
  ['表格', '/tables/PopularBooks'],
  ['商品', '/examples/products'],
  ['图库', '/examples/gallery'],
  ['数据可视化', '/examples/chart'],
]
</script>