<script>
</script>
<template>
    <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-outline" title="HOME" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-post-outline" title="ABOUT" to="/about"></v-list-item>
        <v-list-item prepend-icon="mdi-layers" title="EXAMPLE" to="/examples/" variant="tonal">
        </v-list-item>
    </v-list>
    <slot />
</template>