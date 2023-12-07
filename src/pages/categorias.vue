<script setup>
import { ref, onBeforeMount, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

import Produtos from "../components/tabcategorias.vue";
import categoriasloading from "src/components/loadings/categoriasloading.vue";

const route = useRoute();

const page = ref(1);
const items = ref([]);
const categoriesBase = ref([]);
const itsLoading = ref(true);

const pickedCategories = ref([
  { id: route.params.categoria }
]);

async function findProductsByCategory () {
  try {
    itsLoading.value = true;
    const products = await axios.post("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/servicoService/filtro-produtoV2/-1", {
      tiposServico: [],
      gruposServico: pickedCategories.value,
      marcas: [],
      palavraChave: "",
      page: page.value
    }).then(e => e.data);
    if (products.content.length) {
      products.content = products.content.map(product => {
        return {
          ...product,
          name: product.descricao,
          image: product.fotosServico[0].foto,
          tag: product.promocao
            ? [
              `De R$ ${product.valor}`,
              `Por R$ ${product.precoPromocional}`
            ] : [
              `R$ ${product.valor}`
            ]
        };
      });
      items.value = products;
    }
  } catch (e) {
    console.error("Erro ao buscar produtos da categoria: ", e);
  } finally {
    itsLoading.value = false;
  }
}

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

watch(() => page.value, async () => {
  await findProductsByCategory();
});

watch(() => pickedCategories.value, async () => {
  await findProductsByCategory();
});

onBeforeMount(async () => {
  await Promise.all([
    findProductsByCategory(),
    searchCategories()
  ]);
});

</script>

<template lang="pug">
q-page-container
  template(
    v-if="itsLoading"
  )
    categoriasloading
  template(
    v-if="!itsLoading"
  )
    Produtos(
      @atualizarPage="page = $event"
      :items="items"
      :loading="itsLoading"
      :bannerUrl="bannerUrlCategorie"
    )
</template>

<style scoped>
</style>
