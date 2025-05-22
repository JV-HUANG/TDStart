<script setup>
/////////////////////////////////////
definePageMeta({
  middleware: ['authenticated'],
})
  
const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}
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
    <v-card class="gap-4 mx-auto text-center">
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
    </v-card>
    <br />

    <v-card variant="tonal">
        <h1>WELCOME {{ user.name }}</h1>
        <v-btn @click="logout" variant="tonal">退出网站</v-btn>

        <v-btn @click="awesome = !awesome" variant="text" prepend-icon="mdi-button-cursor">
            天地玄黄
        </v-btn>
        <h1 v-if="awesome">寒来暑往 秋收冬藏</h1>
        <h1 v-else>
             闰余成岁 律吕调阳 云腾致雨 露结为霜!
        </h1>
    </v-card>

    <div class="grid grid-cols-4 gap-4">
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-auto" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2"
                v-bind="props">
                <v-img class="align-end text-white" height="150" src="https://picsum.photos/500/300?image=110" cover>
                    <v-card-title>Top 10 Australian</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                    Number 10
                </v-card-subtitle>
                <v-card-text>
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="tonal" text="Share"></v-btn>
                    <v-btn variant="tonal" text="Explore"></v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-auto" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2"
                v-bind="props">
                <v-img class="align-end text-white" height="150" src="https://picsum.photos/500/300?image=111" cover>
                    <v-card-title>Top 10 Australian</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                    Number 10
                </v-card-subtitle>
                <v-card-text>
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="tonal" text="Share"></v-btn>
                    <v-btn variant="tonal" text="Explore"></v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-auto" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2"
                v-bind="props">
                <v-img class="align-end text-white" height="150" src="https://picsum.photos/500/300?image=12" cover>
                    <v-card-title>Top 10 Australian</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                    Number 10
                </v-card-subtitle>
                <v-card-text>
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="tonal" text="Share"></v-btn>
                    <v-btn variant="tonal" text="Explore"></v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto w-auto" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2"
                v-bind="props">
                <v-img class="align-end text-white" height="150" src="https://picsum.photos/500/300?image=13" cover>
                    <v-card-title>Top 10 Australian</v-card-title>
                </v-img>
                <v-card-subtitle class="pt-4">
                    Number 10
                </v-card-subtitle>
                <v-card-text>
                    <div>Whitehaven Beach</div>
                    <div>Whitsunday Island, Whitsunday Islands</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn variant="tonal" text="Share"></v-btn>
                    <v-btn variant="tonal" text="Explore"></v-btn>
                </v-card-actions>
            </v-card>
        </v-hover>
    </div>
</template>
<style scoped>
.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.6;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>