<script setup>
</script>

<template lang="pug">
.rodape.row.justify-evenly.text-bold.q-pa-md(style="flex-wrap:nowrap; background-color:#F4F4F4;" )
  div.Institucional.column.cursor-pointer(style="width:264px")
    p.principal Institucional
    p.cursor-pointer.secundario(href="#") A empresa
    p.secundario Política de Entrega
    p.secundario Privacidade e Segurança
    p.secundario Trocas e devoluções
  div.MeusDados.column.cursor-pointer(style="width:264px")
    p.principal Minha conta
    p.secundario Meus pedidos
    p.secundario Meu carrinho
  div.Suporte.column.cursor-pointer(style="width:264px")
    p.principal Ajuda e Suporte
    p.secundario Política de Entrega
    p.secundario Trocas e Devoluções
  div.Contato.column.cursor-pointer(style="width:264px")
    p.principal Contato
    p.secundario sac@banbancalcados.com.br
    p.secundario SAC(85)99634-3864
    p.secundario Atendimento:<br>Segunda à sexta, de 9h as 17h.
  div.Redes.column(style="width:264px")
    p.principal Permaneça Conectado
    div.row.cursor-pointer
      a(
        target="_blank"
        href="https://www.instagram.com/banbancalcados/"
      )
        q-icon(
          size="md"
          name="fa-brands fa-square-facebook"
        )
      a(
        target="_blank"
        href="https://www.instagram.com/banbancalcados/"
      )
        q-icon.q-mx-lg(
          size="md"
          name="fa-brands fa-instagram"
        )
      a(
        target="_blank"
        href="#"
      )
        q-icon(
          size="md"
          name="fa-brands fa-whatsapp"
        )
.rodape2
  q-expansion-item.listas.text-bold(
    expand-separator
    label="Institucional"
  )
    q-card.listas
      q-card-section
        a(href="#") A empresa
      q-card-section
        a(href="#") Política de Entrega
      q-card-section
        a(href="#") Privacidade e Segurança
      q-card-section
        a(href="#") Trocas e Devoluções
  q-expansion-item.listas.text-bold(
    expand-separator
    label="Minha Conta"
  )
    q-card.listas
      q-card-section
        a(href="#") Perfil
      q-card-section
        a(href="#") Meus pedidos
      q-card-section
        a(href="#") Meu carrinho
  q-expansion-item.listas.text-bold(
    expand-separator
    label="Ajuda e suporte"
  )
    q-card.listas
      q-card-section
        a(href="#") Nosso chat
  q-expansion-item.listas.text-bold(
    expand-separator
    label="Contato"
  )
    q-card.listas
      q-card-section
        p sac@banbancalcados.com.br
      q-card-section
        p (85)99634-3864
      q-card-section
        p Atendimento: <br> Segunda à sexta, de 9h as 17h.
div.text-black.justify-center.text-center.text-bold.row(style="background-color:#F4F4F4")
  p BanBan Calçados -CNPJ: 10.947.389/0005-64 | Rua Barão do Rio Branco, 820- Fortaleza - Ceará | CEP 60025-060
</template>

<style scoped>
a{
  cursor: pointer;
  text-decoration: none;
}
*{
  color:black
}
.principal{
  font-size:22px
}
.secundario{
  font-size:20px
}
.listas{
  background-color:#F4F4F4 ;
  box-shadow:none
}
@media screen and (min-width: 1025px) {
  .rodape2{
    display:none;
    padding: 20px;
  }
}
@media screen and (max-width: 1025px) {
  .rodape{
    display:none;
    flex-direction: column;
  }
  .secundario{
    font-weight: bold;
    font-size: 18px;
  }
  .primario{
    font-weight: bolder;
    font-size: 20px;
  }
}
</style>
