<script setup>

import { computed, defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: Object,
    required: true,
  },
  id : {
    type: Number,
    required: true,
  },
  verticalImage: {
    type: Boolean,
    required: false,
    default: false,
  },
  isComic: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const formatImageURL = computed(() => {
  return `${props.thumbnail.path}/standard_xlarge.${props.thumbnail.extension}`;
});

const formatImageURLVertical = computed(() => {
  return `${props.thumbnail.path}/portrait_incredible.${props.thumbnail.extension}`;
});

</script>

<template>
  <div 
    class="d-flex flex-column max-width-card gap-3"
  >
    
    <img v-if="!verticalImage" :src="formatImageURL" class="custom-img" alt="hero logo">

    <img v-else :src="formatImageURLVertical" class="custom-img-vertical" alt="hero logo">

    <div>
      <RouterLink 
        v-if="!isComic"
        :to="{ name: 'character', params: { id: id } }" 
        class="fw-bold text-dark fs-5 text-wrap text-decoration-underline text-uppercase"
      >
        {{ title }}
      </RouterLink>

      <h5 
        v-else
        class="fw-bold text-dark fs-5 text-wrap text-break text-uppercase"
      >
        {{ title }}
    </h5>
      <p v-if="description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

  .custom-card {
    width: 12rem;
    height: 12rem;
  }

  .max-width-card {
    max-width: 12rem;
  }

  .custom-img {
    width: 12rem;
    height: 12rem;
  }

  .custom-img-vertical {
    width: 12rem;
    height: 19rem;
  }

  @media screen and (max-width: 768px) {
    .custom-img {
      width: 10rem;
      height: 10rem;
    }

    .custom-img-vertical {
      width: 10rem;
      height: 15rem;
    }

    .max-width-card {
      max-width: 10rem;
    }
  }

</style>

