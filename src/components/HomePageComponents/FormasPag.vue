<script setup>
import { ref } from "vue";
const slide = ref("first");
</script>

<template lang="pug">
div.q-pa-md.justify-center.q-pb-lg
  q-carousel(
    v-model="slide"
    infinite
    arrows
    swipeable
    animated
    height="79px"
    control-color="black"
    controler-text-color="white"
    )
    q-carousel-slide.q-pr-xl(name="first" img-src="../../assets/images/Carrosel1.png")
    q-carousel-slide.q-pr-xl(name="second" img-src="../../assets/images/Carrosel1.png")

</template>
