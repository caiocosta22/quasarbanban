<script setup>
import { ref } from "vue";
const slide = ref(1);
const autoplay = ref(true);
</script>

<template lang="pug">
q-carousel.carrosel(
  animated
  v-model="slide"
  navigation
  infinite
  :autoplay="autoplay"
  arrows
  transition-prev="slide-right"
  transition-next="slide-left"
  @mouseenter="autoplay = false"
  @mouseleave="autoplay = true")
    q-carousel-slide(:name="1" img-src="../../assets/images/Banner1.png")
    q-carousel-slide(:name="2" img-src="../../assets/images/Banner1.png")
    q-carousel-slide(:name="3" img-src="../../assets/images/Banner1.png")
</template>

<style scoped>
.carrosel{
  height:504px;
  width:100%;
  flex-shrink: 0;
  cursor:pointer;
}
</style>
