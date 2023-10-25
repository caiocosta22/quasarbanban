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
div.container
  template(
    v-if="itsLoading"
  )
    q-skeleton.col(
      heigth="120px"
    )
  template(
    v-else-if="!itsLoading"
  )
    div.interno.q-gutter-sm
      div
        q-img.foto(
        src="/images/Promocao1.jpeg"
        )
      div
        q-img.foto(
          src="/images/Promocao2.jpeg"
        )
      div
        q-img.foto(
          src="/images/Promocao3.jpeg"
        )
</template>

<style scoped>
.container {
  display:flex;
  flex-wrap:nowrap;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
}
.interno {
  width: 85%;
  margin: 0 auto;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.interno > div {
  flex: 1 1 420px;
}
.carousel {
  width: 85%;
  margin: 0 auto;
  height: auto;
  cursor: pointer;
}
.foto {
  max-width: 100%;
  display: block;
  max-height: 480px;
  cursor: pointer;
}
</style>
