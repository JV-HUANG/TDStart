<script setup>
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

import { ref } from 'vue'

const theme = ref('dark')

function onClick () {
theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
<template>
    <v-app id="inspire" :theme="theme">
        <v-system-bar>
            <v-spacer></v-spacer>
            <v-btn variant="text" size="small" prepend-icon="mdi-email-multiple-outline"></v-btn>
            <v-btn variant="text" size="small" prepend-icon="mdi-earth"></v-btn>
            <v-btn variant="text" size="small"
                :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="onClick">
            </v-btn>
            <v-btn variant="text" size="small" prepend-icon="mdi-github"
                href="https://github.com/JV-HUANG/TDStart" target="_blank" link></v-btn>
        </v-system-bar>
        <NuxtLayout>
        <NuxtPage />
        </NuxtLayout>
    </v-app>
</template>
