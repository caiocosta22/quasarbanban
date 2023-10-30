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

function mapCategories (subCategories) {
  if (!subCategories || subCategories.length === 0) {
    return [];
  }
  return subCategories.map(category => {
    return {
      ...category,
      name: category.descricao,
      children: mapCategories(category.subCategoria)
    };
  });
}

async function searchCategories () {
  try {
    const data = await axios.get("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/ecommerce/categoriaAutoRelacionada/getAllCategorias").then(e => e.data);
    if (data.length) {
      categoriesBase.value = data.map(row => {
        return {
          ...row,
          name: row.descricao,
          children: mapCategories(row.subCategoria),
          foto: row.fotoUrl
        };
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
q-toolbar#navegacao(
  v-show="!itsLoading"
  style="background-color: white;"
)
  div.container
    p.itemmenu.row + TODAS AS CATEGORIAS
      q-menu
        q-list(style="min-width: 180px")
          template(v-for="categorie in categoriesBase" :key="categorie.name")
            q-item(clickable)
              q-item-section.text-left.itemmenu {{ categorie.name }}
              template(
                v-if="categorie.children.length > 0"
              )
                q-item-section(
                  side
                )
                  q-icon(
                    name="keyboard_arrow_right"
                  )
              template(v-if="categorie.children.length > 0")
                q-menu(
                  anchor="top end"
                  self="top start"
                )
                  q-list
                    q-item(v-for="subCategory in categorie.children" :key="subCategory. name" clickable)
                      q-item-section.text-left.itemmenu {{ subCategory.name }}
    template(
      v-for="categorie in categoriesBase"
      :key="categorie.name"
    )
      p.itemmenu.row(
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
  text-align: left;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin: 0 auto;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  #navegacao {
    display:none
  }
}
</style>
