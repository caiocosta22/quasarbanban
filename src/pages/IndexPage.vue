<template lang="pug">
q-page-container
  BannerPrincipal
  Carrosel
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
import BannerPrincipal from "../components/PageComponents/Banneritems.vue";
import Carrosel from "../components/PageComponents/Carroselitems.vue";
import Produtos from "../components/PageComponents/IndexProdutos.vue";
import Categorias from "../components/PageComponents/IndexCategorias.vue";
import Novidades from "../components/PageComponents/IndexNovidades.vue";
import Promocoes from "../components/PageComponents/IndexPromocoes.vue";
import Acessados from "../components/PageComponents/IndexAcessados.vue";
import Marcas from "../components/PageComponents/IndexMarcas.vue";
import Chinelaria from "../components/PageComponents/IndexChinelaria.vue";
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
