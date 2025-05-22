<script setup lang="ts">
// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

const drawer = ref(true)
const rail = ref(false)
data: () => ({ drawer: null })

const items = [
{ text: 'HOME', icon: 'mdi-home-lightning-bolt-outline',  href:'/' },
{ text: 'ABOUT', icon: 'mdi-information-box-outline', href:'/about' },
{ text: 'EXAMPLES', icon: 'mdi-file-alert-outline', href:'/examples/' },
{ text: 'Recent', icon: 'mdi-file-cloud' },
{ text: 'Offline', icon: 'mdi-file-cloud' },
]
</script>
<template>
    <v-navigation-drawer width="180" v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list class="mx-auto py-1">
            <v-list-item prepend-avatar="/assets/img/logo.svg" title="VERY">
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
        <v-btn prepend-icon="mdi mdi-fullscreen" variant="text" size="small" title="FULL SCREEN" @click="drawer = !drawer">
        </v-btn>
        EXAMPLES PAGES
    </AppHeaderBar>
    <v-main>
        <div variant="text" class="flex ma-auto pa-4">
            <div class="flex-none px-2">
                <v-list>
                    <v-list-item title="INDEX" to="/examples/" link></v-list-item>
                    <v-list-item title="BASE" to="/examples/base" link></v-list-item>
                    <v-list-item title="PRODUCTS" to="/examples/products" link></v-list-item>
                    <v-list-item title="VUETIFY CHART" to="/examples/chart" link></v-list-item>
                    <v-list-item title="NUXT CHARTS">
                        <v-list-item title="BASIC LINE" to="/examples/charts/BasicLine" link></v-list-item>
                        <v-list-item title="Area Chart" to="/examples/charts/AreaChart" link></v-list-item>
                        <v-list-item title="Area Chart Basic" to="/examples/charts/AreaChartBasic" link></v-list-item>
                        <v-list-item title="Donut Data" to="/examples/charts/DonutData" link></v-list-item>
                        <v-list-item title="line Chart" to="/examples/charts/lineChart" link></v-list-item>
                    </v-list-item>
                </v-list>
            </div>
            <div class="grow">
                <!--  -->
                <!-- 在页面切换时显示Nuxt进度指示器-->
                <NuxtLoadingIndicator />
                <slot />
            </div>
        </div>
    </v-main>
</template>