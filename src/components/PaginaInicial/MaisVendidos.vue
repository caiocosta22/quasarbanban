<script setup>
import { ref, computed } from "vue";

const currentOffset = ref(0);
const windowSize = 4;
const paginationFactor = 220;
import product1 from "../../assets/images/Product1.png";
import product2 from "../../assets/images/Product2.png";
import product3 from "../../assets/images/Product3.png";
import product4 from "../../assets/images/Product4.png";
const items = ref([
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: product1,
    tag: ["179,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sandalia Salto Bloco Feminino Bebece",
    image: product2,
    tag: ["189,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: product3,
    tag: ["R$199,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: product4,
    tag: ["179,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sandalia Salto Bloco Feminino Bebece",
    image: product2,
    tag: ["189,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: product1,
    tag: ["R$199,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: product3,
    tag: ["179,90", "6x de 49,83 sem juros"]
  }
]);

const atEndOfList = computed(() => {
  return currentOffset.value <= (paginationFactor * -1) * (items.value.length - windowSize);
});

const atHeadOfList = computed(() => {
  return currentOffset.value === 0;
});

const moveCarousel = (direction) => {
  if (direction === 1 && !atEndOfList.value) {
    currentOffset.value -= paginationFactor;
  } if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value += paginationFactor;
  }
};
</script>

<template lang="pug">
div.column.q-pa-md
  p.text-bold.text-center.text-h5 Mais vendidos
  .card-carousel-wrapper.justify-center
    q-icon.cursor-pointer.q-mr-md(
      name="chevron_left"
      size="3.5em"
      color="black"
      @click="moveCarousel(-1)"
    )
    .card-carousel
      .card-carousel--overflow-container
        .card-carousel-cards(:style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}")
          .card-carousel--card(v-for="item in items" :key="item")
            img(:src="item.image")
            .card-carousel--card--footer.text-center.q-pa-sm.text-center.text-black
              p {{ item.name }}
              p.tag.text-bold(v-for="(tag,index) in item.tag" :key="index" :class="index > 0 ? 'secondary' : ''") {{ tag }}
    q-icon.cursor-pointer.q-mr-md(
      name="chevron_right"
      size="3.5em"
      color="black"
      @click="moveCarousel(1)"
    )
</template>

<style scoped>
img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  height: 200px;
  width:200px
  }
</style>
