<script setup>
</script>

<template lang="pug">
div.q-py-lg
  .sessao.justify-center Você também pode gostar!
div.container
  div.interno
    q-skeleton.skeleprod(
      v-for="index in 4"
      :key="index"
    )
    q-skeleton.skelemini(
      v-for="index in 2"
      :key="index"
    )
</template>

<style scoped>
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
.skeleprod {
  width: 25%;
  margin-right: 10px;
  min-height: 400px;
}
@media screen and (max-width: 1024px) {
.skeleprod {
  min-height: 250px;
}
@media screen and (max-width: 768px) {
.skeleprod {
  min-height: 200px;
}
}
@media screen and (max-width: 480px) {
.skeleprod {
  display: none;
}
.skelemini {
  width: 50%;
  margin-right: 10px;
  min-height: 250px;
}
}
@media screen and (min-width: 480px) {
.skelemini {
  display: none;
}
}
}
</style>
