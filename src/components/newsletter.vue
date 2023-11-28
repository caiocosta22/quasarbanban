<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";

const $q = useQuasar();

const email = ref("");
const nome = ref("");

const envioemail = async () => {
  try {
    const response = await axios.post("https://elevar.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/ecommerce/newsLetterService/sav", {
      email: email.value
    });
    if (response.status === 200) {
      $q.notify({
        message: "Email enviado com sucesso!"
      });
    } else {
      $q.notify({
        message: "Erro no envio de email"
      });
    }
  } catch (error) {
    console.log(error);
    $q.notify({
      message: "Erro no envio de email"
    });
  }
};
</script>

<template lang="pug">
div.container
  div.interno
    div.texto
      p.titulo Cadastre seu e-mail
      span.secundario e
      span.negrito  fique por dentro
      span.secundario  de todas as nossas
      span.negrito  ofertas
      span.secundario  e
      span.negrito  novidades
      span.secundario  exclusivas
    q-input.input(
      standout
      v-model="nome"
      label="Digite seu nome"
      bg-color="white"
      color="black"
      label-color="orange"
      outlined
    )
    q-input.input(
      standout
      v-model="email"
      label="Digite seu e-mail"
      bg-color="white"
      color="black"
      label-color="orange"
      outlined
      v-validate="'required|email'"
    )
    q-btn.botao.q-py-md(
      color="orange"
      label="Enviar"
      @click="envioemail"
    )
</template>

<style scoped>
* {
 font-family: Outfit;
}
.container {
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
  height: 170px;
  width: 100%;
  background-color: #000;
  margin-bottom: 15px;
}
.interno {
  width: 85%;
  margin: 0 auto;
  flex-direction: row;
  display: flex;
  align-items: center;
}
.texto {
  width: 30%;
  text-align: left;
}
.input {
  width: 25%;
  padding-left: 5px;
  padding-right: 20px;
}
.botao {
  width: 20%;
}

.titulo {
  color: #FFF;
  font-family: Outfit;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.secundario {
  color: #FFF;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
.negrito {
  color: #FFF;
  font-family: Outfit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
@media screen and (max-width: 1024px) {
.container {
  height: 322px;
}
.interno {
  flex-direction: column;
}
.texto {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
.input {
  width: 100%;
  padding: 0;
  margin-bottom: 10px;
}
.botao {
  width: 100%;
}
}
@media screen and (max-width: 768px) {
.titulo {
  color: #FFF;
  text-align: center;
  font-family: Outfit;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.secundario {
  color: #FFF;
  text-align: center;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
}
.negrito {
  color: #FFF;
  text-align: center;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
}
}
</style>
