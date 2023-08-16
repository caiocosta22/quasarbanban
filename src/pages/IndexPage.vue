<template lang="pug">
q-page-container
  BannerPrincipal
  Carrosel1
  div
    p.titulo Mais vendidos
  Produtos1
</template>

<script setup>
import BannerPrincipal from "../components/PageComponents/Banneritems.vue";
import Carrosel1 from "../components/PageComponents/Carroselitems.vue";
import Produtos1 from "../components/PageComponents/Produtos1.vue";
</script>

<style scoped>
q-page-container{
  display: flex;
  flex-direction: column;
}
.titulo{
  color: var(--cor-2, #000);
  text-align: center;
  font-family: Outfit;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 40px;
}
</style>
