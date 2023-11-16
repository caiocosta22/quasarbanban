<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import produto from "src/components/produto.vue";

const route = useRoute();
const router = useRouter();
const $q = useQuasar();

const product = ref({});

async function searchProductById (productId) {
  try {
    product.value = await axios.get(`https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/servicoService/productBySlugEcommerceV2/${productId}/-1`).then(e => e.data);
  } catch (e) {
    $q.notify({
      message: "Erro ao buscar produto, redirecionando para página principal!"
    });
    router.push("/");
  }
}

onMounted(async () => {
  await searchProductById(route.params.produto);
});
</script>

<template lang="pug">
q-page-container
  produto(
    :product="product"
  )
</template>

<style scoped>
</style>
