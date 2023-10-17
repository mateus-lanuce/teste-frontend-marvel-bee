<script setup>

import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

</script>

<template>
  <div class="d-flex flex-column gap-3">
    <img src="../assets/images/image 3.svg" class="custom-img" alt="hero logo">

    <div>
      <h5>Spider Man</h5>
      <p v-if="description">PAGES: 112</p>
    </div>
  </div>
</template>

<style scoped>

  .custom-card {
    width: 12rem;
    height: 12rem;
  }

  .custom-img {
    width: 12rem;
    height: 12rem;
  }

  @media screen and (max-width: 768px) {
    .custom-img {
      width: 10rem;
      height: 10rem;
    }
  }

</style>

