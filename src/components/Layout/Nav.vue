<script setup>
import { ref } from "vue";
const links = ref([
  "+ TODAS AS CATEGORIAS",
  "FEMININO",
  "MASCULINO",
  "INFANTIL",
  "COLEGIAL",
  "CHINELARIA",
  "ESPORTIVO",
  "ACESSÓRIOS",
  "MARCAS"
]);
const mostrarModal = ref(false);
</script>

<template lang="pug">
div.row
  q-toolbar.bg-white.justify-evenly.q-pa-sm.col-12
    a.text-black.text-bold.text-capitalize.cursor-pointer(
      v-for="link in links"
      :key="link"
    )
      div(v-if=" link === '+ Todas as categorias'" @mouseenter="mostrarModal=true" @mouseout="false") {{ link }}
      div(v-else) {{ link }}
  div.bg-white.col-4.q-ml-lg.absolute.q-mt-xl.text-black(v-if="true" @mouseenter="mostrarModal=true" @mouseout="false")
    p TesteTeste
    p TesteTeste
    p TesteTeste
</template>
<style scoped>
.menu {
  width: 100%;
  height: 49.971px;
  flex-shrink: 0;
  border: 1px solid #e9e9e9;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  display: flex;
  overflow: none;
  padding: 0 95px;
}
 /* a {
  text-transform: uppercase;
}  */
</style>
