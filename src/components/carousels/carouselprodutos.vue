<script setup>
import { ref, onBeforeMount } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { useRouter } from "vue-router";
import axios from "axios";
import "@splidejs/vue-splide/css";

const router = useRouter();
const itemsOfApi = ref([]);
const itsLoading = ref(true);
const options = ref(
  {
    direction: "ltr",
    slidesPerView: 4,
    arrows: true,
    height: "500px",
    navigation: true,
    perPage: 4,
    pagination: true,
    breakpoints: {
      1680: { height: "450px" },
      1580: { height: "430px" },
      1480: { height: "420px" },
      1380: { height: "400px" },
      1280: { height: "380px" }
    }
  }
);

function formatCurrency (value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  });
}

function openProductPage (product) {
  if (product.slug) {
    const url = "/produtos/" + product.slug;
    router.push(url);
  }
}

async function searchBestSellers () {
  try {
    const data = await axios.get("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/ecommerce/secaoEcommerceService/getAllSessions?plataforma=SITE").then(e => e.data);
    if (data.length) {
      const bestSellers = data.filter(sellers => sellers.chave === "SESSAO_3");
      itemsOfApi.value = bestSellers;
    }
  } catch (e) {
    console.error(e);
  }
}

onBeforeMount(async () => {
  itsLoading.value = true;
  await searchBestSellers();
  itsLoading.value = false;
});
</script>

<template lang="pug">
div.q-py-lg
  template(
      v-for="(item, index) in itemsOfApi"
      :key="index"
    )
      template(v-if="item.orientacao === 'horizontal'")
        template(
          v-if="item.subsecoesEcommerce"
        )
          template(
            v-for="subsec in item.subsecoesEcommerce"
            :key="subsec"
          )
            .sessao.justify-center {{ subsec.titulo }}
div.container
  div.interno
    template(
      v-if="itsLoading"
    )
      div.row(
        style="width: 100%; height: 230px;"
      )
        q-skeleton.col(
          type="square"
          width="100%"
          height="100%"
        )
    template(
      v-if = "!itsLoading"
    )
      div(
        style = "width:100%"
      )
        Splide(
          :options = "options"
        )
          template(
            v-for = "(item, index) in itemsOfApi"
            :key = "index"
          )
            template(
              v-if="item.subsecoesEcommerce"
            )
              template(
                v-for = "subsec in item.subsecoesEcommerce"
                :key = "subsec"
              )
                template(
                  v-if = "subsec.produtos"
                )
                  SplideSlide.foto(
                    v-for = "produto in subsec.produtos"
                    :key = "produto"
                  )
                    div.produto(
                      @click = "openProductPage(produto) "
                    )
                      template(
                        v-if = "produto.fotosServico.length>=1"
                      )
                        div.produtofoto
                          img.cursor-pointer(
                            :src = "produto.fotosServico[0].foto"
                            spinner = "black"
                            style = "display: block; max-width: 100%;"
                          )
                        div.produtodetalhes
                          p.titulo {{ produto.titulo }}
                          p.valor {{ formatCurrency(produto.valor) }}
                          p.parcelas {{ produto.coligada. numeroParcelas }} x de {{ formatCurrency(produto. valor / produto. coligada. numeroParcelas) }} sem juros

</template>

<style scoped>
.container{
  flex-direction: column;
  overflow: hidden;
  display: flex;
  width: 100%;
}
.interno{
  width: 85%;
  margin: 0 auto;
  flex-direction:row;
  display: flex;
  overflow: hidden
}
.produto {
  height: 100%;
  width: 100%;
}
.produtofoto {
  height: 80%;
}
.produtodetalhes {
  height: 20%;
}
.foto{
  padding-right: 5px;
}
.tag{
  color: #FFF;
  font-size: 12px;
  font-weight: 300;
  top:  10px;
  left: 10px;
  height: 10px;
  align-items: center;
  display: flex;
}
* {
  text-align: center;
  font-style: normal;
  color: var(--Cor-2, #000);
  font-family: Outfit;
  line-height: normal;
}
.titulo {
  color: var(--Gray-2, #4F4F4F);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  margin-top: 5px;
  margin-bottom: 15px;
}
.valor {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-top: 0;
}
.parcelas {
  color: var(--Gray-2, #4F4F4F);
  font-size: 15px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 10px;
}
@media screen and (max-width: 1400px) {
  .produtofoto {
    height: 70%;
  }
  .produtodetalhes {
    height: 30%;
  }
}
</style>
