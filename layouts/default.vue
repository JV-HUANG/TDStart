<script setup lang="ts">
// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

import { ref } from 'vue'


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
        <AppLeftNavbar>
        </AppLeftNavbar>
    </v-navigation-drawer>
    <AppHeaderBar>
        <v-btn prepend-icon="mdi mdi-fullscreen" variant="text" size="small" title="FULL SCREEN" @click="drawer = !drawer">
        </v-btn>
        DEFAULT LAYOUTS
    </AppHeaderBar>
    <v-main class="h-full">
        <!--  -->
        <!-- 在页面切换时显示Nuxt进度指示器-->
        <NuxtLoadingIndicator />
        <slot />
    </v-main>
    <v-navigation-drawer v-model="drawer" width="64" location="right">
        <v-list :lines="false" density="compact" class="mx-0 px-0 py-0" nav>
            <v-list-item v-for="(item, i) in items" class="mx-0 px-0 py-0" :key="i" :value="item">
                <v-btn variant="text" :to="item.href">
                    <v-icon :icon="item.icon"></v-icon>
                    <v-list-item-title :title="item.text"></v-list-item-title>
                </v-btn>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-footer>
        <v-bottom-navigation mode="shift" horizontal>
            <v-btn><v-icon>mdi-history</v-icon><span>Recents</span></v-btn>
            <v-btn><v-icon>mdi-heart</v-icon><span>Favorites</span></v-btn>
            <v-btn><v-icon>mdi-map-marker</v-icon><span>Nearby</span></v-btn>
        </v-bottom-navigation>
    </v-footer>
</template>