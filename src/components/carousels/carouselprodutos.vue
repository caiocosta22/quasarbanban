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
    navigation: true,
    height: "250px",
    perPage: 4,
    pagination: true
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
      v-if="!itsLoading"
    )
      Splide(
        :options="options"
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
                v-for="subsec in item.  subsecoesEcommerce"
                :key="subsec"
              )
                template(
                  v-if="subsec.produtos"
                )
                  SplideSlide(
                    v-for="produto in subsec.produtos"
                    :key="produto"
                    class="foto"
                  )
                    div(
                      @click="openProductPage(produto)  "
                    )
                      template(
                        v-if="produto.fotosServico. length>=1"
                      )
                        q-img.cursor-pointer(
                          :src="produto.fotosServico  [0].foto"
                          spinner="white"
                        )
                      div.column
                        p.text-black(
                          style="font-size:16px"
                        ) {{ produto.titulo }}
                        template(
                          v-if="produto.promocao"
                        )
                          p.text-black(
                            style="font-size:   15px;       text-decoration:line-throu  gh; margin-bottom: 5px;"
                          ) {{  formatCurrency  (produto.valor) }}
                          p.text-bold(
                            style="font-size: 20px;   margin-bottom:0"
                          ) {{ formatCurrency (produto.    precoPromocional) }}
                          span.text-black(
                            style="font-size: 15px"
                          ) {{ produto.coligada.  numeroParcelas }} x de {{     formatCurrency(produto. valor /   produto. coligada.    numeroParcelas) }} sem juros
                        template(
                          v-if="!produto.promocao"
                        )
                          p.text-bold(
                            style="font-size: 20px;   margin-bottom: 0;"
                          )  {{ formatCurrency  (produto.valor) }}
                          p.text-black(
                            style="font-size: 15px"
                          ) {{ produto.coligada.  numeroParcelas }} x de {{     formatCurrency(produto. valor /   produto. coligada.    numeroParcelas) }} sem juros
</template>

<style scoped>s
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
.foto{
    padding-right: 5px;
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
