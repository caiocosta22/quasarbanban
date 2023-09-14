<script setup>
</script>

<template lang = "pug">
q-toolbar.q-pa-sm.row.justify-between.q-gutter-xl.flex
  div.q-pl-xl.flex
    q-img(
    src="../../../src/assets/images/logo.png"
    spinner-color="white"
    style="width: 195px; height: 87px;"
      )
  q-input.q-pr-md(
    v-model="Text"
    debounce="500"
    filled
    placeholder="O que você está procurando?"
    bg-color="white"
    color="black"
    style="width: 740px;"
    ).q-pl-xl
    template(v-slot:append)
      q-icon(name="search")
  div.q-gutter-md.row.flex(style="flex-wrap:nowrap")
    q-icon.q-pb-md
      img(src="../../assets/svg/usericon.svg" style="width: 23px; height: 23px;").q-pl-sm
    a(href="#") Minha conta
    q-icon.q-pb-md
      img(src="../../assets/svg/tagicon.svg" style="width: 23px; height: 23px;").q-pl-sm
    a(href="#") Meus pedidos
    q-icon.q-pb-lg.q-pl-sm
      img(src="../../assets/svg/bagicon.svg" style="width: 28px; height: 23px;")
</template>

<style scoped>
a {
  color: #000;
  font-family: Outfit;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
}
</style>
