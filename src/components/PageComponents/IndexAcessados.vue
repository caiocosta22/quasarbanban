<script setup>
import { ref, computed } from "vue";

const currentOffset = ref(0);
const windowSize = 4;
const paginationFactor = 220;
const items = ref([
  {
    name: "Tênis Esporte Feminino Olympikus Decola",
    image: "https://s3-alpha-sig.figma.com/img/79b0/64d3/0717f2337fb152ae124454008b0bf796?Expires=1693180800&Signature=pRvNBx4Y1~6XgdzAyc-V3FVLfp61pNQhOIDa6wJkuw42BqkpU8cCA-yL7StNdEup2tI7JjMS4s19hgLvFEc1JaoudelWE9AbrAWgfvPNt7hX~G0EOJooSNAsZkKSFG5-2RP4HC9yakmIQlIUIuInRhwrQ7Y7~qn3nFkFXFZIwQVI3vMPufLGEwTb6~ENs-8hwFidBPcSlTiEfRoxz03nLjVnJnv5pQTE--obT8qHTIooTROnc~pQu6NHtOPkrf66SsRqWKiAOAtRmbjmPWKhdY8y38FrCWS1izfYiMZ3xYB2OYpwSQxGZmJb2FJ0IUgpuQi2hcksi3mZE5VSI9C-kg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Tênis Esporte Masculino Olympikus Decola",
    image: "https://s3-alpha-sig.figma.com/img/106c/86cb/12163e0ece53a4542c26c7733aa31591?Expires=1693180800&Signature=aLJ6pqklkDNQ~sSdaxa~IYRk81N1VLX~yonLh3feyvPic2PvxWxzw6VhMCTB4i-WUCDw6jig-ceVx96Ue2XTEfKtmz7pdaCN5~9WzlfZ78EzkLRFtxszis7k3m0Aq6py152bk8Lm-hFqX0CyGpwYJeeBiyTvMcqzA3H1Qr5hywpvXSuz8h5Pa8t39xKwytnhE7vFll-HIoVBRey3rJyg4-PkpJGkK47gRWKTGRbvGFt6kynUI5H-Tbyo6Pkn9g8UWV3Jpjmd8WejCVjXsBchMFjPfDaJcRkMLCUX-pgKfxyBJkL1HoiIe-ZYhxT4l7ly39UVCVoQDTprPKOCDGqi2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Tênis Esporte Masculino Adidas Duramo ",
    image: "https://s3-alpha-sig.figma.com/img/07a3/9836/6258a572c1daf38d8738e15923769eab?Expires=1693180800&Signature=iohDiyiujcPNjVS1sfXKmfFLV21Xd8~CY90pFBtXCioY3grtv4wNfFrgvx7vrqFb7buNVnGktsacAWVA3a3-UOi7NnikMdTmsNgPR8urGZVNbDCdoXFslq18ogR9KwpBD20Lttkd2Oh~m2RYP6T8VlBD9sbD-WCawrw8oYb-sOFwTWP9HFHEq7C7gZ-keQGR~mPFgcBr5j1Bo8a75i7HIdhsrQmG3KpaL6zkcEbd~Eu-g7IgDqteAZPV6DKyGKHD2Fo-Q5PiVJfJbAPNhjIhsDTwK87hYL0PHbvozcvDE9yL6xSLT-C0Q-QjMA8KrbXxspQ73ek1~snO4uoPlxElXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Tênis Esporte Masculino Olympikus Decola",
    image: "https://s3-alpha-sig.figma.com/img/106c/86cb/12163e0ece53a4542c26c7733aa31591?Expires=1693180800&Signature=aLJ6pqklkDNQ~sSdaxa~IYRk81N1VLX~yonLh3feyvPic2PvxWxzw6VhMCTB4i-WUCDw6jig-ceVx96Ue2XTEfKtmz7pdaCN5~9WzlfZ78EzkLRFtxszis7k3m0Aq6py152bk8Lm-hFqX0CyGpwYJeeBiyTvMcqzA3H1Qr5hywpvXSuz8h5Pa8t39xKwytnhE7vFll-HIoVBRey3rJyg4-PkpJGkK47gRWKTGRbvGFt6kynUI5H-Tbyo6Pkn9g8UWV3Jpjmd8WejCVjXsBchMFjPfDaJcRkMLCUX-pgKfxyBJkL1HoiIe-ZYhxT4l7ly39UVCVoQDTprPKOCDGqi2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Tênis Esporte Masculino Adidas Duramo ",
    image: "https://s3-alpha-sig.figma.com/img/07a3/9836/6258a572c1daf38d8738e15923769eab?Expires=1693180800&Signature=iohDiyiujcPNjVS1sfXKmfFLV21Xd8~CY90pFBtXCioY3grtv4wNfFrgvx7vrqFb7buNVnGktsacAWVA3a3-UOi7NnikMdTmsNgPR8urGZVNbDCdoXFslq18ogR9KwpBD20Lttkd2Oh~m2RYP6T8VlBD9sbD-WCawrw8oYb-sOFwTWP9HFHEq7C7gZ-keQGR~mPFgcBr5j1Bo8a75i7HIdhsrQmG3KpaL6zkcEbd~Eu-g7IgDqteAZPV6DKyGKHD2Fo-Q5PiVJfJbAPNhjIhsDTwK87hYL0PHbvozcvDE9yL6xSLT-C0Q-QjMA8KrbXxspQ73ek1~snO4uoPlxElXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Tênis Esporte Masculino Olympikus Decola",
    image: "https://s3-alpha-sig.figma.com/img/106c/86cb/12163e0ece53a4542c26c7733aa31591?Expires=1693180800&Signature=aLJ6pqklkDNQ~sSdaxa~IYRk81N1VLX~yonLh3feyvPic2PvxWxzw6VhMCTB4i-WUCDw6jig-ceVx96Ue2XTEfKtmz7pdaCN5~9WzlfZ78EzkLRFtxszis7k3m0Aq6py152bk8Lm-hFqX0CyGpwYJeeBiyTvMcqzA3H1Qr5hywpvXSuz8h5Pa8t39xKwytnhE7vFll-HIoVBRey3rJyg4-PkpJGkK47gRWKTGRbvGFt6kynUI5H-Tbyo6Pkn9g8UWV3Jpjmd8WejCVjXsBchMFjPfDaJcRkMLCUX-pgKfxyBJkL1HoiIe-ZYhxT4l7ly39UVCVoQDTprPKOCDGqi2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["299,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Tênis Esporte Masculino Adidas Duramo ",
    image: "https://s3-alpha-sig.figma.com/img/07a3/9836/6258a572c1daf38d8738e15923769eab?Expires=1693180800&Signature=iohDiyiujcPNjVS1sfXKmfFLV21Xd8~CY90pFBtXCioY3grtv4wNfFrgvx7vrqFb7buNVnGktsacAWVA3a3-UOi7NnikMdTmsNgPR8urGZVNbDCdoXFslq18ogR9KwpBD20Lttkd2Oh~m2RYP6T8VlBD9sbD-WCawrw8oYb-sOFwTWP9HFHEq7C7gZ-keQGR~mPFgcBr5j1Bo8a75i7HIdhsrQmG3KpaL6zkcEbd~Eu-g7IgDqteAZPV6DKyGKHD2Fo-Q5PiVJfJbAPNhjIhsDTwK87hYL0PHbvozcvDE9yL6xSLT-C0Q-QjMA8KrbXxspQ73ek1~snO4uoPlxElXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
