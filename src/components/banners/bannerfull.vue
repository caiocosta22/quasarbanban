<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";

const slide = ref(0);
const itsLoading = ref(true);
const autoplay = ref(true);

const bannersCarousel = ref([
  {
    fotoWebp: "/images/Banner.jpeg",
    id: 0,
    image: "",
    ordem: 0,
    posicionamento: "topo"
  },
  {
    fotoWebp: "/images/Banner.jpeg",
    id: 0,
    image: "",
    ordem: 0,
    posicionamento: "topo"
  },
  {
    fotoWebp: "/images/Banner.jpeg",
    id: 0,
    image: "",
    ordem: 0,
    posicionamento: "topo"
  }
]);

async function searchTopBanners () {
  try {
    const banners = await axios.get("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/bannerService/allEcommerce").then(e => e.data);
    if (banners.length) bannersCarousel.value = banners.filter(banner => banner.posicionamento === "topo");
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

<template lang="pug">
div.banner
  template(
    v-if="itsLoading"
  )
    q-skeleton.col(
      heigth="100%"
      width="100%"
    )
  template(
    v-else-if="!itsLoading"
  )
    q-carousel.cursor-pointer.col(
      v-model="slide"
      animated
      infinite
      swipeable
      navigation
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
    )
      template(
          v-slot:navigation-icon="{ active, btnProps, onClick }"
        )
          q-btn(
            v-if="active"
            size="md"
            :icon="btnProps.icon"
            color="orange"
            flat
            round
            dense
            @click="onClick"
          )
          q-btn(
            v-else
            size="sm"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          )
      template(
        v-for="(banner, index) in bannersCarousel"
        :key="index"
      )
        q-carousel-slide.slide.col(
          :name="index"
          :img-src="banner.fotoWebp"
        )
</template>

<style scoped>
.banner{
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  aspect-ratio: auto 1920/504;
  position: relative;
  height: auto;
  width:100%;
}
.slide{
  max-width: 100%;
  display:block;
}
</style>
