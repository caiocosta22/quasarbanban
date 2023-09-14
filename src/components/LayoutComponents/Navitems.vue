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
const linksmenu = ref([
  "INFANTIL",
  "COLEGIAL",
  "CHINELARIA",
  "ESPORTIVO",
  "ACESSÓRIOS",
  "FEMININO",
  "MASCULINO",
  "INFANTIL",
  "COLEGIAL"
]);
const mostrarModal = ref(false);
</script>

<template lang="pug">
div.row
  q-toolbar.bg-white.justify-evenly.q-pa-sm.col-12
    a.text-black.text-bold.text-capitalize.cursor-pointer(
      v-for="link in links"
      :key="link"
      @mouseenter="mostrarModal = true"
      @mouseleave="mostrarModal = false"
    )
      div(v-if=" link === '+ Todas as categorias'" @mouseenter="mostrarModal=true" @mouseout="false") {{ link }}
      div(v-else) {{ link }}
  div.bg-white.col-5.absolute.text-black.q-ma-xl.q-pa-md(v-if="false" @mouseenter="mostrarModal=true" @mouseleave="false"
  style="flex-wrap: wrap;")
    a.text-black.text-bold.text-capitalize.cursor-pointer.column.q-pa-sm.col(
      v-for ="linkmenu in linksmenu"
      :key="linkmenu"
    ) {{ linkmenu }}
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
