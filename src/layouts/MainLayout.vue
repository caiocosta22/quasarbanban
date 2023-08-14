<template lang="pug">
q-layout
  q-header(elevated)
    q-toolbar.topbar
      Topbar
    Cabecalho
</template>

<script setup>
import Topbar from "../components/LayoutComponents/TopbarItems.vue";
import Cabecalho from "../components/LayoutComponents/Cabecalhoitems.vue";
</script>

<style scoped>
.topbar{
  width: 100%;
  height: 48.836px;
  flex-shrink: 0;
  background-color: #000;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin: auto
}
</style>
