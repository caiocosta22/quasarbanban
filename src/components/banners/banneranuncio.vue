<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";

const slide = ref(0);
const itsLoading = ref(true);

const bannersAnuncio = ref([
  {
    fotoWebp: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/banner/2023-10-04T15:44:04.670_110.webp",
    id: 0,
    image: "",
    ordem: 0,
    posicionamento: "anuncio"
  },
  {
    fotoWebp: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/banner/2023-10-04T15:44:04.670_110.webp",
    id: 0,
    image: "",
    ordem: 0,
    posicionamento: "anuncio"
  },
  {
    fotoWebp: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/banner/2023-10-04T15:44:04.670_110.webp",
    id: 0,
    image: "",
    ordem: 0,
    posicionamento: "anuncio"
  }
]);

async function searchTopBanners () {
  try {
    const banners = await axios.get("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/bannerService/allEcommerce").then(e => e.data);
    if (banners.length) bannersAnuncio.value = banners.filter(banner => banner.posicionamento === "anuncio");
  } catch (e) {
    console.error(e);
  }
}

onBeforeMount(async () => {
  itsLoading.value = true;
  await searchTopBanners();
  itsLoading.value = false;
});
</script>

<template lang = "pug">
div
  template(
    v-if="itsLoading"
  )
    q-skeleton.col(
      heigth="36px"
    )
  template(
    v-else-if="!itsLoading"
  )
    template(
          v-if="$q.platform.is.desktop"
        )
      q-carousel.cursor-pointer(
        animated
        v-model="slide"
        infinite
        swipeable
        :autoplay="2500"
        transition-prev="slide-right"
        transition-next="slide-left"
        style="max-height: 36px;"
      )
        template(
          v-for="(banner, index) in bannersAnuncio"
          :key="index"
        )
          q-carousel-slide.slide(
            :name="index"
            :img-src="banner.fotoWebp"
            style="height: 35px; width: 100%; margin: 0 auto"
          )
    template(
      v-if="$q.platform.is.mobile"
    )
      q-carousel.cursor-pointer(
        animated
        v-model="slide"
        infinite
        swipeable
        :autoplay="2500"
        transition-prev="slide-right"
        transition-next="slide-left"
        style="max-height: 35px;"
      )
        template(
          v-for="(banner, index) in bannersAnuncio"
          :key="index"
        )
          q-carousel-slide.slide(
            :name="index"
            :img-src="banner.fotoWebp"
            style="height: 35px; width: 100%; margin: 0 auto"
          )
</template>

<style scoped>
</style>
