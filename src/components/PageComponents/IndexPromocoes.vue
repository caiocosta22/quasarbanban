<script setup>
</script>

<template lang="pug">
div(
  style="display:flex; flex-direction: row; justify-content:center; align-items: center; padding-bottom: 150px;" )
  div(class="child")
    img(src="../../assets/images/Promocoes1.png")
    img(src="../../assets/images/Promocoes2.png")
    img(src="../../assets/images/Promocoes3.png")
</template>

<style scoped>
img{
  vertical-align: bottom;
  height: 350px;
  width: 300px;
  padding: 10px
}
.child{
  max-width: 1270px;
  height: 200px;
  margin: auto;
  flex-wrap: nowrap;
  display: flex;
}
</style>
