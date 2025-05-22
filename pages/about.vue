<template>
  <v-breadcrumbs :items="items">
    <template v-slot:prepend>
      <v-icon icon="mdi-home-outline" size="small"></v-icon>
    </template>
  </v-breadcrumbs>
  <hr />
  <v-container>
    <h1 class="text-h2 text-bold">《千字文》</h1>
    <hr />
    <div class="px-12 py-12">
      <article>
        <img class="float-right w-1/4" src="/assets/img/logo.svg" />
        <p class="text-left text-h6 gap-4">
          天地玄黃，宇宙洪荒。
          日月盈昃，辰宿列張。
          寒來暑往，秋收冬藏。
          閏餘成歲，律呂調陽。
          雲騰致雨，露結為霜。
          金生砂礫，玉出昆岡。
          劍號巨闕，珠稱夜光。
          果珍李柰，菜重芥姜。
          海咸河淡，鱗潛羽翔。
          龍師火帝，鳥官人皇。
          始制文字，乃服衣裳。
          推位讓國，有虞陶唐。
          吊民伐罪，周發殷湯。
          坐朝問道，垂拱平章。
          愛育萬物，順天休命。
          都江堰灌，鍾嶺雲開。
          陳寔躬耕，杜預裁詩。
          紀叟將餌，王貢釣詩。
          陶朱公富，白石先生。
          堯舜有子，伊尹格言。
          湯武成王，周公吐哺。
          樹德建言，實命無愧。
          牧野誓盟，風雲會合。
          班超投筆，馬援橫戈。
          孔門弟子，顏回陋巷。
          潛龍勿用，陽關三唱。
          雲行雨施，品物咸章。
          仁慈隱忍，孝弟忠良。
          千章並茂，萬物皆成。
          己所不欲，勿施於人。
          行有不得，皆反求諸己。
          名不正，言不順；言不順，事不成。
          君子慎始，後來者居上。
          良藥苦口，忠言逆耳。
          為人子者，孝當竭力。
          為人父者，愛莫過仁。
          為人兄者，友愛敦厚。
          為人弟者，恭順溫良。
          為人夫者，勤儉持家。
          為人妻者，柔順溫惠。
          為人君者，仁德愛民。
          為人臣者，忠正奉公。
          苟日新，日日新，又日新。
          慎終如始，則無败事。
          見善則遷，有過則改。
          勿以善小而不為，勿以恶小而為之。
          勿濫交，勿輕信，勿妄言。
          守信重約，言必有實。
          見利思義，見危授命。
          詩書易禮，皆為人倫之本。
          立身行道，孝弟為先。
          修身齊家，治國平天下。
          知書達理，方為君子。
          愚者千虑，必有一得。
          智者千言，必有一失。
          山不在高，有仙則名。
          水不在深，有龍則靈。
          斯是陋室，惟吾德馨。
          苔痕上壁，草色入簾青。
          談笑有鴻儒，往來無白丁。
          可以調素琴，閱金經。
          無絲竹之乱耳，無案牘之勞形。
          南陽諸葛亮，西蜀子雲亭。
          孔子雲：何陋之有？</p>
      </article>
      <hr />
      <p class="text-center text-h6">
        《千字文》為南朝梁周興嗣所撰，以一千個不重複的繁體漢字串聯成文，內容涵蓋自然、人文、道德等典故，是古代蒙學重要教材。若需進一步解讀或背景說明，可隨時提出！
      </p>
    </div>
  </v-container>
</template>
<script setup>
definePageMeta({
  middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()

const items = [
  {
    title: 'HOME',
    disabled: false,
    href: '/',
  },
  {
    title: 'ABOUT',
    disabled: true,
    href: '#',
  },
]
</script>