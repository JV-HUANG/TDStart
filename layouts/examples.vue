<script setup>
// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

const drawer = ref(true)
const rail = ref(false)
data: () => ({ drawer: null })
/////////////////////////////////////////////
  import { ref } from 'vue'

  const open = ref(['Users'])

  const admins = [
    ['POPULAR MICE', '/examples/base'],
    ['TABLES', '/examples/tables/PopularBooks'],
    ['PRODUCTS', '/examples/products'],
    ['GALLERY', '/examples/gallery'],
    ['VUETIFY CHART', '/examples/chart'],
  ]
  const cruds = [
    ['BASIC LINE', '/examples/charts/BasicLine'],
    ['Area Chart',  '/examples/charts/AreaChart'],
    ['Area Chart Basic',  '/examples/charts/AreaChartBasic'],
    ['Donut Data', '/examples/charts/DonutData'],
    ['Line Chart', '/examples/charts/lineChart'],
  ]
//////////////////////////////////////////////
</script>
<template>
    <v-navigation-drawer width="180" v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list class="mx-auto py-1">
            <v-list-item prepend-avatar="/assets/img/logo.svg" title="Start">
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
        <v-btn prepend-icon="mdi mdi-fullscreen" variant="text" size="small" title="FULL SCREEN"
            @click="drawer = !drawer">
        </v-btn>
        EXAMPLES PAGES
    </AppHeaderBar>
    <v-main>
        <div variant="text" class="flex ma-auto pa-4">
            <v-card class="flex-none px-2 w-1/5">
                <v-img class="text-white" height="150" src="/assets/img/logo.svg" cover>
                    <div class="d-flex flex-column h-100">
                        <v-card-title class="d-flex ga-2 px-2">
                            <v-btn icon="mdi-chevron-left" variant="text"></v-btn>
                            <v-spacer></v-spacer>
                            <v-btn icon="mdi-pencil" variant="text"></v-btn>
                            <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
                        </v-card-title>
                        <v-spacer></v-spacer>
                        <v-card-title class="pb-6 text-center">
                            <div class="text-h5">Ali Conners</div>
                        </v-card-title>
                    </div>
                </v-img>

                <v-list v-model:opened="open">
                    <v-list-item title="HOME" to="/examples"></v-list-item>
                        <v-list-group value="Admin">
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" title="SIMPLE"></v-list-item>
                            </template>
                            <v-list-item v-for="([title, url], i) in admins" :key="i" :prepend-icon="icon"
                                :title="title" :to="url" :value="title"></v-list-item>
                        </v-list-group>
                        <v-list-group value="Actions">
                            <template v-slot:activator="{ props }">
                                <v-list-item v-bind="props" title="VUE CHARTS"></v-list-item>
                            </template>
                            <v-list-item v-for="([title,  url], i) in cruds" :key="i" :prepend-icon="icon"
                                :title="title" :to="url" :value="title"></v-list-item>
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