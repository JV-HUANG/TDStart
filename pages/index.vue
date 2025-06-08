<script setup>
/////////////////////////////////////
definePageMeta({
    middleware: ['authenticated'],
})

const { user, clear: clearSession } = useUserSession()

////////////////////////////////////
const awesome = ref(true)
////////////////////////////////////
const icons = ['mdi-rewind', 'mdi-play', 'mdi-fast-forward']
const items = [
    {
        title: '新品发布',
        text: `这是新片发行周五`,
        subtext: '新发布的歌曲',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg',
    },
    {
        title: '摇滚乐',
        subtext: '最伟大的摇滚金曲',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg',
    },
    {
        title: '温馨的心境',
        text: '环境低音',
        subtext: '轻松舒缓的节奏让你放松下来',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg',
    },
]
const transparent = 'rgba(255, 255, 255, 0)'
</script>
<template>
    <div class="gap-4 mx-auto text-center">
        <v-row align="center" class="fill-height" justify="center">
            <template v-for="(item, i) in items" :key="i">
                <v-col cols="12" md="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2" v-bind="props">
                            <v-img :src="item.img" height="225px" cover>
                                <v-card-title class="text-h6 text-white d-flex flex-column">
                                    <p class="mt-4">
                                        {{ item.title }}
                                    </p>
                                    <div>
                                        <p class="ma-0 text-body-1 font-weight-bold">
                                            {{ item.text }}
                                        </p>
                                        <p class="text-caption font-weight-medium">
                                            {{ item.subtext }}
                                        </p>
                                    </div>
                                </v-card-title>
                                <div class="align-self-center">
                                    <v-btn v-for="(icon, index) in icons" :key="index"
                                        :class="{ 'show-btns': isHovering }" :color="transparent" :icon="icon"
                                        variant="text"></v-btn>
                                </div>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </template>
        </v-row>
    </div>
    <br />
    <v-toolbar>
        <v-toolbar-title>
            <v-btn size="x-large" @click="awesome = !awesome" variant="tonal" prepend-icon="mdi-button-cursor">天地玄黄 宇宙洪荒</v-btn>
            <label v-if="awesome" class="px-6 text-h6">寒来暑往 秋收冬藏</label>
            <label v-else class="px-6 text-h6">闰余成岁 律吕调阳 云腾致雨 露结为霜!</label>
        </v-toolbar-title>
        <template v-slot:append>
            <div class="d-flex ga-1">
                <v-btn icon="mdi-dots-vertical">
                </v-btn>
            </div>
        </template>
    </v-toolbar>
    <div class="grid grid-cols-3 gap-4 px-2 py-2">
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="w-full mx-auto" v-bind="props">
                <v-img src="https://picsum.photos/500/300?image=110"></v-img>
                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        马格诺森林
                    </h2>
                    探索地球上最棒的户外体验.
                </v-card-text>
                <v-card-title>
                    <v-rating :model-value="4" color="orange" density="compact" hover></v-rating>
                </v-card-title>
                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat" :href="'https://picsum.photos/500/300?image=110'" target="_blank">
                        查看更多信息
                    </v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="w-full mx-auto" v-bind="props">
                <v-img src="https://picsum.photos/500/300?image=111"></v-img>
                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        马格诺森林
                    </h2>
                    探索地球上最棒的户外体验.
                </v-card-text>
                <v-card-title>
                    <v-rating :model-value="4" color="orange" density="compact" hover></v-rating>
                </v-card-title>
                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat" :href="'https://picsum.photos/500/300?image=111'" target="_blank">
                        查看更多信息
                    </v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="w-full mx-auto" v-bind="props">
                <v-img src="https://picsum.photos/500/300?image=112"></v-img>
                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        马格诺森林
                    </h2>
                    探索地球上最棒的户外体验..
                </v-card-text>
                <v-card-title>
                    <v-rating :model-value="4" color="orange" density="compact" hover></v-rating>
                </v-card-title>
                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat" :href="'https://picsum.photos/500/300?image=112'" target="_blank">
                        查看更多信息
                    </v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
    </div>
</template>
<style scoped>
.v-card {
    transition: opacity .6s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.8;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>