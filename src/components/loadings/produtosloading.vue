<script setup>
</script>

<template lang="pug">
div.container
  div.interno
    div.miniaturas
      q-skeleton(
        v-for="index in 4"
        :key="index"
        style="min-height: 150px; max-height:220px; margin-bottom: 15px"
      )
    div.fotoprincipal
      q-skeleton(
        style="min-height: 650px; margin-left: 50px"
      )
    div.detalhes
      q-skeleton(
        v-for="index in 6"
        :key="index"
        style="margin-left:50px;padding-right:50px; margin-bottom:15px; min-height:70px"
      )
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
.miniaturas {
  display: flex;
  flex-direction: column;
  width: 10%;
}
.fotoprincipal {
  width: 50%;
}
.detalhes {
  width: 40%;
}
</style>
