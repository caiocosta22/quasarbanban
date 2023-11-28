<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    banneranuncio
    cabecalho
    navegacao
  router-view
  rodape
</template>

<script setup>
import cabecalho from "../components/cabecalho.vue";
import navegacao from "src/components/navegacao.vue";
import banneranuncio from "../components/banners/banneranuncio.vue";
import rodape from "src/components/rodape.vue";
</script>
