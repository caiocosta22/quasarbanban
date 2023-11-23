<script setup>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import axios from "axios";

const produtos = ref([
  {
    titulo: "Produto teste",
    coligadas: {
      numeroparcelas: 10
    },
    qtdEstoque: 5,
    miniaturas: [
      {
        foto: "/images/miniaturas/1.png"
      },
      {
        foto: "/images/miniaturas/2.png"
      },
      {
        foto: "/images/miniaturas/3.png"
      },
      {
        foto: "/images/miniaturas/4.png"
      }
    ],
    foto: "/images/sandalia.png",
    valor: 199,
    promocao: true,
    valorpromocao: 100,
    descricaobreve: "A sandália com salto alto tipo bloco e meia pata da Bebecê apresenta um estilo clássico e elegante.",
    descricaodetalhada: "A sandália com salto alto tipo bloco e meia pata da Bebecê apresenta um estilo clássico e elegante, além de proporcionar maior conforto e estabilidade a cada passo. Para o ajuste ficar ainda perfeito no pé, o modelo possui fechamento em fivela de metal, além de um detalhe em vinil transparente para dar um toque moderno ao visual do calçado. Perfeita para você arrasar nos looks! Nome: Sandália Bebecê Salto Grosso Feminina - Ref.: T8445-023 Gênero: Feminino Departamento BS: Calçados Indicado para: Dia a Dia Marca: Bebecê",
    variacoes: [
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
    ]
  }
]);

const options = ref(
  {
    direction: "ttb",
    slidesPerView: 1,
    arrows: false,
    navigation: false,
    height: "660px",
    perPage: 4,
    pagination: false,
    breakpoints: {
      1738: { perPage: 4, height: "600px" },
      1500: { perPage: 4, height: "500px" },
      1344: { perPage: 4, height: "460px" },
      1080: { perPage: 4, height: "420px" },
      1024: { perPage: 4, direction: "ltr", height: "180px" },
      768: { perPage: 4, direction: "ltr", height: "150px" },
      668: { perPage: 4, direction: "ltr", height: "130px" },
      568: { perPage: 4, direction: "ltr", height: "100px" },
      420: { perPage: 2, direction: "ltr", height: "150px" }
    }
  }
);

const cep = ref();
const dadosFrete = ref([]);
const usarSkeleton = ref(false);
const contador = ref(1);
const corAtiva = ref(null);
const tamanhoAtivo = ref(null);

function formatCurrency (value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
  });
}

function selecionarCor (id) {
  corAtiva.value = id;
}

function selecionarTamanho (id) {
  tamanhoAtivo.value = id;
}

function addQtd () {
  if (contador.value >= 1 && contador.value < produtos.value[0].qtdEstoque) {
    contador.value++;
  }
}

function rmvQtd () {
  if (contador.value > 1) {
    contador.value--;
  }
}

async function calcFrete () {
  try {
    if (cep.value.length > 7) {
      const dados = await axios.get(`https://viacep.com.br/ws/${cep.value}/json/`).then(e => e.data);
      await getFretes(dados);
    }
  } catch (e) {
    console.error("Erro ao calcular frete: ", e);
  }
}

async function getFretes (dados) {
  try {
    usarSkeleton.value = true;
    const json = {
      valorTotal: null,
      produtos: [
        {
          altura: 2,
          largura: 2,
          comprimento: 2,
          peso: 2,
          quantity: 1,
          price: 161.42,
          cepOrigem: "60425813",
          cepDestino: dados.cep
        }
      ],
      cliente: {
        uf: dados.uf,
        cidade: dados.localidade,
        tenant: process.env.TENANT
      }
    };
    dadosFrete.value = await axios.post("https://elevarcommerce.com.br/freteapi/frete/calcularFretePequenos", json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        "Content-Type": "application/json"
      }
    }).then(e => e.data);
    usarSkeleton.value = false;
  } catch (e) {
    console.error(e);
  }
}

</script>

