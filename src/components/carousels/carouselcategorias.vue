<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";

const router = useRouter();

const categoriasCarousel = ref([
  {
    descricao: "CARTEIRAS",
    fotoUrl: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/categoria-autorelacionada-servico/3368imagem2023-09-28T11:56:50.209.png",
    googleCategoriaProduto: "2668 - VestuÃ¡rio e acessÃ³rios > Bolsas, carteiras e estojos > Carteiras e clipes de dinheiro",
    id: 151,
    menuEcommerce: true,
    ordem: 3,
    slug: "carteiras",
    subCategoria: []
  },
  {
    descricao: "BOLSAS",
    fotoUrl: "https://cs210033fff90d2f7ac.blob.core.windows.net/banbancalcados/categoria-autorelacionada-servico/2913imagem2023-09-28T11:53:44.207.png",
    googleCategoriaProduto: "106 - Malas e bolsas > Bolsas a tiracolo",
    id: 159,
    menuEcommerce: true,
    ordem: 11,
    slug: "bolsas",
    subCategoria: []
  }
]);

const settings = ref({
  snapAlign: "start",
  wrapAround: true
});

const breakpoints = ref({
  368: {
    itemsToShow: 3.0
  },
  768: {
    itemsToShow: 6.0
  },
  1024: {
    itemsToShow: 6.0
  },
  1280: {
    itemsToShow: 6.0
  }
});
const itsLoading = ref(true);

async function searchCategories () {
  try {
    const categorias = await axios.get("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/ecommerce/categoriaAutoRelacionada/getAllCategorias").then(e => e.data);
    const categoriascomFoto = categorias.filter(categoria => categoria.fotoUrl);
    if (categorias.length) categoriasCarousel.value = categoriascomFoto;
  } catch (e) {
    console.error(e);
  }
}

function openCategoryPage (categoria) {
  if (categoria.id) {
    const url = "/categorias/" + categoria.id;
    router.push(url);
  }
}

onBeforeMount(async () => {
  itsLoading.value = true;
  await searchCategories();
  itsLoading.value = false;
});

</script>

<template lang="pug">
div.q-py-lg
  .sessao.justify-center Escolha por Categoria
.container
  template(
    v-if="itsLoading"
  )
    div.row(
      style="width: 85%;"
    )
      q-skeleton.col(
        type="square"
        width="100%"
        height="100%"
      )
  template(
    v-else-if="!itsLoading"
  )
    Carousel(
        v-bind="settings"
        :breakpoints="breakpoints"
        v-show="!itsLoading"
        style="width: 85%;"
      )
      Slide(
        v-for="(categoria, index) in categoriasCarousel"
        :key="index"
      )
        div.column.justify-center(
          @click="openCategoryPage(categoria)"
        )
          img.cursor-pointer(
            :name="index"
            :src="categoria.fotoUrl"
          )
          span.titulo {{ categoria.descricao }}
      template(#addons)
        Navigation
</template>

<style scoped>

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
.carousel__slide {
  height: 230px;
  overflow: hidden;
}

.carousel__slide img {
  height: 80%;
  width: 80%;
  margin: 0 auto;
}
.carousel__slide span {
  height: 20%;
}

.carousel__slide .text-black.text-center {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container{
  display:flex;
  flex-wrap:nowrap;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom:20px;
  height: 230px;
}
.titulo{
  color: #333;
  text-align: center;
  font-family: Outfit;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
@media screen and (max-width: 768px) {
.some {
  display: none;
}
}
</style>
