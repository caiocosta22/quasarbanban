<script setup>
import { ref, onBeforeMount, onMounted } from "vue";
import axios from "axios";

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

onMounted(async () => {
  itsLoading.value = true;
  await searchTopBanners();
  itsLoading.value = false;

  // Adiciona o script ao DOM
  const script = document.createElement("script");
  script.src = "https://static.elfsight.com/platform/platform.js";
  script.setAttribute("data-use-service-core", "");
  script.defer = true;
  script.onload = initializeElfSightWidget;
  document.head.appendChild(script);
});

function initializeElfSightWidget () {
  // Inicializa o widget ElfSight
  window.script.init();
};
</script>

<template lang = "pug">
div.q-py-lg.justify-center
  p.sessao.justify-center Siga-nos no Instagram
  span.subtitulo @banbancalcados
div.container
  div.interno
    iframe(
      src="https://e11e53be2c4d4a588623fcc0b95134c4.elf.site"
      width="100%"
      class="insta-widget"
      frameborder="0"
      scrolling="no"
      height="410px"
    )
</template>

<style scoped>
.container {
  display:flex;
  flex-wrap:nowrap;
  justify-content: center;
  position: relative;
  width: 100%;
}
.interno {
  width: 85%;
  margin: 0 auto;
  flex-direction: row;
  display: flex;
  align-items: center;
}

.subtitulo {
  color: var(--cor-11, #DA7C00);
  text-align: center;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
}
</style>
