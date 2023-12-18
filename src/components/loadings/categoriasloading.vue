<script setup>
</script>

<template lang="pug">
div.container
  div.interno
    div.produtos
      q-skeleton.skeleprod(
        v-for="index in 20"
        :key="index"
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
  flex-direction: row;
  display: flex;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 50px;
}
.filtros {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 25%;
  margin-right: 40px;
}
.produtos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  width: 75%;
}
.skeleprod {
  min-height: 220px;
}
@media screen and (max-width: 1024px) {
  .produtos {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .skeleprod {
    min-height: 180px;
  }
}
@media screen and (max-width: 768px) {
  .skeleprod {
    min-height: 150px;
  }
}
@media screen and (max-width: 480px) {
  .produtos {
    grid-template-columns: 1fr 1fr;
    gap: 10px
  }
}
</style>
