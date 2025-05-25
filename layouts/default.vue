<script setup lang="ts">
// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

import { ref } from 'vue'

//////////////////////////////////////////////
definePageMeta({
  middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}
/////////////////////////////////////////////
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
/////////////////////////////////////////////
import { shallowRef } from 'vue'
const sheet = shallowRef(false)

const collapse = shallowRef(true)
/////////////////////////////////////////////
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
        <AppLeftNavbar>
        </AppLeftNavbar>
    </v-navigation-drawer>
    <AppHeaderBar class="text-right">
        <span class="text-subtitle-2">{{ user.name }}</span>
        <v-btn icon="mdi mdi-fullscreen" variant="text" size="small" title="FULL SCREEN" @click="drawer = !drawer">
        </v-btn>
        <v-btn icon="mdi mdi-logout" variant="text" size="small" @click="logout"></v-btn>
    </AppHeaderBar>
    <v-main class="h-full">
        <!--  -->
        <!-- 在页面切换时显示Nuxt进度指示器-->
        <NuxtLoadingIndicator />
        <slot />
    </v-main>
    <v-navigation-drawer v-model="drawer" location="right">
        <v-toolbar>
            <v-toolbar-title text="Toolbar"></v-toolbar-title>
            <v-btn icon="mdi-menu"></v-btn>
        </v-toolbar>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel
                v-for="i in 5"
                :key="i"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, "
                title="Item">
            </v-expansion-panel>
        </v-expansion-panels>
    </v-navigation-drawer>
    <v-footer>
        <v-bottom-navigation height="36" horizontal>
            <v-btn size="x-small" @click="sheet = !sheet"><v-icon>mdi-history</v-icon></v-btn>
            <v-btn size="x-small"><v-icon>mdi-heart</v-icon></v-btn>
            <v-btn size="x-small"><v-icon>mdi-map-marker</v-icon></v-btn>
        </v-bottom-navigation>
        <v-bottom-sheet v-model="sheet">
        <v-card class="text-center" height="200">
            <v-card-text>
            <v-btn text="Close" variant="text" @click="sheet = !sheet"></v-btn>
            <br>
            <br>
            <div>
                This is a bottom sheet using the controlled by v-model instead of activator
            </div>
            </v-card-text>
        </v-card>
        </v-bottom-sheet>
    </v-footer>
</template>