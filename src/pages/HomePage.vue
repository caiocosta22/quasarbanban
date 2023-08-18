<template lang="pug">
q-page-container
  BannerPrincipal
  FormasPag
  div
    p.titulo Mais vendidos
  Produtos
  div
    p.titulo Escolha por categoria
  Categorias
  div
    p.titulo Chegou na Ban Ban
  Novidades
  div
  Promocoes
  div
    p.titulo Mais vistos
  Acessados
  div
    p.titulo Escolha por Marca
  Marcas
  div
    p.titulo Chinelaria
  Chinelaria

</template>

<script setup>
import BannerPrincipal from "../components/HomePageComponents/Banneritems.vue";
import FormasPag from "../components/HomePageComponents/FormasPag.vue";
import Produtos from "../components/HomePageComponents/Produtos.vue";
import Categorias from "../components/HomePageComponents/Categorias.vue";
import Novidades from "../components/HomePageComponents/Novidades.vue";
import Promocoes from "../components/HomePageComponents/Promocoes.vue";
import Acessados from "../components/HomePageComponents/Acessados.vue";
import Marcas from "../components/HomePageComponents/Marcas.vue";
import Chinelaria from "../components/HomePageComponents/Chinelaria.vue";
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
  padding: 20px 40px 20px 40px;
}
</style>