<template lang="pug">
div.container
  div.interno
    div.miniaturas
      Splide(
        :options="options"
      )
        SplideSlide(
          v-for="miniatura in produtos[0].miniaturas"
          :key="miniatura"
          class="fotomob"
        )
          q-img.foto(
            :src="miniatura.foto"
          )
    div.principal
      template(
        v-if="produtos[0].foto"
      )
        div.fotoprincipal
          q-img(
            :src="produtos[0].foto"
          )
    div.detalhes
      div.conteudo.column
        p.titulo {{ produtos[0].titulo }}
        template(
          v-if="produtos[0].promocao"
        )
          p.antigo De: {{ formatCurrency(produtos[0].valor) }}
          p.novo Por: {{ formatCurrency(produtos[0].valorpromocao) }}
          p.parcela Ou 10x de {{ formatCurrency(produtos[0].valorpromocao / produtos[0].coligadas.numeroparcelas) }}
        template(
          v-if="!produtos[0].promocao"
        )
          p.novo Por: {{ formatCurrency(produtos[0].valor) }}
          p.parcela Ou 10x de {{ formatCurrency(produtos[0].valor / produtos[0].coligadas.numeroparcelas) }}
        p.descsimples {{  produtos[0].descricaobreve }}
        div.column(style="margin-bottom: 15px;")
          p.opcoes Escolha uma cor:
          div.row.q-gutter-md.q-py-sm(style="align-items:center")
            template(
              v-for="variacoes in produtos[0].variacoes"
              :key="variacoes"
            )
              q-btn(
                size="md"
                :style="{ backgroundColor: variacoes.cor }"
                unelevated
                :class="{ 'border-black': corAtiva === variacoes.id }"
                @click="selecionarCor(variacoes.id)"
              )
          p.opcoes Escolha um tamanho:
          div.row.q-gutter-md.q-py-sm(style="align-items:center")
            template(
              v-for="tamanhos in produtos[0].variacoes"
              :key="tamanhos"
            )
              q-btn(
                  style="color:rgba(0,0,0,0.2); padding: 6px 6px 6px 6px;cursor:pointer; box-shadow:none"
                  unelevated
                  :class="{ 'border-black': tamanhoAtivo === tamanhos.id }"
                  @click="selecionarTamanho(tamanhos.id)"
                  push
                  square
                )
                p(style="margin:0") {{ tamanhos.tamanho }}
        div.column(style="margin-bottom: 15px;")
          p.opcoes Quantidade:
          div.row.q-gutter-md(style="align-items:center; flex-wrap: nowrap;")
            div.row(style="width:30%;text-align: center; align-items: center; justify-content: space-between; padding: 20px 10px 20px 10px; border-style: solid; border-width: 1px; border-radius: 5px; border-color: rgba(0,0,0,0.4);")
              q-icon(
                name="fa-solid fa-minus"
                color="black"
                size="xs"
                style="cursor:pointer"
                @click="rmvQtd"
              )
              p(style="font-size:16px; text-align: center; margin: 0") {{ contador }}
              q-icon(
                name="fa-solid fa-plus"
                color="black"
                size="xs"
                style="cursor:pointer"
                @click="addQtd"
              )
            q-btn(
              color="black"
              style="width:70%; padding:20px 0px 20px 0px"
            )
              p(style="margin: 0; text-decoration: none; text-transform: none; color: white") Adicionar à sacola
        div.column
          p.opcoes Calcule o Frete:
          div.row.q-gutter-md(style="align-items: center; flex-wrap:nowrap;")
            q-icon.caminhao(
              name="fa-solid fa-truck"
              color="black"
              size="lg"
            )
            q-input.input(
              @update:model-value="calcFrete()"
              max-length="8"
              color="black"
              outlined
              placeholder="00000000"
              v-model="cep"
              debounce="100"
            )
            q-btn(
              color="black"
              size="lg"
              style="width:50%"
            )
              p(style="margin: 0; text-decoration: none; text-transform: none; color: white") Calcular
        div(
          v-if="!usarSkeleton && dadosFrete.length"
        )
          q-btn.q-my-sm(
            v-for="frete in dadosFrete"
            style="width: 100%; vertical-align: baseline;"
            :key="frete"
            outlined
          )
            p.q-ma-none {{ frete.name }}
            p.q-my-none.q-px-md receba em até {{ frete.prazoEntrega }} {{ frete.prazoEntrega === 1 ? "dia útil" : "dias úteis"  }}
            p.q-ma-none.text-bold {{ formatCurrency(frete.valor) }}
        div(
          v-if="usarSkeleton"
        )
          q-skeleton(
            v-for="index in 3"
            :key="index"
          )
div.column(style="width:85%; margin: 0 auto; margin-bottom: 10px; text-align:left")
  p.descricaotitulo(style="margin-bottom:5px") Descrição do Produto
  span.descricao {{ produtos[0].descricaodetalhada }}
</template>

<style scoped>
.container{
  margin-top: 20px;
  margin-bottom: 50px;
  flex-direction: column;
}

.interno{
  width: 85%;
  margin: 0 auto;
  flex-direction:row;
  max-height: 650px;
  display: flex;
  overflow:hidden
}
.miniaturas{
  width: 10%;
}
.principal {
  width: 50%;
}
.detalhes {
  width: 40%;
}

.border-black {
  border: 3px solid #cacaca;
}
.foto {
  max-width: 100%;
  display: block;
  cursor: pointer
}
.fotoprincipal {
  width: 95%;
  display: block;
  margin-left: 50px;
}
.conteudo {
  width: 100%;
  display: block;
  margin-left:50px ;
  padding-right:50px
}
.input {
  width: 40%
}
.caminhao {
  width: 10%;
}
.titulo {
  color: #333;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 5px;
}
.descsimples {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
}
.antigo {
  color: #AEAEAE;
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
  margin: 0
}
.novo {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 15px;
}
.parcela {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
}
.opcoes {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
}
.descricaotitulo {
  font-size: 30px;
  font-weight: 600;
}
.descricao {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
}
p {
  color: var(--Cor-2, #000);
  font-family: Outfit;
  font-style: normal;
  line-height: normal;
}
span {
  color: var(--Cor-2, #000);
  font-family: Outfit;
  font-style: normal;
  line-height: normal;
}
@media screen and (max-width: 1024px) {
  .interno {
    flex-direction: column;
    max-height: none;
  }

  .miniaturas {
    width: 101%;
    margin-bottom: 15px;
  }
  .principal {
    width: 100%;
  }
  .fotoprincipal {
    width: 100%;
    margin-left: 0px;
    padding-right: 0px;
    margin-bottom:15px
  }
  .conteudo{
    width: 100%;
    margin-left: 0px;
    padding-right: 0px;
  }
  .principal {
  width: 100%;
  }
  .detalhes {
  width: 100%;
  }
  .input {
    width: 45%
  }
  .caminhao {
    width: 8%;
  }
  .fotomob{
    padding-right: 5px;
  }
}
</style>
