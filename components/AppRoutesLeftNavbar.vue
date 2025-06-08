<script>
</script>
<template>
    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-outline" title="首页" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-post-outline" title="设置" to="/settings"></v-list-item>
        <v-list-item prepend-icon="mdi-post-outline" title="关于" to="/about"></v-list-item>
        <v-list-item prepend-icon="mdi-layers" title="示例" to="/examples/" variant="tonal">
        </v-list-item>
    </v-list>
    <slot />
</template>