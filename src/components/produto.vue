<script setup>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const produtos = ref([
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
const options = ref(
  {
    direction: "ttb",
    slidesPerView: 1,
    arrows: false,
    navigation: false,
    height: "680px",
    perPage: 4,
    breakpoints: {
      1738: { perPage: 4, height: "600px" },
      1500: { perPage: 4, height: "500px" },
      1344: { perPage: 4, height: "437px" }
    }
  }
);
console.log(produtos.value[0].miniaturas[0].foto);
</script>

<template lang="pug">
div.container
  div.interno
    div.miniaturas
      Splide(
        :options="options"
      )
        SplideSlide(
          v-for="miniatura in produtos[0].miniaturas"
          :key="miniatura"
        )
          q-img(
            :src="miniatura.foto"
          )
</template>

<style scoped>
.interno{
  width: 85%;
  margin: 0 auto
}
.miniaturas{
  width: 10%;
}
</style>
