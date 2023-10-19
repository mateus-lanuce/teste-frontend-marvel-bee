<script setup>
import Home from '@/components/icons/Home.vue';
import CardComponent from '../components/CardComponent.vue';

import { getCharacters, getCharacterByinitial } from '@/api/api';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { usePaginationStore } from '@/stores/pagination';
import PaginationComponent from '../components/PaginationComponent.vue';

const data = await getCharacters();
const router = useRouter();

const characters = ref(data.results);

const loading = ref(false);

//modificar os valores do store de paginacao
const paginationStore = usePaginationStore();

//watchEffect para observar as mudancas na pagina do store
watchEffect(async () => {
  //se a pagina mudar, entao atualiza a rota
  router.push({ query: { page: paginationStore.page } });

  //se a pagina mudar, entao atualiza os personagens
  const data = await getCharacters(paginationStore.offset);

  characters.value = data.results;
});

const searchCharacter = ref('');
const totalCharacter = ref();

//função para fazer a busca de personagens
const searchCharacters = async () => {
  loading.value = true;
  //se o input de busca nao estiver vazio
  if (searchCharacter.value !== '') {
    //entao faz a busca pelo nome do personagem
    const data = await getCharacterByinitial(searchCharacter.value);

    characters.value = data.results;
    totalCharacter.value = data.total;
  } else {
    //se o input de busca estiver vazio
    //entao faz a busca de todos os personagens
    const data = await getCharacters(paginationStore.offset);

    characters.value = data.results;
  }
  loading.value = false;
};

</script>

<template>
  <main v-if="!loading" class="container">

    <div>
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

      <!-- input para pesquisar personagens -->
      <div class="input-group mb-3">
        <input 
          type="text" 
          v-model="searchCharacter"
          class="form-control" 
          placeholder="Search for a character" 
          aria-label="Search for a character" 
          aria-describedby="button-addon2"
          >
        <button 
          class="btn btn-primary-red" 
          type="button" 
          id="button-addon2"
          @click="searchCharacters"
          >
          Search
        </button>
      </div>

    </div>

    <div class="d-flex flex-wrap justify-content-start gap-4">
      <CardComponent 
        v-for="character in characters" 
        :key="character.id"
        :title="character.name"
        :thumbnail="character.thumbnail"
        :id="character.id"
        class="mx-auto"
      />
    </div>

    <!-- paginacao -->
    <PaginationComponent 
      v-if="searchCharacter === ''"
      class="py-5"  
      :total="data.total" 
    />

  </main>

  <main v-else class="container">
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="spinner-border text-primary-red" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </main>

</template>
