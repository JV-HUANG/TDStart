<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'examples'
})

const id = ref(1)
const { data: product, pending, error } = await useFetch(() => `https://dummyjson.com/products/${id.value}`)

// const { data: product, pending, error } = await useAsyncData(() => {
//   return $fetch(`https://dummyjson.com/products/${id.value}`)
// }, {
//   watch: [id]
// })

const canDecrease = computed(() => id.value > 1)
</script>

<template>
  <v-card class="mx-auto w-auto text-h5 px-4 py-4">
    输出<code>https://dummyjson.com/products/</code>
    <input v-model="id" type="number" />
    <hr />
    <v-btn variant="tonal" :disabled="!canDecrease" @click="canDecrease ? id-- : null">上一页</v-btn>
    -
    <v-btn variant="tonal" @click="id++">下一页</v-btn>
  </v-card>
  <pre v-if="pending">Fetching...</pre>
  <pre v-else-if="error">{{ error }}</pre>
  <div class="grid grid-flow-col justify-items-center-safe gap-4" v-else>
    <div class="col-span-1">
      <a :href="product.images" target="_blank">
        <img :src="product.thumbnail" />
      </a>
      <hr />
      <img :src="product.meta.qrCode" />
    </div>
    <div class="col-span-2">
      <ul>
        <li>ID:{{ product.id }}</li>
        <li class="text-h4">{{ product.title }}</li>
        <li>描述：{{ product.description }}</li>
        <li>分类：{{ product.category }}</li>
        <li class="text-h3 text-bold">价格：{{ product.price }}</li>
        <li>折扣比例：{{ product.discountPercentage }}</li>
        <li>评分：{{ product.rating }}</li>
        <li>库存：{{ product.stock }}</li>
        <li>标记：{{ product.tags }}</li>
        <li>品牌：{{ product.brand }}</li>
        <li>商品编码：{{ product.sku }}</li>
        <li>重量：{{ product.weight }}</li>
        <li>尺寸：{{ product.dimensions }}</li>
        <li>保修信息：{{ product.warrantyInformation }}</li>
        <li>运送信息：{{ product.shippingInformation }}</li>
        <li>库存状态：{{ product.availabilityStatus }}</li>
        <li>评价：{{ product.reviews }}</li>
        <li>退货政策：{{ product.returnPolicy }}</li>
        <li>最小起订量：{{ product.minimumOrderQuantity }}</li>

        <li>创建时间：{{ product.meta.createdAt }}</li>
        <li>更新于：{{ product.meta.updatedAt }}</li>
        <li>条码：{{ product.meta.barcode }}</li>
      </ul>
    </div>
  </div>
  <v-btn variant="tonal" class="underline" to="/">
    返回首页
  </v-btn>
</template>
<style>
ul li {
  margin: 0;
  padding: 0;
}
</style>