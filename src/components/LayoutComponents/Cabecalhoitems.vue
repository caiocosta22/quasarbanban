<script setup>
</script>

<template lang = "pug">
q-toolbar.cabecalho
  div.logo
    q-img(
      src="../../assets/images/logo.png"
      alt=""
      style="width: 195px; height: 87px;"
      )
  div.barrabusca
    q-input(
      v-model="Text"
      debounce="500"
      filled
      placeholder="O que você está procurando?"
      bg-color="white"
      color="black"
      style="width: 576px;"
      )
      template(v-slot:append)
        q-icon(name="search")
  div.menu
    div.minhaconta
      q-icon
        img(src="../../assets/svg/usericon.svg" style="width: 23px; height: 23px; padding-right: 10px;")
      a(href="#") Minha conta
    div.meuspedidos
      q-icon
        img(src="../../assets/svg/tagicon.svg" style="width: 23px; height: 23px; padding-right: 10px;")
      a(href="#") Meus pedidos
    div.sacola
      q-icon
        img(src="../../assets/svg/bagicon.svg" style="width: 28px; height: 23px; padding: 0 10px 5px 0;")
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
  flex-wrap: wrap;
}
a {
  color: #000;
  font-family: Outfit;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}
.menu{
  display: flex;
  padding:10px 100px 10px 10px;
}
.minhaconta{
  justify-content: space-between;
  margin-left: 20px;
  display: block;
  padding: 10px 40px 10px 10px
}
.meuspedidos{
  justify-content: space-between;
  margin-left: 20px;
  display: block;
  padding: 10px 40px 10px 10px
}
.sacola{
  margin-left: 20px;
  display: block;
  padding: 10px 40px 10px 10px
}
.logo{
  padding: 0px 0px 0px 40px;
  display:flex;
  align-items: center;
}
.barrabusca{
  padding: 0px 0px 0px 40px;
}
</style>
