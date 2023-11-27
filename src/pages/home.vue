<template lang="pug">
q-page-container
  bannerfull
  bannerregua
  carouselprodutos
  carouselcategorias
  bannermeio
  bannermarca
  template(
    v-if="$q.platform.is.desktop"
  )
    newsletter
  template(
    v-if="$q.platform.is.mobile"
  )
    newslettermob
  bannerinstagram
  bannerregua
</template>

<script setup>
// desktop
import bannerfull from "src/components/banners/bannerfull.vue";
import bannerregua from "src/components/banners/bannerregua.vue";
import carouselcategorias from "src/components/carousels/carouselcategorias.vue";
import newsletter from "src/components/newsletter.vue";
import bannermeio from "src/components/banners/bannermeio.vue";
import bannermarca from "src/components/banners/bannermarca.vue";
import bannerinstagram from "src/components/banners/bannerinstagram.vue";
import carouselprodutos from "src/components/carousels/carouselprodutos.vue";
// mobile
import newslettermob from "src/components/mobile/newslettermob.vue";
</script>

<style scoped>
</style>
