<script setup>
import Home from '@/components/icons/Home.vue';
import HorizontalCardComponent from '@/components/HorizontalCardComponent.vue';

import { getEvents } from '@/api/api';

import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

import { usePaginationStore } from '@/stores/pagination';
import PaginationComponent from '../components/PaginationComponent.vue';

const router = useRouter();

//modificar os valores do store de paginacao
const paginationStore = usePaginationStore();

const data = await getEvents();

const events = ref(data.results);

//watchEffect para observar as mudancas na pagina do store
watchEffect(async () => {
  //se a pagina mudar, entao atualiza a rota
  router.push({ query: { page: paginationStore.page } });

  //se a pagina mudar, entao atualiza os personagens
  const data = await getEvents(paginationStore.offset);

  events.value = data.results;
});

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

    <div class="d-flex flex-column flex-lg-row flex-wrap justify-content-between gap-4">
      <HorizontalCardComponent 
        v-for="event in events" 
        :key="event.id"
        :title="event.title"
        :description="event.description"
        :thumbnail="event.thumbnail"
        :initialDate="event.start"
        :finalDate="event.end"
        :id="event.id"
      />
    </div>

    <!-- paginacao -->
    <PaginationComponent 
      class="py-5"  
      :total="data.total" 
    />

  </main>
</template>
