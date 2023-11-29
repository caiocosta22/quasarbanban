<script setup>
import { onMounted } from "vue";
import { useQuasar } from "quasar";
import cabecalho from "../components/cabecalho.vue";
import navegacao from "src/components/navegacao.vue";
import banneranuncio from "../components/banners/banneranuncio.vue";
import rodape from "src/components/rodape.vue";

const $q = useQuasar();

const options = {
  expires: "365d"
};

const politicas = $q.cookies.has("politicas");

function setcookies () {
  $q.cookies.set("politicas", true, options);
}

function showCookieDialog () {
  if (!politicas) {
    $q.dialog({
      message: "Políticas de Privacidade: Ao clicar em Ok, você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar a utilização do site e ajudar nas nossas iniciativas de marketing.",
      ok: {
        push: true,
        color: "black",
        padding: "8px 60px",
        onclick: setcookies
      },
      persistent: true,
      position: "bottom",
      fullWidth: true,
      seamless: true,
      style: {
        background: "rgba(255,255,255,0.8)",
        fontWeight: "600",
        fontSize: "16px",
        textAlign: "left",
        marginBlock: "center"
      },
      square: true
    });
  }
}

onMounted(() => {
  showCookieDialog();
});
</script>

<template lang="pug">
q-layout(view="lHh Lpr lFf")
  q-header
    banneranuncio
    cabecalho
    navegacao
  router-view
  rodape
</template>
