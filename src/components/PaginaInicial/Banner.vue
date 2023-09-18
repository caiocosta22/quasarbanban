<script setup>
import { ref } from "vue";
const slide = ref(1);
const autoplay = ref(true);
</script>

<template lang="pug">
q-carousel.carrosel.cursor-pointer.col(
  animated
  v-model="slide"
  navigation
  infinite
  :autoplay="autoplay"
  arrows
  transition-prev="slide-right"
  transition-next="slide-left"
  @mouseenter="autoplay = false"
  @mouseleave="autoplay = true"
  )
  template(v-slot:navigation-icon="{active, btnProps, onClick}")
    q-btn(v-if="active" :icon="btnProps.icon" color="orange" flat round dense @click="onClick")
    q-btn(v-else  :icon="btnProps.icon" color="white" flat round dense @click="onClick")
  q-carousel-slide.slide.justify-center.col(:name="1" img-src="../../assets/images/Banner.jpeg")
  q-carousel-slide.slide.justify-center.col(:name="2" img-src="../../assets/images/Banner.jpeg")
  q-carousel-slide.slide.justify-center.col(:name="3" img-src="../../assets/images/Banner.jpeg")
</template>

<style scoped>
.carrosel {
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  aspect-ratio: auto 1920/600;
  position: relative;
  height: auto
}
.slide{
  max-width: 100%;
  display:block;
}

@media screen and (min-width: 1027px) and (max-width: 1273px) {

}
</style>
