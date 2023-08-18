<script setup>
</script>

<template lang = "pug">
q-toolbar.q-pa-sm.row.justify-between.q-gutter-xl
  q-img(
    src="../../../src/assets/images/logo.png"
    alt=""
    style="width: 195px; height: 87px;"
      ).col-6
  q-input(
    v-model="Text"
    debounce="500"
    filled
    placeholder="O que você está procurando?"
    bg-color="white"
    color="black"
    style="width: 576px;"
    ).col.q-pl-xl
    template(v-slot:append)
      q-icon(name="search")
  div.col-3.q-gutter-md.q-pl-lg
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
