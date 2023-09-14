<script setup>
import { ref, computed } from "vue";

const currentOffset = ref(0);
const windowSize = 4;
const paginationFactor = 220;
const items = ref([
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: "https://s3-alpha-sig.figma.com/img/7279/a025/2cde24e10a280f33f64c8c5062a91d84?Expires=1693180800&Signature=X3xJ44OoH1uFdPBtUt2j-df~~MukNj5oBKKlCFdV8fZ4NvVW3-Y6xXEqTeDhhhrlOHmvNEA6Q0bl98x7HuGa0gmIRzbHArm~gQ7xw02yGuc2TLFKQ5hmnMGCn6xu0z6mdbXjykyF9ngvmjiG3sG5S90XDglfoGle2y1Rrt6buR0wKeE8I9X7y85j7LGKW1JZg7vvYE5eIIsVrSPLlKKNTQyY4ZD5A-sdObgCMYeR-dOBRqsoN4y1WoPRdEwRrO4AJcf5PuNj0JpqFm1lLaB3-uhIR-B9lHw6crmvDvs~0OQ9CRkKuO5GvCvngoHYi8Xw1tYFZBcbu-3fey5IJ56TYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["179,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sandalia Salto Bloco Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/1c11/ce68/2d8e458e9d461e77b6ac6efcc17aed61?Expires=1693180800&Signature=pt6fJrd-1tcZXqJbeaPYafMi8e~60KX44JPYxxj13ZI66Gkw7YYgVg2LtdGl1Mtq~FF03n9OOYUCw13EuQyQ6LGi4~pCohO8FnGn8YRE2HA9NIdaiMQ1--6geUvD3A1b3UxS4JgAk9kc~yWjbMXTtuevPsfBPrj0LepV9mFlTb1IMJvH7mLj5DfkXh1QBy-Z3rPtcRM8n~XYZDQ02HrpQgRfuLPthodE2WpqSP42mlJTxdr7d9-Ykdidy4Ytg~8lY0TXILP4mpf1ERmimB8oTaU~7l1cAL2DTIMGbRGhIbjRAmHkFzF2h20nd1s6Du170Vyekql8JHJvjUQgudJAxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["189,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/ce8a/4b68/dd5741e046dff4989c39bc1342a72657?Expires=1693180800&Signature=XtUkloBlvlDl6gbD5xTIR8N975qEPLoWL9OczM-qs3bQfFXiVfhrmf~tvHVwatiRT-jHCL0dP2rU7jHnnF2oxPmoX~dEB2xlkqK4oH~chkRbB5SF7EWZh8DTkKBDA5Q4hgdpHdB3G2NqlGNUSxtt7qqlFqIjrez62XjBvdaYpEgz7UbG~QkVhs0~OsMosPufzsqr3Es5cBFWTozk5c7iei2k5Mhx1~9pdTVl4dPjDger~0rU9OFsDxh5brPngjjHvz2Ql-zd2gua-A5nLCNu-BiRTyGE2X9yniUHrFH2H7I4pm3dlflwYbb7h5Mv5blRoFFYNhtffxGq8D~uFqwKrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["R$199,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: "https://s3-alpha-sig.figma.com/img/7279/a025/2cde24e10a280f33f64c8c5062a91d84?Expires=1693180800&Signature=X3xJ44OoH1uFdPBtUt2j-df~~MukNj5oBKKlCFdV8fZ4NvVW3-Y6xXEqTeDhhhrlOHmvNEA6Q0bl98x7HuGa0gmIRzbHArm~gQ7xw02yGuc2TLFKQ5hmnMGCn6xu0z6mdbXjykyF9ngvmjiG3sG5S90XDglfoGle2y1Rrt6buR0wKeE8I9X7y85j7LGKW1JZg7vvYE5eIIsVrSPLlKKNTQyY4ZD5A-sdObgCMYeR-dOBRqsoN4y1WoPRdEwRrO4AJcf5PuNj0JpqFm1lLaB3-uhIR-B9lHw6crmvDvs~0OQ9CRkKuO5GvCvngoHYi8Xw1tYFZBcbu-3fey5IJ56TYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["179,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sandalia Salto Bloco Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/1c11/ce68/2d8e458e9d461e77b6ac6efcc17aed61?Expires=1693180800&Signature=pt6fJrd-1tcZXqJbeaPYafMi8e~60KX44JPYxxj13ZI66Gkw7YYgVg2LtdGl1Mtq~FF03n9OOYUCw13EuQyQ6LGi4~pCohO8FnGn8YRE2HA9NIdaiMQ1--6geUvD3A1b3UxS4JgAk9kc~yWjbMXTtuevPsfBPrj0LepV9mFlTb1IMJvH7mLj5DfkXh1QBy-Z3rPtcRM8n~XYZDQ02HrpQgRfuLPthodE2WpqSP42mlJTxdr7d9-Ykdidy4Ytg~8lY0TXILP4mpf1ERmimB8oTaU~7l1cAL2DTIMGbRGhIbjRAmHkFzF2h20nd1s6Du170Vyekql8JHJvjUQgudJAxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["189,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapato Scarpin Feminino Bebece",
    image: "https://s3-alpha-sig.figma.com/img/ce8a/4b68/dd5741e046dff4989c39bc1342a72657?Expires=1693180800&Signature=XtUkloBlvlDl6gbD5xTIR8N975qEPLoWL9OczM-qs3bQfFXiVfhrmf~tvHVwatiRT-jHCL0dP2rU7jHnnF2oxPmoX~dEB2xlkqK4oH~chkRbB5SF7EWZh8DTkKBDA5Q4hgdpHdB3G2NqlGNUSxtt7qqlFqIjrez62XjBvdaYpEgz7UbG~QkVhs0~OsMosPufzsqr3Es5cBFWTozk5c7iei2k5Mhx1~9pdTVl4dPjDger~0rU9OFsDxh5brPngjjHvz2Ql-zd2gua-A5nLCNu-BiRTyGE2X9yniUHrFH2H7I4pm3dlflwYbb7h5Mv5blRoFFYNhtffxGq8D~uFqwKrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tag: ["R$199,90", "6x de 49,83 sem juros"]
  },
  {
    name: "Sapatilha Saia E Blusa Feminino La grazzie",
    image: "https://s3-alpha-sig.figma.com/img/7279/a025/2cde24e10a280f33f64c8c5062a91d84?Expires=1693180800&Signature=X3xJ44OoH1uFdPBtUt2j-df~~MukNj5oBKKlCFdV8fZ4NvVW3-Y6xXEqTeDhhhrlOHmvNEA6Q0bl98x7HuGa0gmIRzbHArm~gQ7xw02yGuc2TLFKQ5hmnMGCn6xu0z6mdbXjykyF9ngvmjiG3sG5S90XDglfoGle2y1Rrt6buR0wKeE8I9X7y85j7LGKW1JZg7vvYE5eIIsVrSPLlKKNTQyY4ZD5A-sdObgCMYeR-dOBRqsoN4y1WoPRdEwRrO4AJcf5PuNj0JpqFm1lLaB3-uhIR-B9lHw6crmvDvs~0OQ9CRkKuO5GvCvngoHYi8Xw1tYFZBcbu-3fey5IJ56TYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
