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
    if (banners.length) bannersAnuncio.value = banners.filter(banner => banner.posicionamento === "regua");
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
div.q-pt-lg
  .sessao.justify-center Escolha por Marca
  div.container
    template(
      v-if="itsLoading"
    )
      q-skeleton.col(
        heigth="256px"
      )
    template(
      v-else-if="!itsLoading"
    )
      q-carousel.carousel(
        v-model="slide"
        animated
        infinite
        swipeable
        autoplay="true"
        transition-prev="slide-right"
        transition-next="slide-left"
      )
        template(
          v-for="(banner, index) in bannersAnuncio"
          :key="index"
        )
          q-carousel-slide.slide(
            :name="index"
            :img-src="banner.fotoWebp"
          )
</template>

<style scoped>
.container {
  display:flex;
  flex-wrap:nowrap;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom:20px;
  margin-top: 20px;
  aspect-ratio: auto 1920/90;
}
.carousel {
  width: 85%;
  margin: 0 auto;
  height: auto;
  cursor: pointer;
}
.slide {
  max-width: 100%;
  display: block;
}
.sessao{
  color: var(--Cor-2, #000);
  text-align: center;
  font-family: Outfit;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0
}
@media screen and (max-width: 1024px) {
  .container{
    aspect-ratio: auto 1920/180;
  }
}
@media screen and (min-width: 1024px) {
  .container{
    margin: 25px 0 25px 0
  }
}
</style>
