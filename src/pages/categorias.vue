<script setup>
import { ref } from "vue";
import categoriasloading from "src/components/loadings/categoriasloading.vue";
const itsLoading = ref(true);
</script>

<template lang="pug">
q-page-container
  template(
    v-if="itsLoading"
  )
    categoriasloading
</template>

<style scoped>
</style>
