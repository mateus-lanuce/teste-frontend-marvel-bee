<script setup>
import ChevronLeft from '@/components/icons/ChevronLeft.vue';
import ChevronRight from '@/components/icons/ChevronRight.vue';
import { usePaginationStore } from '@/stores/pagination';
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

//modificar os valores do store de paginacao
const paginationStore = usePaginationStore();

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});

paginationStore.total = props.total;

//watchEffect para observar as mudancas na rota
watchEffect(() => {
  //se a rota mudar, entao atualiza o valor da pagina
  paginationStore.page = Number(route.query.page) || 1;
});

//funcao para ir para a proxima pagina
const nextPage = () => {
  //se a pagina atual for menor que o total de paginas
  if (paginationStore.page < paginationStore.totalPages) {
    //entao vai para a proxima pagina
    paginationStore.page++;
  }

  //volta para o topo da pagina
  window.scrollTo(0, 0);
};

//funcao para ir para a pagina anterior
const prevPage = () => {
  //se a pagina atual for maior que 1
  if (paginationStore.page > 1) {
    //entao vai para a pagina anterior
    paginationStore.page--;
  }

  //volta para o topo da pagina
  window.scrollTo(0, 0);
};

//funcao para ir para uma pagina especifica
const goToPage = (page) => {
  //se a pagina for maior que 0 e menor que o total de paginas
  if (page > 0 && page <= paginationStore.totalPages) {
    //entao vai para a pagina especifica
    paginationStore.page = page;
  }

  //volta para o topo da pagina
  window.scrollTo(0, 0);
};

/**
 * calcular o numero de paginas que serao exibidas
 * apenas 5 paginas serao exibidas por vez
 * caminhar para a esquerda ou para a direita
 * exibir as paginas de acordo com a pagina atual
 */
const calculatePages = computed(() => {
  //se a pagina atual for menor que 3
  if (paginationStore.page < 3) {
    //entao exibe as 5 primeiras paginas
    return [1, 2, 3, 4, 5];
  }

  //se a pagina atual for maior que o total de paginas - 2
  if (paginationStore.page > paginationStore.totalPages - 2) {
    //entao exibe as 5 ultimas paginas
    return [
      paginationStore.totalPages - 4,
      paginationStore.totalPages - 3,
      paginationStore.totalPages - 2,
      paginationStore.totalPages - 1,
      paginationStore.totalPages,
    ];
  }

  //se a pagina atual for maior que 2 e menor que o total de paginas - 1
  if (paginationStore.page > 2 && paginationStore.page < paginationStore.totalPages - 1) {
    //entao exibe as 5 paginas do meio
    return [
      paginationStore.page - 2,
      paginationStore.page - 1,
      paginationStore.page,
      paginationStore.page + 1,
      paginationStore.page + 2,
    ];
  }

  return [];
});

const isMobile = computed(() => {
  return window.innerWidth < 576;
});

</script>

<template>

  <div class="d-flex flex-column flex-md-row align-items-center justify-content-end gap-3">

    <button 
      class="btn btn-primary-red text-white"
      :class="{ 'w-100': isMobile }" 
      :disabled="paginationStore.page === 1"
      @click="prevPage"
    >
      <ChevronLeft width="16" height="16"/>
      Previous
    </button>

    <div v-if="isMobile" class="d-flex justify-content-between w-100">
      <button 
        v-for="page in calculatePages" 
        class="btn btn-primary-red text-white"
        :class="{ 'active-button': paginationStore.page === page }"
        :key="page"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button 
      v-else
      v-for="page in calculatePages" 
      class="btn btn-primary-red text-white"
      :class="{ 'active-button': paginationStore.page === page }"
      :key="page"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <button 
      class="btn btn-primary-red text-white" 
      :class="{ 'w-100': isMobile }"
      :disabled="paginationStore.page === paginationStore.totalPages"
      @click="nextPage"
    >
      Next
      <ChevronRight width="16" height="16"/>
    </button>


  </div>

</template>