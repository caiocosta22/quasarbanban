<script setup>
</script>

<template lang = "pug">
q-toolbar.cabecalho
  q-img(
    src="../../assets/images/logo.png"
    alt=""
    style="width: 195px; height: 87px;"
    )
  q-input(
    v-model="Text"
    debounce="500"
    filled
    placeholder="O que você está procurando?"
    bg-color="white"
    color="black"
    style="width: 575px;"
    )
    template(v-slot:append)
      q-icon(name="search")
  div.minhaconta
    q-icon
      img(src="../../assets/svg/usericon.svg" style="width: 23px; height: 23px;")
    a Minha conta
  div.meuspedidos
    q-icon
      img(src="../../assets/svg/tagicon.svg" style="width: 23px; height: 23px;")
    a Meus pedidos
  div.sacola
    q-icon
      img(src="../../assets/svg/bagicon.svg" style="width: 28px; height: 22px;")
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
a {
  color: #000;
  font-family: Outfit;
  font-size: 14px;
  font-weight: bold;
}
.minhaconta{
  justify-content: space-between;
}
.meuspedidos{
  justify-content: space-between;
}
</style>
