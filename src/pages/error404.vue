<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center" style="background-color: rgba(255,255,5,0.9);">
    <div>
      <div>
        <img src="/images/logo.png">
      </div>
      <div style="font-size: 24vh; color: black">
        404
      </div>

      <div class="text-h2" style="opacity:.4; color: black;">
        Opa! Nada encontrado aqui.
      </div>

      <q-btn
        class="q-mt-xl q-pa-md"
        color="white"
        text-color="black"
        unelevated
        to="/"
        label="Página Inicial"
        no-caps
        push
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound"
});
</script>
