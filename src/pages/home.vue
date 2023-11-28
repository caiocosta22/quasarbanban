<template lang="pug">
q-page-container
  bannerfull
  bannerregua
  carouselprodutos
  carouselcategorias
  bannermeio
  bannermarca
  newsletter
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
import carouselprodutos from "src/components/carousels/carouselprodutos.vue";
</script>

<style scoped>
</style>
