<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    cabecalho
    navegacao
  router-view
</template>

<script setup>
import cabecalho from "../components/cabecalho.vue";
import navegacao from "src/components/navegacao.vue";
</script>
