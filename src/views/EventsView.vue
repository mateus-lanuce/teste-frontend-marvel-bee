<script setup>
import Home from '@/components/icons/Home.vue';
import HorizontalCardComponent from '@/components/HorizontalCardComponent.vue';

</script>

<template>
  <main class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-4 p-2">
        <li class="breadcrumb-item active" aria-current="page">
          <div class="d-flex gap-2 align-items-center">
            <Home width="16" height="16"/>
            <span class="fw-normal">Events</span>
          </div>
        </li>
      </ol>
    </nav>

    <div class="d-flex flex-wrap justify-content-between gap-4">
      <HorizontalCardComponent v-for="item in 10" :key="item" />
    </div>

  </main>
</template>
