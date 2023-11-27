<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    banneranuncio
    template(
      v-if="$q.platform.is.desktop"
    )
      cabecalho
    template(
      v-if="$q.platform.is.mobile"
    )
      cabecalhomob
    navegacao
  router-view
  rodape
</template>

<script setup>
// desktop
import cabecalho from "../components/cabecalho.vue";
import navegacao from "src/components/navegacao.vue";
import banneranuncio from "../components/banners/banneranuncio.vue";
import rodape from "src/components/rodape.vue";
// mobile
import cabecalhomob from "src/components/mobile/cabecalhomob.vue";
</script>
