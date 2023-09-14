<script setup>
</script>

<template lang="pug">
div.row.justify-center.text-bold.q-pa-md(style="flex-wrap:nowrap")
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
div.text-black.justify-center.text-center.text-bold.row
  p BanBan Calçados -CNPJ: 10.947.389/0005-64 | Rua Barão do Rio Branco, 820- Fortaleza - Ceará | CEP 60025-060
</template>

<style scoped>
*{
  color:black
}
.principal{
  font-size:22px
}
.secundario{
  font-size:20px
}
</style>
