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
        title: 'New Releases',
        text: `It's New Release Friday`,
        subtext: 'Newly released songs.',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg',
    },
    {
        title: 'Rock',
        text: 'Greatest Rock Hits',
        subtext: 'Lose yourself in rock tunes.',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg',
    },
    {
        title: 'Mellow Moods',
        text: 'Ambient Bass',
        subtext: 'Chill beats to mellow you out.',
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
    <v-card variant="tonal" class="justify-center mx-auto gap-4 px-2 py-2 text-center">
        <v-btn @click="awesome = !awesome" variant="tonal" prepend-icon="mdi-button-cursor">
            天地玄黄
        </v-btn>
        <h1 v-if="awesome">寒来暑往 秋收冬藏</h1>
        <h1 v-else>
            闰余成岁 律吕调阳 云腾致雨 露结为霜!
        </h1>
    </v-card>

    <div class="grid grid-cols-4 gap-4 px-2 py-2">
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" v-bind="props">
                <v-img src="https://picsum.photos/500/300?image=110"></v-img>
                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        Magento Forests
                    </h2>
                    Travel to the best outdoor experience on planet Earth.
                </v-card-text>
                <v-card-title>
                    <v-rating :model-value="4" color="orange" density="compact" hover></v-rating>
                    <span class="text-primary text-subtitle-2 float-right my-2">64 Reviews</span>
                </v-card-title>
                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat">See more info</v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" v-bind="props">
                <v-img src="https://picsum.photos/500/300?image=111"></v-img>
                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        Magento Forests
                    </h2>
                    Travel to the best outdoor experience on planet Earth.
                </v-card-text>
                <v-card-title>
                    <v-rating :model-value="4" color="orange" density="compact" hover></v-rating>
                    <span class="text-primary text-subtitle-2 float-right my-2">64 Reviews</span>
                </v-card-title>
                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat">See more info</v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" v-bind="props">
                <v-img src="https://picsum.photos/500/300?image=112"></v-img>
                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        Magento Forests
                    </h2>
                    Travel to the best outdoor experience on planet Earth.
                </v-card-text>
                <v-card-title>
                    <v-rating :model-value="4" color="orange" density="compact" hover></v-rating>
                    <span class="text-primary text-subtitle-2 float-right my-2">64 Reviews</span>
                </v-card-title>
                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat">See more info</v-btn>
                </v-overlay>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto" v-bind="props">
                <v-img src="https://picsum.photos/500/300?image=113"></v-img>
                <v-card-text>
                    <h2 class="text-h6 text-primary">
                        Magento Forests
                    </h2>
                    Travel to the best outdoor experience on planet Earth.
                </v-card-text>
                <v-card-title class="align-center justify-center">
                    <v-rating :model-value="4" color="orange" density="compact" hover></v-rating>
                    <span class="text-primary text-subtitle-2 float-right my-2">64 Reviews</span>
                </v-card-title>
                <v-overlay :model-value="!!isHovering" class="align-center justify-center" scrim="#036358" contained>
                    <v-btn variant="flat">See more info</v-btn>
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