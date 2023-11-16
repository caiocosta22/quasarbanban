<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

import getCartItems from "src/helpers/getCartItems";
import axios from "src/boot/axios";

const $q = useQuasar();
const router = useRouter();

const pesquisa = ref("");
const prompt = ref(false);
const drawer = ref(false);
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

const quantidadeCarrinho = ref($q.localStorage.getItem("quantidadeCarrinho") || 0);
// const cartId = $q.localStorage.getItem("cartIdBackend");
// const linkcarrinho = `https://banbancalcados.elevarone.com.br/checkout?idCart=${cartId}`;

const props = defineProps({
  dynamicStyle: {
    type: Object,
    default: () => {}
  }
});

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
function redirectToSearchPage () {
  if (pesquisa.value) {
    const url = "/pesquisa/" + pesquisa.value;
    router.push(url);
  }
}

function redirectToHomePage () {
  router.push("/");
}

setInterval(async () => {
  // await getCartItems();
}, 10000);

onBeforeMount(async () => {
  await Promise.all([
    // getCartItems()
    searchCategories()
  ]);
});
</script>

<template lang="pug">
div.container
  q-toolbar.cabecalho
    div.logo
      q-img.imagem(
        src="/images/logo.png"
        spinner-colow="white"
        @click="redirectToHomePage"
        style="cursor:pointer"
      )
    div.containerinput
      q-input(
        v-model="pesquisa"
        rounded
        outlined
        placeholder="O que você está procurando?"
        color="black"
        bg-color="white"
        dense
        class="input"
      )
        template(v-slot:append)
          q-icon(
            size="sm"
            @click="redirectToSearchPage()"
            color="gray"
            name="search"
            style="transition: 1s; cursor:pointer"
          )
    div
      a
        q-icon.cursor-pointer(
          color="black"
          size="xs"
          name="fa-regular fa-user"
        )
        span.texto.cursor-pointer Minha conta
      a
        q-icon.cursor-pointer(
          color="black"
          size="xs"
          name="fa-solid fa-regular fa-tag"
        )
        span.texto.cursor-pointer Meus pedidos
      a
        q-icon.cursor-pointer(
          color="black"
          size="xs"
          name="fa-solid fa-regular fa-bag-shopping"
        )
          q-badge.text-black.text-bold(
            v-if="quantidadeCarrinho"
            floating
          ) {{  quantidadeCarrinho }}
      a.botaomenu
        q-btn(
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          color="black"
        )
.multimenu
  q-drawer(
    behavior="mobile"
    v-model="drawer"
    :width="200"
    :breakpoint="1025"
    bordered
    side="right"
  )
    q-scroll-area(class="fit")
      q-list
        q-item#minibusca(
          clickable
          v-ripple
          style="color:black"
          @click="prompt = true"
        )
          q-item-section BUSCA
          q-icon(
            name="search"
            size="sm"
            style="padding-top:4px"
          )
        q-separator
        template(
          v-for="categorie in categoriesBase"
          :key="categorie.name"
        )
          q-item(
            clickable :active="categorie.name === 'Outbox'" v-ripple
            style="color:black;"
            @click="openCategoryPage(categorie)"
          )
            q-item-section {{ categorie.name }}
          q-separator
    q-dialog(
      v-model="prompt"
    )
      q-card(
        style="min-width:350px"
      )
        q-card-section.row.items-center
          div.h6 O que está buscando?
          q-space
          q-btn(
            icon="close"
            flat
            round
            dense
            v-close-popup
          )
        q-card-section.q-pt-none
          q-input(
            dense
            v-model="pesquisa"
            autofocus @keyup.enter="prompt = false"
            color="black"
            label-color="black"
            placeholder="Digite aqui"
            @keypress.enter="redirectToSearchPage()"
            type="search"
            ref="inputRef"
          )
        q-card-actions(
          align="right"
          text-black
        )
          q-btn(
            label="Cancelar"
            v-close-popup
            color="black"
            size="sm"
          )
          q-btn(
            label="Pesquisar"
            v-close-popup
            color="black"
            size="sm"
            @click="redirectToSearchPage()"
          )
</template>

<style scoped>
.cabecalho {
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  flex-grow: 1;
  max-width: 85%;
  margin: 0 auto;
  justify-content:space-between
}
.logo {
  height: 84px;
  width: 144px;
  padding-top: 10px
}
.imagem {
  width: 100%;
  display: block;
}
.containerinput {
  width: 40%;
}
.input {
  color: #828282;
  font-family: Outfit;
  font-size: 16x;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
div>a {
  padding-left: 10px;
}
.q-icon .q-badge {
  background-color: white;
  right: -20px;
  top: -15px
}
.texto {
  color: #000;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  padding-left: 3px
}
@media screen and (min-width: 1024px) {
  .multimenu{
    display:none
  }
  .botaomenu{
    display:none
  }
}
@media screen and (max-width: 1024px) {
  .texto{
    display:none
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  #minibusca {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .texto{
    display:none
  }
  .containerinput {
    display: none;
  }
}
</style>
