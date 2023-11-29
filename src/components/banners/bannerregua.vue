<script setup>
import { ref, onBeforeMount, watchEffect } from "vue";
import axios from "axios";

const slide = ref(0);
const itsLoading = ref(true);
const bannerImage = ref("");

const bannersAnuncio = ref([
  {
    fotoWebp: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/banner/2023-10-04T15:44:04.670_110.webp",
    id: 0,
    image: "/images/regua.jpeg",
    ordem: 0,
    posicionamento: "anuncio"
  },
  {
    fotoWebp: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/banner/2023-10-04T15:44:04.670_110.webp",
    id: 0,
    image: "/images/regua.jpeg",
    ordem: 0,
    posicionamento: "anuncio"
  },
  {
    fotoWebp: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/banner/2023-10-04T15:44:04.670_110.webp",
    id: 0,
    image: "/images/regua.jpeg",
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
  } finally {
    bannersAnuncio.value.image = "/images/regua.jpeg";
  }
}

watchEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  bannerImage.value = mediaQuery.matches ? "image" : "fotoWebp";
});

onBeforeMount(async () => {
  itsLoading.value = true;
  await searchTopBanners();
  bannersAnuncio.value.forEach(banner => {
    banner.activeImage = window.innerWidth <= 1024 ? banner.image : banner.fotoWebp;
  });
  itsLoading.value = false;
  // Atualizar as imagens do banner quando a resolução da tela mudar
  window.addEventListener("resize", () => {
    bannersAnuncio.value.forEach(banner => {
      banner.activeImage = window.innerWidth <= 1024 ? banner.image : banner.fotoWebp;
    });
  });
});

</script>

<template lang = "pug">
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
          :img-src="banner.activeImage"
        )
</template>

<style scoped>
.container {
  display:flex;
  flex-wrap:nowrap;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 0;
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
