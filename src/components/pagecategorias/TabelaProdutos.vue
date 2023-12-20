<script setup>
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  items: {
    type: Object,
    default: () => {
      return {
        content: [
          {
            name: "Case para Iphone",
            image: "https://s3-alpha-sig.figma.com/img/c849/cc71/fda4a87fd5a01a082e7cd5a2a16b2c38?Expires=1693785600&Signature=omWKdVpVl7H9CxSUZJqrS7cVRtViDhLB1mV7y3Pofu1BQcpmZQIDtQXp~N4rNEFerK8hoZK50kOTgQNYQ-p~95ZlmcVyAHlE1SsDnNUbA9YsVJluOVFIyaV9-lcNX~gbzWLiPlv9IFhJ3RlfPZrFKuOqv9jKC6JDd~rDg7qUL98uA8-SvRIRknV41pLrMOdNRTYkQ~oVUmuCE-UHrxDaH04c9Fjx9q5XIlUo6h8KgtCwwEY6y09jZhuuY7h8Ibuqh6J3-hh9jOA1wuvSt6HDpwRsUkI0Zf~JR46D5I6Vj1yi1c7TxEV7C1P13o5tN4LwYYQycjWmceDqjT5seSAUaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            tag: ["De R$ 279,90", "Por 259,00", "Ou 10x de 25,90"],
            valor: 137,
            promocao: true
          },
          {
            name: "Case para Iphone",
            image: "https://s3-alpha-sig.figma.com/img/c849/cc71/fda4a87fd5a01a082e7cd5a2a16b2c38?Expires=1693785600&Signature=omWKdVpVl7H9CxSUZJqrS7cVRtViDhLB1mV7y3Pofu1BQcpmZQIDtQXp~N4rNEFerK8hoZK50kOTgQNYQ-p~95ZlmcVyAHlE1SsDnNUbA9YsVJluOVFIyaV9-lcNX~gbzWLiPlv9IFhJ3RlfPZrFKuOqv9jKC6JDd~rDg7qUL98uA8-SvRIRknV41pLrMOdNRTYkQ~oVUmuCE-UHrxDaH04c9Fjx9q5XIlUo6h8KgtCwwEY6y09jZhuuY7h8Ibuqh6J3-hh9jOA1wuvSt6HDpwRsUkI0Zf~JR46D5I6Vj1yi1c7TxEV7C1P13o5tN4LwYYQycjWmceDqjT5seSAUaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            tag: ["De R$ 279,90", "Por 259,00", "Ou 10x de 25,90"],
            valor: 137,
            promocao: false
          },
          {
            name: "Case para Iphone",
            image: "https://s3-alpha-sig.figma.com/img/c849/cc71/fda4a87fd5a01a082e7cd5a2a16b2c38?Expires=1693785600&Signature=omWKdVpVl7H9CxSUZJqrS7cVRtViDhLB1mV7y3Pofu1BQcpmZQIDtQXp~N4rNEFerK8hoZK50kOTgQNYQ-p~95ZlmcVyAHlE1SsDnNUbA9YsVJluOVFIyaV9-lcNX~gbzWLiPlv9IFhJ3RlfPZrFKuOqv9jKC6JDd~rDg7qUL98uA8-SvRIRknV41pLrMOdNRTYkQ~oVUmuCE-UHrxDaH04c9Fjx9q5XIlUo6h8KgtCwwEY6y09jZhuuY7h8Ibuqh6J3-hh9jOA1wuvSt6HDpwRsUkI0Zf~JR46D5I6Vj1yi1c7TxEV7C1P13o5tN4LwYYQycjWmceDqjT5seSAUaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            tag: ["De R$ 279,90", "Por 259,00", "Ou 10x de 25,90"],
            valor: 137
          },
          {
            name: "Case para Iphone",
            image: "https://s3-alpha-sig.figma.com/img/c849/cc71/fda4a87fd5a01a082e7cd5a2a16b2c38?Expires=1693785600&Signature=omWKdVpVl7H9CxSUZJqrS7cVRtViDhLB1mV7y3Pofu1BQcpmZQIDtQXp~N4rNEFerK8hoZK50kOTgQNYQ-p~95ZlmcVyAHlE1SsDnNUbA9YsVJluOVFIyaV9-lcNX~gbzWLiPlv9IFhJ3RlfPZrFKuOqv9jKC6JDd~rDg7qUL98uA8-SvRIRknV41pLrMOdNRTYkQ~oVUmuCE-UHrxDaH04c9Fjx9q5XIlUo6h8KgtCwwEY6y09jZhuuY7h8Ibuqh6J3-hh9jOA1wuvSt6HDpwRsUkI0Zf~JR46D5I6Vj1yi1c7TxEV7C1P13o5tN4LwYYQycjWmceDqjT5seSAUaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            tag: ["De R$ 279,90", "Por 259,00", "Ou 10x de 25,90"],
            valor: 137,
            promocao: true
          },
          {
            name: "Case para Iphone",
            image: "https://s3-alpha-sig.figma.com/img/c849/cc71/fda4a87fd5a01a082e7cd5a2a16b2c38?Expires=1693785600&Signature=omWKdVpVl7H9CxSUZJqrS7cVRtViDhLB1mV7y3Pofu1BQcpmZQIDtQXp~N4rNEFerK8hoZK50kOTgQNYQ-p~95ZlmcVyAHlE1SsDnNUbA9YsVJluOVFIyaV9-lcNX~gbzWLiPlv9IFhJ3RlfPZrFKuOqv9jKC6JDd~rDg7qUL98uA8-SvRIRknV41pLrMOdNRTYkQ~oVUmuCE-UHrxDaH04c9Fjx9q5XIlUo6h8KgtCwwEY6y09jZhuuY7h8Ibuqh6J3-hh9jOA1wuvSt6HDpwRsUkI0Zf~JR46D5I6Vj1yi1c7TxEV7C1P13o5tN4LwYYQycjWmceDqjT5seSAUaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            tag: ["De R$ 279,90", "Por 259,00", "Ou 10x de 25,90"],
            valor: 137,
            promocao: true
          },
          {
            name: "Case para Iphone",
            image: "https://s3-alpha-sig.figma.com/img/c849/cc71/fda4a87fd5a01a082e7cd5a2a16b2c38?Expires=1693785600&Signature=omWKdVpVl7H9CxSUZJqrS7cVRtViDhLB1mV7y3Pofu1BQcpmZQIDtQXp~N4rNEFerK8hoZK50kOTgQNYQ-p~95ZlmcVyAHlE1SsDnNUbA9YsVJluOVFIyaV9-lcNX~gbzWLiPlv9IFhJ3RlfPZrFKuOqv9jKC6JDd~rDg7qUL98uA8-SvRIRknV41pLrMOdNRTYkQ~oVUmuCE-UHrxDaH04c9Fjx9q5XIlUo6h8KgtCwwEY6y09jZhuuY7h8Ibuqh6J3-hh9jOA1wuvSt6HDpwRsUkI0Zf~JR46D5I6Vj1yi1c7TxEV7C1P13o5tN4LwYYQycjWmceDqjT5seSAUaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            tag: ["De R$ 279,90", "Por 259,00", "Ou 10x de 25,90"],
            valor: 137,
            promocao: true
          }
        ],
        totalRows: 12,
        currentPage: 1
      };
    }
  },
  loading: {
    type: Boolean,
    default: true
  },
  bannerUrlCategorie: {
    type: String,
    default: () => ""
  }
});

