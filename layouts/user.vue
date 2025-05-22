<script setup lang="ts">
// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

import { ref } from 'vue'

</script>
<template>
    <v-main class="h-full">
        <!--  -->
        <!-- 在页面切换时显示Nuxt进度指示器-->
        <NuxtLoadingIndicator />
        <slot />
    </v-main>
</template>