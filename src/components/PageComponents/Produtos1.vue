<script setup>
import { ref } from "vue";
const slide = ref(1);
</script>

<template lang="pug">
div(class="q-pa-md" style="padding:20px")
  q-carousel(
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      infinite
      animated
      arrows
      height="400px"
      control-color="black"
      controler-text-color="white"
      )
    q-carousel-slide(:name="1" class="column no-wrap")
      div(class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap")
        div(style="height: 307px;")
          q-img(class="rounded-borders col-6 full-height" src="../../assets/images/Product1.png")
          p Texto
        div(style="height: 307px;")
          q-img(class="rounded-borders col-6 full-height" src="../../assets/images/Product2.png")
          p Texto
        div(style="height: 307px;")
          q-img(class="rounded-borders col-6 full-height" src="../../assets/images/Product3.png")
          p Texto
        div(style="height: 307px;")
          q-img(class="rounded-borders col-6 full-height" src="../../assets/images/Product4.png")
          p Texto
</template>
