<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const itsLoading = ref(true);
const categoriesBase = ref([
  {
    name: "VIAGENS",
    children: [
      { name: "VIAGEM 1", children: [] },
      { name: "VIAGEM 2", children: [] },
      { name: "VIAGEM 3", children: [] },
      { name: "VIAGEM 4", children: [] },
      { name: "VIAGEM 5", children: [] }
    ]
  }
]);
const menuprincipal = ref([
  {
    categoria1: "MASCULINO",
    categoria2: "FEMININO"
  }
]);
const menusecundario = ref([
  {
    name: "CATEGORIA",
    children: [
      { name: "SUBCATEGORIA" }
    ]
  }
]);

const props = defineProps({
  dynamicStyle: {
    type: Object,
    default: () => {}
  }
});

async function searchCategories () {
  try {
    const data = await axios.get("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/ecommerce/categoriaAutoRelacionada/getAllCategorias").then(e => e.data);
    if (data.length) {
      categoriesBase.value = data.map(row => {
        return { ...row, name: row.descricao, children: [...row.subCategoria], foto: row.fotoUrl };
      });
    }
  } catch (e) {
    console.error(e);
  }
}

async function openCategoryPage (category) {
  if (category.id) {
    const url = "/categorias/" + category.id;
    await router.push(url);
    window.location.reload();
  }
}

onBeforeMount(async () => {
  itsLoading.value = true;
  await searchCategories();
  itsLoading.value = false;
});

</script>

<template lang="pug">
q-toolbar(
  v-show="!itsLoading"
  style="background-color: white;"
)
  div.container
    q-btn(
      color="white"
      label="+TODAS AS CATEGORIAS"
      label-color="black"
      style="box-shadow:none; color:black"
    )
      q-menu.itemmenu.cursor-pointer(
        label="Scale"
        transition-show="scale"
        transition-hide="scale"
        filled
        v-model="menuprincipal"
      )
        q-list(
          style="min-width: 100px"
        )
          q-item-section(
            v-for="categorie in categoriesBase"
            :key="categorie.name"
          )
            p.itemmenu.cursor-pointer.row(
              @click="openCategoryPage(categorie)"
              style=" font-size: 14px;"
              :color="cor"
            ) {{ categorie.name }}
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
}
.itemmenu {
  color: #000;
  text-align: center;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
}
</style>
