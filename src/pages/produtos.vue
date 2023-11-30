<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import produtospecs from "src/components/produtospecs.vue";
import produtosloading from "src/components/loadings/produtosloading.vue";

const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const itsLoading = ref(false);
const product = ref({});

async function searchProductById (productId) {
  try {
    itsLoading.value = false;
    product.value = await axios.get(`https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/servicoService/productBySlugEcommerceV2/${productId}/-1`).then(e => e.data);
  } catch (e) {
    $q.notify({
      message: "Erro ao buscar produto, redirecionando para página principal!"
    });
    router.push("/");
  } finally {
    itsLoading.value = true;
  }
}

onMounted(async () => {
  await searchProductById(route.params.produto);
});

</script>

<template lang="pug">
q-page-container
  produtospecs(
    v-if="itsLoading"
    :product="product"
  )
  produtosloading(
    v-else
  )
</template>

<style scoped>
</style>
