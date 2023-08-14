<script setup>

</script>

<template lang = "pug">
q-toolbar.cabecalho
  div.logo
  div.searchinput
    q-input.searchbox(
      v-model="search"
      debounce="500"
      filled
      placeholder="O que você está procurando?"
      )
  div.minhaconta
    a minha conta
  div.meuspedidos
    a meus pedidos
</template>

<style scoped>
.cabecalho{
  font-family: 'Outfit', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbea2b;
  width: 100%;
  padding: 10px 20px;
  flex-shrink: 0;
  height: 134px;
}
.minhaconta{
  color: #000;
  font-family: Outfit;
  font-size: 14px;
  font-weight: bold;
}
.meuspedidos{
  color: #000;
  font-family: Outfit;
  font-size: 14px;
  font-weight: bold;
}
.searchbox{
  width: 576px;
  background-color: white;
  border-radius: 10px
}
</style>
