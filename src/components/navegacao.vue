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
      p.itemmenu + TODAS AS CATEGORIAS
      template(
        v-for="categorie in categoriesBase"
        :key="categorie.name"
      )
        p.itemmenu.cursor-pointer.row(
          @click="openCategoryPage(categorie)"
        ) {{ categorie.name }}
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
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
