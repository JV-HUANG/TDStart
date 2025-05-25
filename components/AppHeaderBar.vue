<script setup>
const items = [
    { text: 'HOME', icon: 'mdi-home-lightning-bolt-outline', href: '/' },
    { text: 'ABOUT', icon: 'mdi-information-box-outline', href: '/about' },
    { text: 'EXAMPLES', icon: 'mdi-file-alert-outline', href: '/examples/' },
]
</script>
<template>
    <v-app-bar class="h-min" flat>
        <template v-slot:prepend>
            <div class="mx-3">
                <v-img :width="60" cover src="/assets/img/logo.m.svg" />
            </div>
        </template>
        <v-divider class="mx-3" inset vertical></v-divider>
        <v-toolbar-title>
            <slot />
        </v-toolbar-title>
        <v-toolbar-items>
            <v-spacer></v-spacer>
            <v-menu transition="slide-y-transition" location="start">
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" :value="i" :prepend-icon="item.icon" :to="item.href">
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
</template>