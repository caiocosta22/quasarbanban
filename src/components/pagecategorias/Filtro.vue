<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["atualizarPage"]);

const props = defineProps({
  categories: {
    type: Object,
    default: () => {}
  },
  pickedCategorie: {
    type: Number,
    default: 0
  }
});

const categorieModel = ref([Number(props.pickedCategorie)]);
watch(() => categorieModel.value, val => {
  const ids = val.map(i => { return { id: i }; });
  emit("atualizarPage", ids);
});

</script>
<template lang="pug">
div.column.filtro(
)
  label.text-bold(style="font-size:1.5em;;") Categorias
  q-separator.q-mb-md(color="black")
  q-scroll-area(
    style="height: 200px; max-width: 300px;"
    visible
    :bar-style="{ backgroundColor: '#cacaca', width:'8px', opacity: 0.2, }"
    :thumb-style="{ backgroundColor: '#cacaca', width:'4px', opacity: 0.8,right: '2px' }"
    color="black"
  )
    div.column
      template(
        v-for="(categorie, index) in categories"
        :key="index"
      )
        q-checkbox(
          v-model="categorieModel"
          :val="categorie.id"
          :label="categorie.descricao"
          text-color="black"
          color="black"
          size="sm"
        )
</template>

<style scoped>
.filtro{
  display: flex;
  width: 14%;
  margin-right: 10px;
}
@media screen and (max-width: 1150px) {
  .filtro{
  display: flex;
  width: 25%;
}

}
</style>
