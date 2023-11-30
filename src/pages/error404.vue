<script setup>
</script>

<template lang="pug">
q-page-container
  div.container
    h1 Ops!
    p(style="margin: 0; color: rgba(0,0,0,0.8); font-size: 20px;") Nada encontrado nesta página.
    q-btn(
      class="q-my-xl"
      color="yellow"
      text-color="black"
      unelevated
      to="/"
      label="Página Inicial"
      no-caps
      push
    )
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 80px
}
</style>
