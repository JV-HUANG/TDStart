<script setup lang="ts">
// import type { Title } from '#components'
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

import { ref } from 'vue'

//////////////////////////////////////////////////////
definePageMeta({
    middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()

async function logout() {
    await clearSession()
    await navigateTo('/login')
}
///////////////////////////////////////////////////////
const drawer = ref(null)
const rail = ref(false)
data: () => ({ drawer: null })

//////////////////////////////////////////////////////
import { shallowRef } from 'vue'
const sheet = shallowRef(false)

const collapse = shallowRef(true)
///////////////////////////////////////////////////////
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
        <AppLeftNavbar>
        </AppLeftNavbar>
    </v-navigation-drawer>
    <AppHeaderBar class="text-right">
        <v-chip color="primary" variant="tonal">{{ user.name }}</v-chip>
        <v-btn icon="mdi mdi-fullscreen" variant="text" size="small" title="FULL SCREEN" @click="drawer = !drawer"></v-btn>
        <v-btn icon="mdi mdi-logout" variant="text" size="small" @click="logout"></v-btn>
    </AppHeaderBar>
    <v-main class="h-full">
        <!--  -->
        <!-- 在页面切换时显示Nuxt进度指示器-->
        <NuxtLoadingIndicator />
        <slot />
    </v-main>
    <v-navigation-drawer v-model="drawer" width="72" location="right">
        <v-btn class="text-none" stacked>
            <v-badge color="success" dot>
                <v-icon>mdi-home-outline</v-icon>
                <v-tooltip activator="parent" location="start">首页</v-tooltip>
            </v-badge>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="text-none" stacked>
            <v-icon>mdi-account-multiple-outline</v-icon>
            <v-tooltip activator="parent" location="start">账户</v-tooltip>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="text-none" stacked>
            <v-badge color="error" content="9+">
                <v-icon>mdi-store-outline</v-icon>
                <v-tooltip activator="parent" location="start">商店</v-tooltip>
            </v-badge>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="text-none" stacked>
            <v-badge color="error" content="2">
                <v-icon>mdi-bell-outline</v-icon>
                <v-tooltip activator="parent" location="start">铃声</v-tooltip>
            </v-badge>
        </v-btn>
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
                    <v-btn text="关闭" variant="text" @click="sheet = !sheet"></v-btn>
                    <br>
                    <br>
                    <div>
                        这是一个使用 v-model 而不是 activator 控制的底部表单
                    </div>
                </v-card-text>
            </v-card>
        </v-bottom-sheet>
    </v-footer>
</template>