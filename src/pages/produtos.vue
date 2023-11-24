<script setup>
import { onMounted, ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
const route = useRoute();
const router = useRouter();
const $q = useQuasar();

const product = ref({});

import produtospecs from "src/components/produtospecs.vue";

async function searchProductById (productId) {
  try {
    product.value = await axios.get(`https://mitaoficial.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/servicoService/productBySlugEcommerceV2/${productId}/-1`).then(e => e.data);
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
  produtospecs(
    :product="product"
  )
</template>

<style scoped>
</style>
