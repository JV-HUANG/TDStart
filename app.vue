<script setup>
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

import { ref } from 'vue'
const dialog = ref(false)

const theme = ref('dark')

function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
<template>
    <v-app id="inspire" :theme="theme">
        <v-system-bar color="shades-dark" window>
            <v-icon class="me-2" icon="mdi-home-outline"></v-icon>
            <span>TDDESKTOP</span>
            <v-spacer></v-spacer>
            <v-btn variant="text" size="small" @click="dialog = true" prepend-icon="mdi-email-multiple-outline"></v-btn>
            <v-dialog v-model="dialog" width="auto">
                <v-card class="mx-auto gap-8">
                    <v-img :aspect-ratio="16 / 9" src="/assets/img/bg.m.svg" cover>
                    </v-img>
                    <v-card-title class="flex-column align-start">
                        <div class="text-h4 mb-2">
                            欢迎登录网站...
                        </div>
                        <div class="text-h6 font-weight-regular text-grey">
                            星期一,下午12:30,大部分时间晴朗
                        </div>
                        <div class="d-flex align-center">
                            <v-avatar class="me-4" size="24">
                                <v-img src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"></v-img>
                            </v-avatar>
                            <span class="text-body-2 text-grey">81° / 62°</span>
                        </div>
                    </v-card-title>
                    <v-card-actions class="gap-8">
                        <v-btn text="取消" variant="plain" prepend-icon="mdi-close"  @click="dialog = false"></v-btn>
                        <v-spacer></v-spacer>
                        <v-btn text="保存" variant="tonal" prepend-icon="mdi-content-save-outline" @click="dialog = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-btn variant="text" size="small" prepend-icon="mdi-account-multiple-outline" href="/settings"></v-btn>
            <v-btn variant="text" size="small"
                :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="onClick">
            </v-btn>
            <v-btn variant="text" size="small" prepend-icon="mdi-github" href="https://github.com/JV-HUANG/TDStart"
                target="_blank" link></v-btn>
        </v-system-bar>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </v-app>
</template>
