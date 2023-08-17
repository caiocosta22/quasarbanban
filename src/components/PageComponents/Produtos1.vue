<template lang="pug">
.card-carousel-wrapper
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
          .card-carousel--card--footer
            p {{ item.name }}
            p.tag(v-for="(tag,index) in item.tag" :key="index" :class="index > 0 ? 'secondary' : ''") {{ tag }}
  q-icon.cursor-pointer.q-mr-md(
    name="chevron_right"
    size="3.5em"
    color="black"
    @click="moveCarousel(1)"
  )
</template>

<script setup>
import { ref, computed } from "vue";

const currentOffset = ref(0);
const windowSize = 4;
const paginationFactor = 220;
const items = ref([
  {
    name: "Kin Khao",
    image: "https://source.unsplash.com/200x200?girl",
    tag: ["Thai"]
  },
  {
    name: "Jū-Ni",
    image: "https://source.unsplash.com/200x200?natural",
    tag: ["Sushi", "Japanese", "$$$$"]
  },
  {
    name: "Delfina",
    image: "https://source.unsplash.com/200x200?beautiful",
    tag: ["Pizza", "Casual"]
  },
  {
    name: "San Tung",
    image: "https://source.unsplash.com/200x200?beautiful",
    tag: ["Chinese", "$$"]
  },
  {
    name: "Anchor Oyster Bar",
    image: "https://source.unsplash.com/200x200?beautiful",
    tag: ["Seafood", "Cioppino"]
  },
  {
    name: "Locanda",
    image: "https://source.unsplash.com/200x200?beautiful",
    tag: ["Italian"]
  },
  {
    name: "Garden Creamery",
    image: "https://source.unsplash.com/200x200?beautiful",
    tag: ["Ice cream"]
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
  }
  if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value += paginationFactor;
  }
};
</script>
