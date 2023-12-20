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

const precos = ref([
  {
    valor: "R$0 a R$100,00",
    id: 1,
    check: false
  },
  {
    valor: "R$100,00 a R$200,00",
    id: 2,
    check: false
  },
  {
    valor: "R$200,00 a R$500,00",
    id: 3,
    check: false
  }
]);

const cores = ref([
  {
    id: 1,
    cor: "#FF0000",
    tamanho: 30
  },
  {
    id: 2,
    cor: "#000000",
    tamanho: 32
  },
  {
    id: 3,
    cor: "#6A5ACD",
    tamanho: 34
  },
  {
    id: 4,
    cor: "#87CEFA",
    tamanho: 36
  },
  {
    id: 5,
    cor: "#7FFFD4",
    tamanho: 38
  }
]);

const tamanhos = ref([
  {
    id: 1,
    tamanho: "30"
  },
  {
    id: 2,
    tamanho: "32"
  },
  {
    id: 3,
    tamanho: "34"
  },
  {
    id: 4,
    tamanho: "36"
  },
  {
    id: 5,
    tamanho: "38"
  },
  {
    id: 6,
    tamanho: "40"
  },
  {
    id: 7,
    tamanho: "42"
  },
  {
    id: 8,
    tamanho: "44"
  }
]);

const corAtiva = ref(null);

const tamanhoAtivo = ref(null);

const categorieModel = ref([Number(props.pickedCategorie)]);

watch(() => categorieModel.value, val => {
  const ids = val.map(i => { return { id: i }; });
  emit("atualizarPage", ids);
});

function selecionarCor (id) {
  corAtiva.value = id;
}

function selecionarTamanho (id) {
  tamanhoAtivo.value = id;
}

</script>
<template lang="pug">
div.column.filtro(
)
  label.text-bold(style="font-size:1.5em;;") Tamanhos
  q-separator.q-mb-md(color="black")
  div.row.q-gutter-md.q-py-sm(style="align-items:center")
    template(
      v-for="tamanho in tamanhos"
      :key="tamanho"
    )
      q-btn(
          style="color:rgba(0,0,0,0.2); padding: 6px 6px 6px 6px;cursor:pointer; box-shadow:none"
          unelevated
          :class="{ 'border-black': tamanhoAtivo === tamanho.id }"
          @click="selecionarTamanho(tamanho.id)"
          push
          square
        )
        p(style="margin:0; color:black") {{ tamanho.tamanho }}
  label.text-bold(style="font-size:1.5em;;") Cores
  q-separator.q-mb-md(color="black")
  div.row.q-gutter-md.q-py-sm(style="align-items:center")
    template(
        v-for="cor in cores"
        :key="cor"
      )
        q-btn(
          size="md"
          :style="{ backgroundColor: cor.cor }"
          unelevated
          :class="{ 'border-black': corAtiva === cor.id }"
          @click="selecionarCor(cor.id)"
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
  label.text-bold(
    style="font-size:1.5em;"
  ) Preço
  q-separator.q-mb-md(
    color="black"
  )
  q-scroll-area(
    style="height: 200px; max-width: 300px;"
    visible
    :bar-style="{ backgroundColor: '#cacaca', width:'8px', opacity: 0.2, }"
    :thumb-style="{ backgroundColor: '#cacaca', width:'4px', opacity: 0.8,right: '2px' }"
    color="black"
  )
    div.column
      template(
        v-for="preco in precos"
        :key="preco"
      )
        q-checkbox(
          v-model="preco.check"
          :val="preco.id"
          :label="preco.valor"
          text-color="black"
          color="black"
          size="sm"
        )
</template>

<style scoped>
.filtro {
  display: flex;
  width: 14%;
  margin-right: 10px;
}
.border-black {
  border: 3px solid #cacaca;
}
@media screen and (max-width: 1150px) {
  .filtro {
    display: flex;
    width: 25%;
  }
}
</style>
