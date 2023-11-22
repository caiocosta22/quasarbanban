<script setup>
import { ref } from "vue";
const produto = ref([
  {
    titulo: "Produto teste",
    miniaturas: [
      {
        foto: "/images/miniaturas/1.png"
      },
      {
        foto: "/images/miniaturas/2.png"
      },
      {
        foto: "/images/miniaturas/3.png"
      },
      {
        foto: "/images/miniaturas/4.png"
      }
    ],
    foto: "/images/sandalia.png",
    valor: 199,
    promocao: true,
    valorpromocao: 100,
    descricaobreve: "A sandália com salto alto tipo bloco e meia pata da Bebecê apresenta um estilo clássico e elegante.",
    variacoes: [
      {
        id: 1,
        cor: "#FF0000",
        tamanho: 30
      },
      {
        id: 2,
        cor: "#000000",
        tamanho: 34
      }
    ]
  }
]);
</script>

<template lang="pug">
div.container
  p(style="font-size: 40px;") AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
</template>

<style scoped>
</style>
