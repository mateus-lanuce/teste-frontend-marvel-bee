<script setup>
import { ref, watchEffect } from 'vue';
import Home from '@/components/icons/Home.vue';

import { getCharacter, getComicsFromCharacter } from '@/api/api';

//pegar o id do personagem que está na rota
import { useRoute } from 'vue-router'
import CardComponent from '../components/CardComponent.vue';
let $route = useRoute()

const data = await getCharacter($route.params.id);

const character = ref(data.results);
const mainImg = ref()

//alterar os dados do personagem de acordo com o id da rota
watchEffect(async () => {
  const data = await getCharacter($route.params.id);
  character.value = data.results[0];
  console.log("🚀 ~ file: CharacterView.vue:20 ~ watchEffect ~ character:", character)
  mainImg.value = `${character.value.thumbnail.path}/standard_xlarge.${character.value.thumbnail.extension}`;
});

//pegar os comics pelo id do personagem
const comics = ref();

//alterar os dados dos comics de acordo com o id da rota
watchEffect(async () => {
  const data = await getComicsFromCharacter($route.params.id);
  comics.value = data.results;
  console.log("🚀 ~ file: CharacterView.vue:20 ~ watchEffect ~ comics:", comics)
});

</script>

<template>
  <main class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-4 p-2">
        <li class="breadcrumb-item active" aria-current="page">
          <div class="d-flex gap-2 align-items-center">
            <Home width="16" height="16"/>
            <RouterLink 
              :to="{ name: 'characters' }" 
              class="fw-normal text-decoration-none text-muted"
            >
              Characters
            </RouterLink>
          </div>
        </li>

        <li class="breadcrumb-item active" aria-current="page">
          <span class="fw-normal">{{ character.name }}</span>
        </li>

      </ol>
    </nav>

    <div class="container">

      <div class="row">

        <div class="col-12 col-lg-5 col-xl-4">
          <img :src="mainImg" class="main-img rounded" alt="hero logo">
        </div>

        <div class="col-12 col-lg-7 col-xl-8 py-3 py-lg-0">

          <div class="d-flex flex-column justify-content-evenly h-100">
            <div class="d-flex flex-column gap-3">
              <h1 class="text-uppercase">{{ character.name }}</h1>
  
              <p>{{ character.description ? character.description : 'Sem descrição cadastrada' }}</p>
            </div>
            
            <h1 class="text-uppercase mt-auto mb-4">Comics</h1>
          </div>
          
        </div>

        <div class="col-12 col-lg-7 col-xl-8 offset-lg-5 offset-xl-4">

          <div class="d-flex flex-wrap justify-content-between gap-4">
            <CardComponent 
              v-for="comic in comics" 
              :key="comic.id"
              :title="comic.title"
              :thumbnail="comic.thumbnail"
              :description="'PAGES: ' + comic.pageCount"
              :id="comic.id"
              vertical-image
            />
          </div>

        </div>

      </div>

    </div>

  </main>
</template>

<style scoped>

.main-img {
  width: 330px;
  height: 324px;
  background-size: cover;
}

@media screen and (max-width: 768px) {
  .main-img {
    width: 100%;
    height: 100%;
  }
}

</style>
