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
  initialDate: {
    type: String,
    required: false,
  },
  finalDate: {
    type: String,
    required: false,
  },
});

const formatImageURL = computed(() => {
  return `${props.thumbnail.path}/standard_xlarge.${props.thumbnail.extension}`;
});

const formatDate = (date) => {
  const dateArray = date.split(" ")[0].split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  return `${day}/${month}/${year}`;
}

const formatedDate = computed(() => {
  if (!props.initialDate || !props.finalDate) {
    return "No date available";
  }
  return `${formatDate(props.initialDate)} - ${formatDate(props.finalDate)}`;
});

</script>

<template>
  <div class="d-flex flex-row gap-3">
    <img :src="formatImageURL" class="custom-img" alt="hero logo">

    <div class="d-flex flex-column text-uppercase">
      <h4 class="fw-bold">{{ title }}</h4>
      <p class="max-len-text text-overflow-clamp">
        {{ description }}
      </p>
      <p>
        <span class="fw-bold">Date of the event:</span> 
        {{ formatedDate }}
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

