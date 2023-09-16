<script setup>
import { ref } from "vue";

const menuList = [
  {
    icon: "inbox",
    label: "Inbox",
    separator: true
  },
  {
    icon: "send",
    label: "Outbox",
    separator: false
  },
  {
    icon: "delete",
    label: "Trash",
    separator: false
  },
  {
    icon: "error",
    label: "Spam",
    separator: true
  },
  {
    icon: "settings",
    label: "Settings",
    separator: false
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    separator: false
  },
  {
    icon: "help",
    iconColor: "primary",
    label: "Help",
    separator: false
  }
];

const drawer = ref(false);
console.log(drawer);
</script>

<template lang = "pug">
q-toolbar.row.justify-around.flex.q-pb-md.q-pt-md.cabecalho
  a.flex(href="#")
    q-img.logo(
    src="../../../src/assets/images/logo.png"
    spinner-color="white"
    style="width: 195px; height: 87px;"
      )
  q-input.busca(
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
    .botaomenu
      q-btn(
        flat
        @click="drawer = !drawer"
        round
        dense
        icon="menu"
        color="black"
      )
.multimenu
  q-drawer(
    behavior="mobile"
    v-model="drawer"
    :width="200"
    :breakpoint="1025"
    bordered
    dark
  )
    q-scroll-area
      q-list
        template(
          v-for="(menuItem, index) in menuList" :key="index"
        )
          q-item(
            clickable :active="menuItem.label === 'Outbox'" v-ripple
            style="color:black"
          )
            q-item-section(avatar)
              q-icon(:name="menuItem.icon")
            q-item-section {{ menuItem.label }}
          q-separator(:key="'sep' + index"  v-if="menuItem.separator")
</template>

<style scoped>
.aba {
  color: #000;
  font-family: Outfit;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
@media screen and (min-width: 1025px) {
  .multimenu{
    display:none
  }
  .botaomenu{
    display:none
  }
}

@media screen and (max-width: 1025px) {
  .aba{
    display: none;
  }
  .logo{
    width: 115px;
    height: 51px;
  }
}
@media screen and (max-width: 768px) {
  .busca{
    display:none;
  }
  .cabecalho{
    display:flex;
    justify-content: space-between;
  }
}
</style>
