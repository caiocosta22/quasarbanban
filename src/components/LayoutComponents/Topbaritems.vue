<script setup>
import { ref } from "vue";
const fretes = [
  "Frete grátis para Fortaleza, Maracanaú e Caucaia a partir R$100,00",
  "Frete grátis para outros estados a partir de R$200,00"
];
const padrao = ref(fretes[0]);
let contador = 0;
function transicao () {
  if (contador === fretes.length - 1) {
    padrao.value = fretes[contador];
    contador = 0;
  } else {
    padrao.value = fretes[contador];
    contador++;
  }
}
const interval = 5 * 1000;
setInterval(() => {
  transicao();
}, interval);
</script>

<template lang = "pug">
div.textofrete
  a {{ padrao }}
</template>

<style scoped>
header .textofrete {
  color: #fbea2b;
  text-align: center;
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

</style>
