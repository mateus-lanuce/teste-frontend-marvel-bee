<script setup>
import Home from '@/components/icons/Home.vue';
import CardComponent from '../components/CardComponent.vue';

import { getComics, getComicByTitle } from '@/api/api';

import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { usePaginationStore } from '@/stores/pagination';
import PaginationComponent from '../components/PaginationComponent.vue';

const router = useRouter();
const data = await getComics();

const comics = ref(data.results);

//modificar os valores do store de paginacao
const paginationStore = usePaginationStore();

//watchEffect para observar as mudancas na pagina do store
watchEffect(async () => {
  //se a pagina mudar, entao atualiza a rota
  router.push({ query: { page: paginationStore.page } });

  //se a pagina mudar, entao atualiza os personagens
  const data = await getComics(paginationStore.offset);

  comics.value = data.results;
});

const searchComic = ref('');

//função para fazer a busca do comic pelo titulo
const searchComics = async () => {
  //se o input de busca nao estiver vazio
  if (searchComic.value !== '') {
    //entao faz a busca pelo titulo do comic
    const data = await getComicByTitle(searchComic.value);

    comics.value = data.results;
  } else {
    //se o input de busca estiver vazio
    //entao faz a busca de todos os comics
    const data = await getComics(paginationStore.offset);

    comics.value = data.results;
  }
};


</script>

<template>
  <main class="container">
    <div>
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

      <!-- input para pesquisar personagens -->
      <div class="input-group mb-3">
        <input 
          type="text" 
          class="form-control"
          placeholder="Search comics"
          aria-label="Search comics"
          aria-describedby="button-addon2"
          v-model="searchComic"
        />
        <button 
          class="btn btn-primary-red"
          type="button" 
          id="button-addon2"
          @click="searchComics"
        >
          Search
        </button>
      </div>
    </div>

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

    <!-- paginacao -->
    <PaginationComponent 
      v-if="searchComic === ''"
      class="py-5"  
      :total="data.total" 
    />

  </main>
</template>
