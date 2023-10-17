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
  <div class="d-flex flex-row gap-3">
    <img src="../assets/images/image 3.svg" class="custom-img" alt="hero logo">

    <div class="d-flex flex-column gap-3 text-uppercase">
      <h4 class="fw-bold">Spider Man</h4>
      <p class="max-len-text text-overflow-clamp">Loki sets about convincing the super-villains of Earth to attack heroes other than those they normally fight in an attempt to destroy the Avengers to absolve his guilt over inadvertently creating the team in the first place.</p>
      <p>
        <span class="fw-bold">Date of the event:</span> 
        22/10/2023
      </p>
    </div>
  </div>
</template>

<style scoped>

  .custom-card {
    width: 12rem;
    height: 12rem;
  }

  .custom-img {
    width: 14.5rem;
    height: 14.5rem;
  }

  .max-len-text {
    max-width: 377px;
  }

  .text-overflow-clamp {
      width: 100%;
      /* this code clamps based on specified lines */
      overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    display: -webkit-box;
  }

  @media screen and (max-width: 768px) {
    .custom-img {
      width: 10rem;
      height: 10rem;
    }
  }

</style>

