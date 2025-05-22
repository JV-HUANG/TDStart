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
        <v-system-bar color="shades">
            <v-spacer></v-spacer>
            <v-btn variant="text" size="small"
                :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="onClick">
            </v-btn>
        </v-system-bar>
        <NuxtLayout>
        <NuxtPage />
        </NuxtLayout>
    </v-app>
</template>
