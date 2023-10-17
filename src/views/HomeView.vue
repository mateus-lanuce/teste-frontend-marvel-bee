<script setup>
import Home from '@/components/icons/Home.vue';
import LogoGray from '../components/icons/LogoGray.vue';

</script>

<template>
  <main class="container d-flex flex-column justify-content-center">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-4 p-2">
        <li class="breadcrumb-item active" aria-current="page">
          <div class="d-flex gap-2 align-items-center">
            <Home width="16" height="16"/>
            <span class="fw-normal">Home</span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- centralizar div no meio e no centro da tela -->
    <div class="flex-fill d-flex flex-column align-items-center justify-content-center gap-4">
      <LogoGray />
      <h1 class="text-center fw-bold">Welcome to Marvel's directory</h1>
    </div>


  </main>
</template>
