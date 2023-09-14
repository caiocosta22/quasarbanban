<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header(header)
    Topbar
    Cabecalho
    Navbar
  router-view
</template>

<script setup>
import Topbar from "../components/Layout/Topbar.vue";
import Cabecalho from "../components/Layout/Cabecalho.vue";
import Navbar from "../components/Layout/Nav.vue";
</script>
