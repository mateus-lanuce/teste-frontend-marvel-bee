<script setup>
import Home from '@/components/icons/Home.vue';
import CardComponent from '../components/CardComponent.vue';

import { getComics } from '@/api/api';

import { ref } from 'vue';

const data = await getComics();

const comics = ref(data.results);


</script>

<template>
  <main class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-4 p-2">
        <li class="breadcrumb-item active" aria-current="page">
          <div class="d-flex gap-2 align-items-center">
            <Home width="16" height="16"/>
            <span class="fw-normal">Comics</span>
          </div>
        </li>
      </ol>
    </nav>

    <div class="d-flex flex-wrap justify-content-between gap-4">
      <CardComponent 
        v-for="comic in comics" 
        :key="comic.id"
        :title="comic.title"
        :thumbnail="comic.thumbnail"
        :id="comic.id"
        :description="'PAGES: ' + comic.pageCount"
        vertical-image
        is-comic
      />
    </div>

  </main>
</template>
