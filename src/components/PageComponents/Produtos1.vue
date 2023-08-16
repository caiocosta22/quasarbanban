<template lang="pug">
script#v-carousel(type="x/template")
  .card-carousel-wrapper
    .card-carousel--nav__left(
      @click="moveCarousel(-1)"
      :disabled="atHeadOfList"
    )
    .card-carousel
      .card-carousel--overflow-container
        .card-carousel-cards(:style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}")
          .card-carousel--card(v-for="item in items" :key="item")
            img(src="https://placehold.it/200x200")
            .card-carousel--card--footer
              p {{ item.name }}
              p.tag(v-for="(tag,index) in item.tag" :key="index" :class="index > 0 ? 'secondary' : ''") {{ tag }}
    .card-carousel--nav__right(
      @click="moveCarousel(1)"
      :disabled="atEndOfList"
    )
</template>

<script setup>
import { ref, computed } from "vue";

const currentOffset = ref(0);
const windowSize = 3;
const paginationFactor = 220;
const items = [
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
    image: "https://source.unsplash.com/200x200?attraction",
    tag: ["Chinese", "$$"]
  },
  {
    name: "Anchor Oyster Bar",
    image: "https://source.unsplash.com/200x200?rose",
    tag: ["Seafood", "Cioppino"]
  },
  {
    name: "Locanda",
    image: "https://source.unsplash.com/200x200?beach",
    tag: ["Italian"]
  },
  {
    name: "Garden Creamery",
    image: "https://source.unsplash.com/200x200?forest",
    tag: ["Ice cream"]
  }
];

const atEndOfList = computed(() => {
  return currentOffset.value <= (paginationFactor * -1) * (items.length - windowSize);
});

const atHeadOfList = computed(() => {
  return currentOffset.value === 0;
});

const moveCarousel = (direction) => {
  if (direction === 1 && !atEndOfList.value) {
    currentOffset.value -= paginationFactor;
  } else if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value += paginationFactor;
  }
};
</script>
