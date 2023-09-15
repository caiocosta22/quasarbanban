<script setup>
</script>

<template lang = "pug">
q-toolbar.row.justify-around.flex.q-pb-md.q-pt-md
  a.flex(href="#")
    q-img(
    src="../../../src/assets/images/logo.png"
    spinner-color="white"
    style="width: 195px; height: 87px;"
      )
  q-input(
    v-model="Text"
    debounce="500"
    filled
    placeholder="O que você está procurando?"
    bg-color="white"
    color="black"
    style="width: 680px; box-shadow:none;"
    ).q-pl-sm
    template(v-slot:append)
      q-icon(name="search"
      color="black")
  div.q-pa-md.row.flex(style="flex-wrap:nowrap")
    div.row.flex.q-pa-sm.cursor-pointer(style="flex-wrap:nowrap; text-align:center; align-items:center")
      q-icon.q-pr-sm
        img(src="../../assets/svg/usericon.svg" style="width: 23px; height: 23px;")
      span.aba Minha conta
    div.row.flex.q-pa-sm.cursor-pointer(style="flex-wrap:nowrap; text-align:center; align-items:center")
      q-icon.q-pr-sm
        img(src="../../assets/svg/tagicon.svg" style="width: 23px; height: 23px;")
      span.aba Meus pedidos
    div.row.flex.q-pa-sm.cursor-pointer(style="flex-wrap:nowrap; text-align:center; align-items:center")
      q-icon.q-pb-sm
        img(src="../../assets/svg/bagicon.svg" style="width: 28px; height: 23px;")
</template>

<style scoped>
.aba {
  color: #000;
  font-family: Outfit;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
</style>
