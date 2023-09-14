<script setup>
import { ref, computed } from "vue";

const currentOffset = ref(0);
const windowSize = 4;
const paginationFactor = 220;
const items = ref([
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: "https://s3-alpha-sig.figma.com/img/279d/9b0c/b2f3282d88890b037b0c0f686907d487?Expires=1693180800&Signature=JWO-Sc4f2rSwtZTPM1MH-ZR4eEkgj0Z5ytcoOe8HP9k6xYmttSsrzG1NNdYJqVo60YITWz3jT5XA71FlEhZSfbH8q0byHZmrjZd3dgXhaHsUxZ8qlBZz7dgl3cVJbfw7jPaKAoEiKV8CU2V5F8ovued0WTSHnHPRf6IlskOMMMT-kPMxZIsKMiSqloBUXjUR6qfamPOh-IbF3GZrJZpeCoFTSdQQgUObAexC0MMa~0ScCBfibWTTpb5yhaRYe20DtfBz7hTlWzhLQRUEC7KqTC9ApHg6cpDREUMpAQxOs35WVkKiNQKztN3brqWAnwZoGNCxIT7VX~0V~6tAkep8-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["179,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sandalia Salto Bloco Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/5ff6/f339/02fb39b084faefb9c13f2dd8b2eb1037?Expires=1693180800&Signature=gES865BvYlB0mzsDcXvantQfXTxb6bmkufOOu8esJNioiv-lhWTfrrvg-6ejnMtgeI7x6ocfqSp3a6rKrEd51BVtBCcTdu4ZcH14j11HJYreg14Sx4qT07VHMauGevx~ngtffKprVGkV195ReWlFMhJNRd6XCiVPN4wo-ZDFPpryzBKftfN9B3Z2R1fx6-KI9fsYQq~9lMs~M6MElLZIQqKTl5hgoC3yQj11GqPO3fKLfW2Bt7uwGjaybCHa5ikCXkz8DSFGtJjyeqnI799rSQ3T5WfHuzUneikX3-gL1wy6Hc-E2WXUFaHgmg7dK5xVRpYYl~TM1Dfk9vjByGC3rA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["189,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/1484/4e9f/5c7dd58678236de928f1dfe4265dae40?Expires=1693180800&Signature=f7YVLYwjVZv6jZ7f3MYat~OfqK65sYA9EIkkUCagQPCMsou0KycrvLvcCZMh2ioBFM5nK0jWw-FTenhfWOJwlOFEqvrobdSxKpceCbuDaRqKzGNELlF~soAJw54Lx6nKGUjxS8hHYKAF5oP8Gp~Z69svPnBk5bhvQCVsUmKFYSp9ehZAllTd924mYWPeKIwAyv-pZ-fdLiKCBV~vWzJ-pWko2uXrM7TSb6mpjrWugk5HwAi-iO9y34UIN~msSH5fMv-pQDrUfovrbOaGAHss3dPA~7IqGzgM488O1waSLNI4nvwlUxgw-0vb1Tyauh38kKqA7ckq2pXKvgOiGvFaoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["R$199,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: "https://s3-alpha-sig.figma.com/img/c043/c61d/b7fe8e8cc54b4c4a62c074984b389e03?Expires=1693180800&Signature=HoJ4LA9RLa-5mzsZAwJI3UbgaoG5aGlF-AWXMSid9eHsViXOebI0Bh~VB5w0l1cFO3hO~X8~6BVhjY23hydIO2WrndGPbQgFCqbhFhqX7dbjtnepsV-sL1QzFM1vM59sN6y1OcLXc2Tkf13U3v5ajNZsZbxuVsTk4EcFqsFtBFpDJkn1C3D2XmY0BHCH~M7jhrFPQPGMEQcEAmL3nzfZIneF2PwrLHYJjqVTGY0wQ3uUPTQhvDK~AE~viqxaNzAw2biMfgKxJe7DJ8YUDK31VjqSkMbG7T04Hyz-kP27qSWJhXWXgezrk9erl~QFdbvCW~nCrLpyMLleIuGI~rOFBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["179,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sandalia Salto Bloco Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/1484/4e9f/5c7dd58678236de928f1dfe4265dae40?Expires=1693180800&Signature=f7YVLYwjVZv6jZ7f3MYat~OfqK65sYA9EIkkUCagQPCMsou0KycrvLvcCZMh2ioBFM5nK0jWw-FTenhfWOJwlOFEqvrobdSxKpceCbuDaRqKzGNELlF~soAJw54Lx6nKGUjxS8hHYKAF5oP8Gp~Z69svPnBk5bhvQCVsUmKFYSp9ehZAllTd924mYWPeKIwAyv-pZ-fdLiKCBV~vWzJ-pWko2uXrM7TSb6mpjrWugk5HwAi-iO9y34UIN~msSH5fMv-pQDrUfovrbOaGAHss3dPA~7IqGzgM488O1waSLNI4nvwlUxgw-0vb1Tyauh38kKqA7ckq2pXKvgOiGvFaoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["189,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/1484/4e9f/5c7dd58678236de928f1dfe4265dae40?Expires=1693180800&Signature=f7YVLYwjVZv6jZ7f3MYat~OfqK65sYA9EIkkUCagQPCMsou0KycrvLvcCZMh2ioBFM5nK0jWw-FTenhfWOJwlOFEqvrobdSxKpceCbuDaRqKzGNELlF~soAJw54Lx6nKGUjxS8hHYKAF5oP8Gp~Z69svPnBk5bhvQCVsUmKFYSp9ehZAllTd924mYWPeKIwAyv-pZ-fdLiKCBV~vWzJ-pWko2uXrM7TSb6mpjrWugk5HwAi-iO9y34UIN~msSH5fMv-pQDrUfovrbOaGAHss3dPA~7IqGzgM488O1waSLNI4nvwlUxgw-0vb1Tyauh38kKqA7ckq2pXKvgOiGvFaoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["R$199,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: "https://s3-alpha-sig.figma.com/img/1484/4e9f/5c7dd58678236de928f1dfe4265dae40?Expires=1693180800&Signature=f7YVLYwjVZv6jZ7f3MYat~OfqK65sYA9EIkkUCagQPCMsou0KycrvLvcCZMh2ioBFM5nK0jWw-FTenhfWOJwlOFEqvrobdSxKpceCbuDaRqKzGNELlF~soAJw54Lx6nKGUjxS8hHYKAF5oP8Gp~Z69svPnBk5bhvQCVsUmKFYSp9ehZAllTd924mYWPeKIwAyv-pZ-fdLiKCBV~vWzJ-pWko2uXrM7TSb6mpjrWugk5HwAi-iO9y34UIN~msSH5fMv-pQDrUfovrbOaGAHss3dPA~7IqGzgM488O1waSLNI4nvwlUxgw-0vb1Tyauh38kKqA7ckq2pXKvgOiGvFaoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["179,90", "6x de 49,83 sem juros"]
  }
]);

const atEndOfList = computed(() => {
  return currentOffset.value <= (paginationFactor * -1) * (items.value.length - windowSize);
});

const atHeadOfList = computed(() => {
  return currentOffset.value === 0;
});

const moveCarousel = (direction) => {
  if (direction === 1 && !atEndOfList.value) {
    currentOffset.value -= paginationFactor;
  } if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value += paginationFactor;
  }
};
</script>

<template lang="pug">
.card-carousel-wrapper
  q-icon.cursor-pointer.q-mr-md(
    name="chevron_left"
    size="3.5em"
    color="black"
    @click="moveCarousel(-1)"
  )
  .card-carousel
    .card-carousel--overflow-container
      .card-carousel-cards(:style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}")
        .card-carousel--card(v-for="item in items" :key="item")
          img(:src="item.image")
          .card-carousel--card--footer.text-center.q-pa-sm.text-center.text-black
            p {{ item.name }}
            p.tag.text-bold(v-for="(tag,index) in item.tag" :key="index" :class="index > 0 ? 'secondary' : ''") {{ tag }}
  q-icon.cursor-pointer.q-mr-md(
    name="chevron_right"
    size="3.5em"
    color="black"
    @click="moveCarousel(1)"
  )
</template>

<style scoped>
img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  height: 200px;
  width:200px
  }
</style>
