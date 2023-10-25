<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const infosLinks = ref({
  city: "Fortaleza",
  cnpj: "28463426000109",
  complement: "",
  district: "Meireles",
  email: "LOJAbanbancalcados@GMAIL.COM",
  id: 5,
  name: "MITA COMERCIO VAREJISTA DE ARTEFATOS DE COURO LTDA",
  nomeFantasia: "Mita Oficial",
  number: 705,
  phone: "85991742677",
  site: "https://banbancalcados.elevarloja.com.br não puxando da api",
  state: "CE",
  street: "Avenida Dom Luís não puxa da pi",
  zipcode: "60160230",
  socialNetwork: []
});
const iconsmockados = ref(true);
async function searchSocialMedia () {
  try {
    const infos = await axios.get("https://banbancalcados.elevarcommerceapi.com.br/HandoverMetasWS/webapi/handover/portal/empresaService/ecommerce/nomeTenant").then(e => e.data);
    infosLinks.value = infos;
  } catch (e) {
    console.error(e);
  }
}

function redirectToHTMLPage () {
  const url = "/trocas/";
  router.push(url);
}

function redirectToHTMLPage2 () {
  const url = "/politicas/";
  router.push(url);
}

onBeforeMount(async () => {
  await searchSocialMedia();
});

</script>

<template lang="pug">
div#fullscreen.container
  div.interno
    div.coluna
      p.principal Institucional
      p.secundario A empresa
      p.secundario Política de Entrega
      p.secundario Privacidade e Segurança
      p.secundario Trocas e Devoluções
    div.coluna
      p.principal Minha conta
      p.secundario Login
      p.secundario Meus pedidos
      p.secundario Meu carrinho
    div.coluna
      p.principal Contato
      p.secundario sac@banbancalcados.com.br
      p.secundario (85)99634-3864
      p.secundario Atendimento:<br>Segunda à sexta, de 9h as  17h.
    div.coluna
      p.principal Permaneça conectado
      div.row.q-gutter-sm
        template(
          v-if="iconsmockados"
        )
          a(
            target="_blank"
            href="https://www.instagram.com/banbancalcados/"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-instagram"
              color="orange"
            )
          a(
            target="_blank"
            href="https://www.facebook.com/banbancalcadosperfil/"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-facebook"
              color="orange"
            )
          a(
            target="_blank"
            href="https://www.youtube.com/user/banbancalcados"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-youtube"
              color="orange"
            )
          a(
            target="_blank"
            href="https://www.tiktok.com/@banbancalcadosof"
          )
            q-icon(
              size="md"
              name="fa-brands fa-tiktok"
              color="orange"
            )
        template(
          v-if="infosLinks.socialNetwork.facebook"
        )
          a(
            target="_blank"
            :href="infosLinks.socialNetwork.facebook"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-facebook"
            )
        template(
          v-if="infosLinks.socialNetwork.instagram"
        )
          a(
            target="_blank"
            :href="infosLinks.socialNetwork.instagram"
          )
            q-icon(
              size="md"
              name="fa-brands fa-instagram"
            )
        template(
          v-if="infosLinks.socialNetwork.linkedin"
        )
          a(
            target="_blank"
            :href="infosLinks.socialNetwork.linkedin"
          )
            q-icon(
              size="md"
              name="fa-brands fa-linkedin"
            )
        template(
          v-if="infosLinks.socialNetwork.twitter"
        )
          a(
            target="_blank"
            :href="infosLinks.socialNetwork.twitter"
          )
            q-icon(
              size="md"
              name="fa-brands fa-x-twitter"
            )
        template(
          v-if="infosLinks.socialNetwork.youtube"
        )
          a(
            target="_blank"
            :href="infosLinks.socialNetwork.youtube"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-youtube"
            )
div#mobile.container
  div.menu
    q-expansion-item(
      expand-separator
      label="Institucional"
      label-class="text-bold"
    )
      q-card
        q-card-section
          p.secundario A empresa
        q-card-section
          p.secundario Política de Entrega
        q-card-section
          p.secundario Privacidade e Segurança
          p.secundario Trocas e Devoluções
    q-expansion-item(
      expand-separator
      label="Minha Conta"
    )
      q-card
        q-card-section
          p.secundario(href="#") Perfil
        q-card-section
          p.secundario(href="#") Meus pedidos
        q-card-section
          p.secundario(href="#") Meu carrinho
    q-expansion-item(
      expand-separator
      label="Contato"
    )
      q-card
        q-card-section
          p.secundario sac@banbancalcados.com.br
        q-card-section
          p.secundario (85)99634-3864
        q-card-section
          p.secundario Atendimento:<br>Segunda à sexta, de 9h as  17h.
    div.coluna
      p.principal Permaneça conectado
      div.row.q-gutter-sm
        template(
          v-if="iconsmockados"
        )
          a(
            target="_blank"
            href="https://www.instagram.com/banbancalcados/"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-instagram"
              color="orange"
            )
          a(
            target="_blank"
            href="https://www.facebook.com/banbancalcadosperfil/"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-facebook"
              color="orange"
            )
          a(
            target="_blank"
            href="https://www.youtube.com/user/banbancalcados"
          )
            q-icon(
              size="md"
              name="fa-brands fa-square-youtube"
              color="orange"
            )
          a(
            target="_blank"
            href="https://www.tiktok.com/@banbancalcadosof"
          )
            q-icon(
              size="md"
              name="fa-brands fa-tiktok"
              color="orange"
            )
div.justify-center.text-center.row.q-pt-sm(style="color: #939598;text-align: center;font-family: Outfit;font-size: 13px;font-style: normal;font-weight: 400;line-height:20px;background-color:#F4F4F4")
  p BanBan Calçados.
  p(v-if="infosLinks.street") &nbsp; | {{ infosLinks.street }}
  p(v-if="infosLinks.number") , {{ infosLinks.number }}
  p(v-if="infosLinks.district") , {{ infosLinks.district }}
  p(v-if="infosLinks.city") , {{ infosLinks.city }}
  p(v-if="infosLinks.state") , {{ infosLinks.state }}
  p(v-if="infosLinks.zipcode") &nbsp; | CEP: &nbsp; {{ infosLinks.zipcode }}
  p(v-if="infosLinks.cnpj") &nbsp; | CNPJ: &nbsp; {{ infosLinks.cnpj }}
</template>

<style scoped>
.container {
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: #F4F4F4;
  padding-top: 10px;
}
.interno {
  width: 85%;
  margin: 0 auto;
  flex-direction: row;
  display: flex;
}
.coluna {
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: left;
}
.menu {
  width: 85%;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
}
.principal{
  color: #000;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.secundario{
  color: var(--Gray-1, #333);
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
}
@media screen and (max-width: 1024px) {
  #fullscreen {
    display: none;
  }
.coluna {
  width: 100%;
}
}
@media screen and (min-width: 1024px) {
  #mobile {
    display: none;
  }
}
</style>
