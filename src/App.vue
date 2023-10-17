<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';



</script>

<template>
  <div class="d-flex flex-column h-100">
    <NavBar />
  
    <RouterView class="flex-fill"/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/colors.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

html, body {
  font-family: 'Roboto', sans-serif;
}

.gap-2rem {
  gap: 2rem;
}
</style>
