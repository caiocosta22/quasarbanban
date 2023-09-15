<script setup>
import { ref } from "vue";
const showMenu = ref(false);
const showThisMenu = ref("+TODAS AS CATEGORIAS");
const categoriesBase = ref([
  {
    name: "+TODAS AS CATEGORIAS",
    children: [
      { name: "FEMININO", children: [] },
      { name: "MASCULINO", children: [] },
      { name: "INFANTIL", children: [] },
      { name: "COLEGIAL", children: [] },
      { name: "CHINELARIA", children: [] }
    ]
  },
  { name: "FEMININO", children: [] },
  { name: "MASCULINO", children: [] },
  { name: "INFANTIL", children: [] },
  { name: "COLEGIAL", children: [] },
  { name: "CHINELARIA", children: [] },
  { name: "ESPORTIVO", children: [] },
  { name: "ACESSÓRIOS", children: [] },
  { name: "MARCAS", children: [] }
]);
function openMenu (name) {
  showMenu.value = true;
  showThisMenu.value = name;
}
function closeMenu (name) {
  showMenu.value = false;
  showThisMenu.value = "";
}
//  async function searchProducts () {
//    try {
//      let data = [];
//      if (productTyped.value) {
//        // ? Aqui é o local para implementar uma lógica de loading (para criar um loading caso queira mostrar uma tabelinha para o cliente enquanto retorna os produtos)
//        // ? Recomendo utilizar uma ref e setar como true e no final da função setar como false (dica: utilizar o finally do try catch finally, pesquisar sobre!)
//        data = await axios.get(`/api/servicoService/filtroBuscaV2/${productTyped.value}/-1/1/false/-1`).then(e => e.data);
//      }
//      if (data.content && data.content.length) productsSearched.value = data.content;
//    } catch (e) {
//      // ? Caso queira mostrar um erro para o usuario utilizar o quasar notify ($q.notify)
//      // ? exemplo -> import { useQuasar } from "quasar"; const $q = useQuasar(); $q.notify() -> pesquisar sobre!
//      console.error(e);
//    }
//  }
</script>

<template lang="pug">
q-toolbar.q-pa-md.justify-evenly.nav(style="background-color:white;")
  template(
    v-for="categorie in categoriesBase"
    :key="categorie.name"
  )
    template(
      v-if="categorie.children?.length"
    )
      p.text-bold.cursor-pointer(
        unelevated
        @mouseover="openMenu(categorie.name)"
      ) {{ categorie.name }}
        template(
          v-if="categorie.name == showThisMenu"
        )
          q-menu.cursor-pointer(
            v-model="showMenu"
            @mouseleave="closeMenu(categorie.name)"
            style="width:200px;"
          )
            q-list.text-bold.q-pa-md.text-center(style="min-width: 100px")
              template(
                v-for="child in categorie.children"
                :key="child.name"
              )
                q-item
                  q-item-section {{ child.name }}
                q-separator
    template(
      v-else
    )
      p.text-bold {{ categorie.name }}
</template>
<style scoped>
a{
  cursor: pointer;
  font-weight: bold;
  color:black
}
p{
  color:black;
  font-size: 18px;
}
.menu{
  font-weight:bolder;
}
.oquebusca{
  transition: 1s;
}
@media screen and (max-width: 1025px) {
  .nav{
    display: none;
  }
}
</style>
