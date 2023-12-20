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
    type: "loop",
    drag: "free",
    slidesPerView: 1,
    arrows: true,
    height: "500px",
    navigation: false,
    perPage: 4,
    pagination: false,
    wrapAround: true,
    gap: "10px",
    rewind: true,
    rewindSpeed: 1000,
    breakpoints: {
      1980: { height: "580px" },
      1880: { height: "550px" },
      1780: { height: "520px" },
      1680: { height: "490px" },
      1580: { height: "460px" },
      1480: { height: "440px" },
      1380: { height: "420px" },
      1280: { height: "400px" },
      1180: { height: "380px" },
      1080: { height: "350px" },
      980: { height: "340px" },
      880: { height: "320px" },
      780: { height: "470px", perPage: 2 },
      680: { height: "405px", perPage: 2 },
      580: { height: "335px", perPage: 2 },
      480: { height: "365px", perPage: 2 },
      440: { height: "325px", perPage: 2 },
      400: { height: "460px", perPage: 1 },
      350: { height: "420px", perPage: 1 }
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
      const bestSellers = data.filter(sellers => sellers.chave === "SESSAO_1");
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
                  SplideSlide(
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
                            :src = "produto.fotosServico[0].urlM"
                            spinner = "black"
                            style = "display: block; max-width: 100%; max-height: 100%;"
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
  display: block;
}
.produtofoto {
  height: 70%;
  display: flex;
}
.produtodetalhes {
  height: 30%;
  display: block;
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
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 5px;
  margin-bottom: 15px;
}
.valor {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-top: 0;
}
.parcelas {
  color: var(--Gray-2, #4F4F4F);
  font-size: 14px;
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
  display: inline-block;
}
}
@media screen and (max-width: 980px) {
  .produtofoto {
  height: 60%;
}
.produtodetalhes {
  height: 40%;
  display: inline-block;
}
}
@media screen and (max-width: 780px) {
  .produtofoto {
  height: 70%;
}
.produtodetalhes {
  height: 30%;
  display: block;
}
}
@media screen and (max-width: 480px) {
.produtofoto {
  height: 60%;
}
.produtodetalhes {
  height: 40%;
  display: inline-block;
}
.titulo {
  margin-bottom: 5px;
}
}
@media screen and (max-width: 400px) {
.produtofoto {
  height: 70%;
}
.produtodetalhes {
  height: 30%;
  display: inline-block;
}
}
</style>
