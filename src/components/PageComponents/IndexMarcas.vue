<script setup>
import { ref } from "vue";
const slide = ref("first");
</script>

<template lang="pug">
div(class="q-pa-md" style="padding:20px")
  q-carousel(
    v-model="slide"
    infinite
    arrows
    swipeable
    animated
    padding
    height="77px"
    control-color="black"
    controler-text-color="white"
    )
    q-carousel-slide(name="first" img-src="../../assets/images/Marcas.png" style="width: 85%; display: flex; align-items: center; margin:auto;height: 77px;")
    q-carousel-slide(name="second" img-src="../../assets/images/Marcas.png" style="width: 85%; display: flex; align-items: center; margin:auto;height: 77px;")
</template>
