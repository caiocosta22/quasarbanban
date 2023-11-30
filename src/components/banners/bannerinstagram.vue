<script setup>
</script>

<template lang = "pug">
div.q-py-lg.justify-center
  p.sessao.justify-center Siga-nos no Instagram
  span.subtitulo @banbancalcados
div.container
  div.interno
    iframe(
      src="https://e11e53be2c4d4a588623fcc0b95134c4.elf.site"
      width="100%"
      class="insta-widget"
      frameborder="0"
      scrolling="no"
      height="410px"
    )
</template>

<style scoped>
.container {
  display:flex;
  flex-wrap:nowrap;
  justify-content: center;
  position: relative;
  width: 100%;
}
.interno {
  width: 85%;
  margin: 0 auto;
  flex-direction: row;
  display: flex;
  align-items: center;
}

.subtitulo {
  color: var(--cor-11, #DA7C00);
  text-align: center;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
}
</style>
