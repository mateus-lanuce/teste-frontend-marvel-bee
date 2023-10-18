<script setup>
import Home from '@/components/icons/Home.vue';
import CardComponent from '../components/CardComponent.vue';

import { getCharacters } from '@/api/api';
import { ref } from 'vue';

const data = await getCharacters();

console.log(data);

const characters = ref(data.results);

console.log(characters)

</script>

<template>
  <main class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-4 p-2">
        <li class="breadcrumb-item active" aria-current="page">
          <div class="d-flex gap-2 align-items-center">
            <Home width="16" height="16"/>
            <span class="fw-normal">Characters</span>
          </div>
        </li>
      </ol>
    </nav>

    <div class="d-flex flex-wrap justify-content-between gap-4">
      <CardComponent 
        v-for="character in characters" 
        :key="character.id"
        :title="character.name"
        :thumbnail="character.thumbnail"
        :id="character.id"
      />
    </div>

  </main>
</template>
