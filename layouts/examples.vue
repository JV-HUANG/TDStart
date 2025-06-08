<script setup>
import { ref } from 'vue';
const icon = ref('defaultIcon');

// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

const drawer = ref(true)
const rail = ref(false)
data: () => ({ drawer: null })
/////////////////////////////////////////////

const open = ref(['Users'])

const admins = [
    ['受欢迎的鼠标', '/examples/base'],
    ['表格', '/examples/tables/PopularBooks'],
    ['商品', '/examples/products'],
    ['展览厅', '/examples/gallery'],
    ['数据可视化', '/examples/chart'],
]
const cruds = [
    ['基准线', '/examples/charts/BasicLine'],
    ['面积图', '/examples/charts/AreaChart'],
    ['基础区域图', '/examples/charts/AreaChartBasic'],
    ['环形数据', '/examples/charts/DonutData'],
    ['折线图', '/examples/charts/lineChart'],
]
//////////////////////////////////////////////
</script>
<template>
    <v-navigation-drawer width="180" v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list class="mx-auto py-1">
            <v-list-item prepend-avatar="/assets/img/logo.svg" title="哎哟土豆">
                <template v-slot:append>
                    <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <AppRoutesLeftNavbar>
            <div class="text-subtitle-2 text-decoration-overline" style="text-align: center;">
                ACTIVE
            </div>
        </AppRoutesLeftNavbar>
    </v-navigation-drawer>
    <AppHeaderBar>
        <v-btn icon="mdi mdi-fullscreen" variant="text" size="small" title="FULL SCREEN" @click="drawer = !drawer"></v-btn>
        <span class="text-subtitle-2">示例页面</span>
    </AppHeaderBar>
    <v-main>
        <div variant="text" class="flex ma-auto pa-4">
            <v-card class="flex-none px-2 w-1/5">
                <v-img class="text-white" height="120" src="/assets/img/logo.svg" cover>
                    <div class="d-flex flex-column h-100">
                        <v-card-title class="d-flex ga-2 px-2">
                            <v-btn icon="mdi-chevron-left" variant="text"></v-btn>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-pencil" variant="text"></v-btn>
                            <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
                        </v-card-title>
                        <v-spacer></v-spacer>
                        <v-card-title class="pb-6 text-center">
                            <div class="text-h6">YOUR NAME</div>
                        </v-card-title>
                    </div>
                </v-img>
                <v-list v-model:opened="open">
                    <v-list-item title="示例首页" to="/examples"></v-list-item>
                    <v-list-group value="Admin">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="示例"></v-list-item>
                        </template>
                        <v-list-item v-for="([title, url], i) in admins" :key="i" :title="title"
                            :to="url" :value="title"></v-list-item>
                    </v-list-group>
                    <v-list-group value="Actions">
                        <template v-slot:activator="{ props }">
                            <v-list-item v-bind="props" title="数据可视化"></v-list-item>
                        </template>
                        <v-list-item v-for="([title, url], i) in cruds" :key="i" :title="title"
                            :to="url" :value="title"></v-list-item>
                    </v-list-group>
                </v-list>
            </v-card>
            <div class="grow">
                <!--  -->
                <!-- 在页面切换时显示Nuxt进度指示器-->
                <NuxtLoadingIndicator />
                <slot />
            </div>
        </div>
    </v-main>
</template>