<script setup lang="ts">
// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

import { ref } from 'vue'

const theme = ref('dark')

function onClick () {
theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const drawer = ref(true)
const rail = ref(false)
data: () => ({ drawer: null })

const items = [
{ text: 'HOME', icon: 'mdi-home-lightning-bolt-outline',  href:'/' },
{ text: 'ABOUT', icon: 'mdi-information-box-outline', href:'/about' },
{ text: 'ROUTES', icon: 'mdi-file-alert-outline', href:'/routes/' },
{ text: 'Recent', icon: 'mdi-file-cloud' },
{ text: 'Offline', icon: 'mdi-file-cloud' },
]
</script>
<template>
    <v-app id="inspire" :theme="theme">
        <v-system-bar>
            <v-spacer></v-spacer>
            <v-btn prepend-icon="mdi mdi-fullscreen" variant="text" size="small" title="FULL SCREEN" @click="drawer = !drawer">
            </v-btn>
            <v-btn variant="text" size="small"
                :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="onClick">
            </v-btn>
        </v-system-bar>
        <v-navigation-drawer width="180" v-model="drawer" :rail="rail" permanent @click="rail = false">
            <v-list class="mx-auto py-1">
                <v-list-item prepend-avatar="/assets/img/logo.svg" title="VERY">
                    <template v-slot:append>
                        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                    </template>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <AppLeftNavbar>
            </AppLeftNavbar>
        </v-navigation-drawer>
        <AppHeaderBar>
            ROUTES PAGES
        </AppHeaderBar>
        <v-main>
            <v-card variant="text" class="ma-auto pa-4">
                <v-row>
                <v-col cols="2">
                    <v-sheet>
                    <v-list>
                        <v-list-item title="INDEX" to="/routes/" link></v-list-item>
                        <v-list-item title="BASE" to="/routes/base" link></v-list-item>
                        <v-list-item title="CHART" to="/routes/chart" link></v-list-item>
                        <v-list-item title="products" to="/routes/products" link></v-list-item>
                    </v-list>
                    </v-sheet>
                </v-col>
                <v-col>
                    <!--  -->
                    <!-- 在页面切换时显示Nuxt进度指示器-->
                    <NuxtLoadingIndicator />
                    <slot />
                </v-col>
                </v-row>
            </v-card>
        </v-main>
    </v-app>
</template>