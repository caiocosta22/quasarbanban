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
  template(
    v-if="$q.platform.is.desktop"
  )
    rodape
  template(
    v-if="$q.platform.is.mobile"
  )
    rodapemob
</template>

<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();
// desktop
import cabecalho from "../components/cabecalho.vue";
import navegacao from "src/components/navegacao.vue";
import banneranuncio from "../components/banners/banneranuncio.vue";
import rodape from "src/components/rodape.vue";
// mobile
import cabecalhomob from "src/components/mobile/cabecalhomob.vue";
import rodapemob from "src/components/mobile/rodapemob.vue";
</script>
