<script setup>
import { ref } from "vue";
const links = ref([
  "+ Todas as categorias",
  "Feminino",
  "Masculino",
  "Infantil",
  "Colegial",
  "Chinelaria",
  "Esportivo",
  "Acessórios",
  "Marcas"
  /* span(v-if="link.menu")
      q-btn(color="primary" label="Scale Menu")
        q-menu(
          transition-show="scale"
          transition-hide="scale")
          q-list(style="min-width: 100px")
            q-item(clickable)
              q-item-section(Having fun)
            q-item(clickable)
              q-item-section(Crazy for transitions)
            q-separator
            q-item(clickable)
              q-item-section(Mind blown) */
]);
</script>

<template lang="pug">
q-toolbar.menu
  a(
    v-for="link in links"
    :key="link"
  ) {{ link }}
   span(v-if=" link === '+ Todas as categorias' ")
    q-btn(color="black" label="Scale Menu")
      q-menu(
          transition-show="scale"
          transition-hide="scale"
          )
        q-list(style="min-width: 100px")
          q-item(clickable)
            q-item-section(Teste1)
          q-item(clickable)
            q-item-section(Teste2)
          q-separator
          q-item(clickable)
            q-item-section(Teste3)
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
a {
  color: #000;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
}
</style>
