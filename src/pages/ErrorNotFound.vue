<template>
  <div class="fullscreen bg-yellow text-black text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2">
        Opa! nada por aqui
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="black"
        unelevated
        to="/teste"
        label="Página inicial"
        no-caps
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