const page = ref(1);

const perPage = 12;

const seeingProductsBetween = computed(() => {
  const menorValorQuePossoVer = page.value === 1 ? "01" : ((page.value - 1) * 12) + 1;
  const maiorValorQuePossoVer = page.value === 1 ? "12" : (page.value * 12) > props.items.content.length ? props.items.content.length : (page.value * 12);
  return `${menorValorQuePossoVer}-${maiorValorQuePossoVer}`;
});

const data = Array.from(Array(24).keys()).map((item) => {
  return { index: item, value: `this_${item}` };
});

const paginatedData = computed(() =>
  props.items.content?.slice((page.value - 1) * perPage, page.value * perPage)
);

const nextPage = () => {
  if (page.value !== Math.ceil(data.length / perPage)) {
    page.value += 1;
  }
};

const backPage = () => {
  if (page.value !== 1) {
    page.value -= 1;
  }
};

const goToPage = (numPage) => {
  page.value = numPage;
};

function formatPercentage (value) {
  return value.toLocaleString("en-us", {
    maximumFractionDigits: 0
  });
}

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
console.log(props.items);
</script>

<template lang="pug">
div.container
  div.containertabela.q-pt-lg.q-pl-md
    div.grid.q-px-sm.q-mb-md
      template(
        v-for="item in paginatedData"
        :key="item.index"
      )
        div.containerproduto
          div.containerfoto
            q-img.cursor-pointer.foto(
              :src="item.image"
              @click="openProductPage(item)"
            )
              template(
                v-if="item.promocao"
              )
                div.tag {{ formatPercentage(item. precoPromocional / item.valor * 10) }}% OFF!
          div.containerdetalhes
            span.titulo.q-mb-sm {{ item.titulo }}
            template(
              v-if="item.promocao"
            )
              div.column(
                style="text-align: center"
              )
                span(
                  style="text-decoration:line-through; margin:0 "
                ) {{ formatCurrency(item.valor) }}
                span.valor {{  formatCurrency(item. precoPromocional) }}
                span {{ item.coligada.numeroParcelas }}x de {{    formatCurrency(item.precoPromocional / item.coligada.numeroParcelas) }}
            template(
              v-if="!item.promocao"
            )
              div.column(
                style="display:flex; text-align:center"
              )
                span.valor {{ formatCurrency(item.valor) }}
                span {{  item.coligada.numeroParcelas }}x de {{   formatCurrency(item.valor / item.coligada.   numeroParcelas) }}
    div.row.paginacao.q-px-sm
      p.produtos.q-mr-md(
        style="font-weight: 400; font-size:15px; font-family: Outfit; line-height: 20px; "
      ) Resultado {{ props.items.content.length }} produto(s) em {{ Math.ceil(props.items.content.length / perPage) }} página(s)
      div.row.q-gutter-sm.q-px-md
        q-btn(
          v-for="item in Math.ceil(props.items.content.length / perPage)"
          :key="item"
          @click="() => goToPage(item)"
          style="cursor:pointer; font-size: 13px; font-weight: 400;"
        ) {{ item }}
        q-btn(
          size="md"
        )
          span(
            style="font-size:13px; font-weight: 400; line-height: 20px; font-style: normal; text-transform: none;"
          ) Próximo
          q-icon.cursor-pointer(
            name="chevron_right"
            size="1.5em"
            style="width:16px; heigth:32px"
            @click="nextPage"
          )
</template>

<style scoped>
.containertabela {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  flex-direction: column;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px
}
.containerproduto {
  height: 100%;
  width: 100%;
  display: block;
  margin-bottom: 15px;
}
.containerfoto {
  height: 70%;
  display: flex;
  margin-bottom: 15px;
}
.containerdetalhes {
  height: 30%;
  display: block;
  text-align: center;
}
.foto {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
.paginacao {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
}
@media screen and (max-width: 1336px) {
  .grid{
    grid-template-columns: 1fr 1fr 1fr
  }
}
@media screen and (max-width: 1024px) {
  .grid{
    grid-template-columns: 1fr 1fr
  }
}
@media screen and (max-width: 768px) {
  .grid{
    grid-template-columns: 1fr 1fr
  }
}
.titulo {
  color: var(--Gray-2, #4F4F4F);
  text-align: center;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  text-transform: none;
}
.valor {
  color: var(--Cor-2, #000);
  text-align: center;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.parcela {
  color: var(--Gray-2, #4F4F4F);
  text-align: center;
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.tag{
  color: #000;
  background-color: #FBEA2B;
  font-family: Outfit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  top: 10px;
  left: 10px;
  height: 10px;
  align-items: center;
  display: flex;
}
</style>
