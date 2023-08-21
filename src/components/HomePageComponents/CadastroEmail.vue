<script setup>
</script>

<template lang="pug">
div.q-pa-lg.row.justify-center.q-gutter-md(style="background-color: black; display:flex;align-items: center; flex-wrap: wrap;")
  div.texto.col-3
    p Cadastre seu e-mail <br> e fique por dentro de todas as nossas ofertas e <br> novidades exclusivas
  q-input(standout v-model="text" label="Nome" bg-color="white" color="orange" label-color="orange" text="black" ).col-3
  q-input(standout v-model="text" label="Email" bg-color="white" color="orange" label-color="orange" ).col-3
  q-btn.q-pa-md(color="orange" text-color="White" label="Enviar" label-color="white" style="width: 180px;").col-3
</template>

<style scoped>
.texto p{
  color: #FFF;
font-family: Outfit;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 110% */
}
</style>
