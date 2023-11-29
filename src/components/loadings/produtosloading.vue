<script setup>
</script>

<template lang="pug">
div.container
  div.interno
    div.miniaturas
      q-skeleton.skelemini(
        v-for="index in 4"
        :key="index"
      )
      q-skeleton.skelemob(
        v-for="index in 2"
        :key="index"
      )
    div.fotoprincipal
      q-skeleton.skeleprinc
    div.detalhes
      q-skeleton.skeledet(
        v-for="index in 6"
        :key="index"
      )
</template>

<style scoped>
.skelemini {
 min-height: 150px;
 max-height:220px;
 margin-bottom: 15px
}
.skeleprinc {
  min-height: 650px;
  margin-left: 50px
}
.skeledet {
  margin-left:50px;
  padding-right:50px;
  margin-bottom:15px;
  min-height:70px
}
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
@media screen and (max-width: 1024px) {
  .skelemini {
    display:none
  }
  .skelemob {
    min-height: 180px;
    max-height: 220px;
    margin-right: 15px;
    width: 50%
  }
  .skeleprinc {
    margin-left:0px;
    min-height: 460px
  }
  .skeledet {
    margin-left:0px
  }
  .interno {
    flex-direction: column;
    max-height: none;
    order:1
  }

  .miniaturas {
    width: 103%;
    margin-bottom: 15px;
    order:2;
    flex-direction: row;
  }
  .fotoprincipal {
    width: 100%;
    margin-left: none;
    padding-right: none;
    margin-bottom:15px
  }
  .detalhes {
    width: 100%;
    order:3
  }
}
</style>
