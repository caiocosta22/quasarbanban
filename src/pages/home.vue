<script setup>
import { onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const loginSalvo = $q.localStorage.getItem("login");
const senhaSalva = $q.localStorage.getItem("senha");
const nomeSalvo = $q.localStorage.getItem("nome");

import bannerfull from "src/components/banners/bannerfull.vue";
import bannerregua from "src/components/banners/bannerregua.vue";
import carouselcategorias from "src/components/carousels/carouselcategorias.vue";
import newsletter from "src/components/newsletter.vue";
import bannermeio from "src/components/banners/bannermeio.vue";
import bannermarca from "src/components/banners/bannermarca.vue";
import carouselprodutos from "src/components/carousels/carouselprodutos.vue";
import carouselprodutos2 from "src/components/carousels/carouselprodutos2.vue";
import carouselprodutos3 from "src/components/carousels/carouselprodutos3.vue";
import carouselprodutos4 from "src/components/carousels/carouselprodutos4.vue";
import bannerinstagram from "src/components/banners/bannerinstagram.vue";

onMounted(() => {
  if (loginSalvo && senhaSalva) {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "check",
      message: `Bem vindo, ${nomeSalvo}`
    });
  }
});
</script>

<template lang="pug">
q-page-container
  bannerfull
  bannerregua
  carouselprodutos
  carouselcategorias
  carouselprodutos2
  bannermeio
  carouselprodutos3
  bannermarca
  carouselprodutos4
  newsletter
  bannerinstagram
  bannerregua
</template>

<style scoped>
</style>
