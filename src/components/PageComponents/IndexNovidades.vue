<script setup>
import { ref, computed } from "vue";

const currentOffset = ref(0);
const windowSize = 4;
const paginationFactor = 220;
const items = ref([
  {
    name: "Tamanco Feminino Opanka Celebrat",
    image: "https://s3-alpha-sig.figma.com/img/03e4/db4a/854eba6a0b706ff9f148e223d336eb8d?Expires=1693180800&Signature=A-LI3Ahb8RLwaXsxV-mXqm6TvGpYHy6zEtGNfTzdT66bRj6XInm7wH~8m4-IiedbAdBhD6tvxPO9UgCC551snmLelc-9m2OBE9DxM6f0qRcoIvLlVKNomYfAhe72b6rxbtyEdFaPA1bV8XO9-0GuiwCsudqOWxQIQjr-XX-zOIFDUMFZ0k4VaaxL3WOonX1VfKJtAlUq1-uEJAZZezUX13wOBefJM3NUyiiCQ36Oo6uWu5hgIjt5NTC-2ofmyT6VEYrxbawY-lmM8HnAWLeqUVpMmJ6PNg09Ybf~Xel3yzypGcv5NxicDJRiVJiCQVQp5Ns9bv-T8zMsBHiuZxuH3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/f48f/7c35/2baec7f3259de0f75a85b0cdd2ceeaa5?Expires=1693180800&Signature=PDcBxKUJMsQYMc01iEi4eMBBCu2miJO1J1yhOVWIUTsaqf4wtx3DTWwTP3dABwAXZ-EePGualsnIVLGHTyLUwRn6p~yhVn5B29TUq1kHkDlcfz26yRvieFIo5POCI66Q-d7jbT9DZBH~jt9sbF7NXZ1ZQf-Lv2o9EtIiou2Z8jqg~d1RKaLGAKnVm2DaPxm58PD1R0IKE~PoNF22JA5-8V4Tx7Awvg5iMlBbS9inl3kyrjDmqbR6qdkWm1zQABMt6TyHLFQJjteHJPUeqATyIUxWO8BKO6kXa3LjxIpawQhvw6aS0nt0YDt8N~drjZRK-UdUZxc3LdOM7erubZGrvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La Grazzie",
    image: "https://s3-alpha-sig.figma.com/img/8284/48f6/deda3c26c1edbd62957293375dd55d33?Expires=1693180800&Signature=KHQhAsX3-2cmbpdBuIT~adIlpzKyF7Im6xqJOj8DA76Ohlr17bgCPqu7HyHNhZGXThgo7G-h4zLXm~MYvdyGhVXDXS7~4sZM0j8kbtprVCDWCcf~JI98Rg0vM-GYGQHWxFV-Y36h-ZKz-XFuB1QS3SpP1YZxqv1x1pLVMS-NaSCx9lMyf4tuVeTpqrXQElcXsDgc6a69C5iPuaKic6FBmX2kmx59MlDaEcscjuxfetydKuvNVQfm0Fu4IFND4pw-A6RX2bNkLWZtvhAp2Ch7YR6yAz5lcw2MtdvD8sna8dEQbQQzsM9s0xnCJvu8ZPSofpQjSD4wOAoLvJmWMZM5QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La Grazzie",
    image: "https://s3-alpha-sig.figma.com/img/5254/7833/4121eb9bbe96b713448e3f786f371e99?Expires=1693180800&Signature=Dj-l3h2ab3j-21WiGood8BRXBV~XUcyKvoIpK~CtweNkQpXKz5ImCfllw8D8OhrJXMpgGrt1JcxRS6tSHU9J143t9JgY0IUDSbuIUWuLfAiPwCcW7DG0VXEEVN1o7Vfsmp8XfFE0gABvtd5i8cdIIN-FyBQpnenRxBHYbeCm7uSPkj61mi9KghM6h4CCz93wKSh8HOsUQGB9ynsgzrH-uiXHO0BDUDKyIYTzoFnu4nKwYeB5mR8zJsOwZux6dxOT6GbAzE8M1l5Xua42RiZjxfJBRfssiaOUi-i1y~BDEFo76STz58Wtdr~It3CbDZ1cA84simBMNOvMg6xxbZe4YQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Tamanco Feminino Opanka Celebrat",
    image: "https://s3-alpha-sig.figma.com/img/03e4/db4a/854eba6a0b706ff9f148e223d336eb8d?Expires=1693180800&Signature=A-LI3Ahb8RLwaXsxV-mXqm6TvGpYHy6zEtGNfTzdT66bRj6XInm7wH~8m4-IiedbAdBhD6tvxPO9UgCC551snmLelc-9m2OBE9DxM6f0qRcoIvLlVKNomYfAhe72b6rxbtyEdFaPA1bV8XO9-0GuiwCsudqOWxQIQjr-XX-zOIFDUMFZ0k4VaaxL3WOonX1VfKJtAlUq1-uEJAZZezUX13wOBefJM3NUyiiCQ36Oo6uWu5hgIjt5NTC-2ofmyT6VEYrxbawY-lmM8HnAWLeqUVpMmJ6PNg09Ybf~Xel3yzypGcv5NxicDJRiVJiCQVQp5Ns9bv-T8zMsBHiuZxuH3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La Grazzie",
    image: "https://s3-alpha-sig.figma.com/img/8284/48f6/deda3c26c1edbd62957293375dd55d33?Expires=1693180800&Signature=KHQhAsX3-2cmbpdBuIT~adIlpzKyF7Im6xqJOj8DA76Ohlr17bgCPqu7HyHNhZGXThgo7G-h4zLXm~MYvdyGhVXDXS7~4sZM0j8kbtprVCDWCcf~JI98Rg0vM-GYGQHWxFV-Y36h-ZKz-XFuB1QS3SpP1YZxqv1x1pLVMS-NaSCx9lMyf4tuVeTpqrXQElcXsDgc6a69C5iPuaKic6FBmX2kmx59MlDaEcscjuxfetydKuvNVQfm0Fu4IFND4pw-A6RX2bNkLWZtvhAp2Ch7YR6yAz5lcw2MtdvD8sna8dEQbQQzsM9s0xnCJvu8ZPSofpQjSD4wOAoLvJmWMZM5QQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/f48f/7c35/2baec7f3259de0f75a85b0cdd2ceeaa5?Expires=1693180800&Signature=PDcBxKUJMsQYMc01iEi4eMBBCu2miJO1J1yhOVWIUTsaqf4wtx3DTWwTP3dABwAXZ-EePGualsnIVLGHTyLUwRn6p~yhVn5B29TUq1kHkDlcfz26yRvieFIo5POCI66Q-d7jbT9DZBH~jt9sbF7NXZ1ZQf-Lv2o9EtIiou2Z8jqg~d1RKaLGAKnVm2DaPxm58PD1R0IKE~PoNF22JA5-8V4Tx7Awvg5iMlBbS9inl3kyrjDmqbR6qdkWm1zQABMt6TyHLFQJjteHJPUeqATyIUxWO8BKO6kXa3LjxIpawQhvw6aS0nt0YDt8N~drjZRK-UdUZxc3LdOM7erubZGrvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
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

<style scoped>
img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  height: 200px;
  width: 200px
  }
</style>
