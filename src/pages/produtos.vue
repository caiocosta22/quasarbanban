<script setup>
import { ref } from "vue";
// import { useQuasar } from "quasar";
// import { useRoute, useRouter } from "vue-router";
// import axios from "axios";
// const route = useRoute();
// const router = useRouter();
// const $q = useQuasar();
const itsLoading = ref(false);
//
// const product = ref({});
//
import produtospecs from "src/components/produtospecs.vue";
import produtosloading from "src/components/loadings/produtosloading.vue";
//
// async function searchProductById (productId) {
//   try {
//     product.value = await axios.get(`https://mitaoficial.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/servicoService/productBySlugEcommerceV2/$// {productId}/-1`).then(e => e.data);
//   } catch (e) {
//     $q.notify({
//       message: "Erro ao buscar produto, redirecionando para página principal!"
//     });
//     router.push("/");
//   }
// }
//
// onMounted(async () => {
//   await searchProductById(route.params.produto);
// });
</script>

<template lang="pug">
q-page-container
  template(
    v-if="itsLoading"
  )
    produtosloading
  template(
    v-if="!itsLoading"
  )
    produtospecs
</template>

<style scoped>
</style>
