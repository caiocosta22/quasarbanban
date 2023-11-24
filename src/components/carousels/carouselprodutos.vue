<script setup>
import { ref, onBeforeMount } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { useRouter } from "vue-router";
import axios from "axios";
import "vue3-carousel/dist/carousel.css";

const router = useRouter();
const itemsOfApi = ref([]);
const settings = ref({
  wrapAround: true
});
const breakpoints = ref({
  368: {
    itemsToShow: 2.0,
    snapAlign: "start"
  },
  768: {
    itemsToShow: 2.0,
    snapAlign: "start"
  },
  1200: {
    itemsToShow: 4.0,
    snapAlign: "start"
  },
  1300: {
    itemsToShow: 4,
    snapAlign: "start"
  }
});

function formatCurrency (value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  });
}

function formatPercentage (value) {
  return value.toLocaleString("en-us", {
    maximumFractionDigits: 0
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
console.log(itemsOfApi);
onBeforeMount(async () => {
  await searchBestSellers();
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
  Carousel(
    v-bind="settings"
    :breakpoints="breakpoints"
    style="width: 85%; margin: 0 auto"
  )
    template(
      v-for="(item, index) in itemsOfApi"
      :key="index"
    )
      template(
        v-if="item.orientacao === 'horizontal'"
      )
        template(
          v-if="item.subsecoesEcommerce"
        )
          template(
            v-for="subsec in item.subsecoesEcommerce"
            :key="subsec"
          )
            template(
              v-if="subsec.produtos"
            )
              Slide(
                v-for="produto in subsec.produtos"
                :key="produto"
              )
                div.cursor-pointer.column.q-pl-sm.flex(
                  @click="openProductPage(produto)"
                  style="heigth: 100%; width: 250px"
                )
                  div(
                    style="height: 80%"
                  )
                    template(
                      v-if="produto.fotosServico.length>=1"
                    )
                      q-img.cursor-pointer(
                        :src="produto.fotosServico[0].foto"
                        spinner="white"
                        style="min-width: 200px; max-width: 250px; margin: 0 auto; height: 250px;"
                      )
                  div.q-pb-lg.column(
                    style="heigth: 20%"
                  )
                    p.text-black(
                      style="font-size:16px"
                    ) {{ produto.titulo }}
                    template(
                      v-if="produto.promocao"
                    )
                      p.text-black(
                        style="font-size: 15px;   text-decoration:line-through; margin-bottom: 5px;"
                      ) {{  formatCurrency(produto.valor) }}
                      p.text-bold(
                        style="font-size: 20px; margin-bottom:0"
                      ) {{ formatCurrency(produto.  precoPromocional) }}
                      span.text-black(
                        style="font-size: 15px"
                      ) {{ produto.coligada.numeroParcelas }} x de {{ formatCurrency(produto.valor /   produto.coligada.numeroParcelas) }} sem juros
                    template(
                      v-if="!produto.promocao"
                    )
                      p.text-bold(
                        style="font-size: 20px; margin-bottom: 0;"
                      )  {{ formatCurrency(produto.valor) }}
                      p.text-black(
                        style="font-size: 15px"
                      ) {{ produto.coligada.numeroParcelas }} x de {{ formatCurrency(produto.valor /   produto.coligada.numeroParcelas) }} sem juros
    template(#addons)
      Navigation
</template>

<style scoped>s

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
.carousel__slide p {
  height: 10%
}
.container{
  flex-direction: column;
  overflow: hidden;
  display: flex;
}
.tag{
  color: #FFF;
  font-family: Catamaran;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  top:10px;
  left: 10px;
  height: 10px;
  align-items: center;
  display: flex;
}

</style>
