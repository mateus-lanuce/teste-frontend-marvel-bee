<script setup>
import LogoPrimary from '@/components/icons/LogoPrimary.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue';
import { computed, ref } from 'vue';


//pegar a rota atual
import { RouterLink, useRoute } from 'vue-router'
let route = useRoute()

const openNavbar = ref(false);

const isMobile = ref(window.innerWidth < 992);

//modificar o valor do isMobile de acordo com o tamanho da tela
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 992;
});

const toggleNavbar = () => {
  openNavbar.value = !openNavbar.value;
}

//fechar o menu ao clicar em um link
const closeNavbar = () => {
  openNavbar.value = false;
}

</script>

<template>
  <header class="bg-primary-red text-white">
    <div class="container">
      <nav class="navbar navbar-expand-lg text-white p-lg-0 ">
        <div class="container-fluid">
          <RouterLink 
            to="/"
          >
            <LogoPrimary width="139" height="56"/>
          </RouterLink>
          <button 
            class="btn" 
            type="button"
            v-if="isMobile"
            @click="toggleNavbar" 
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <MenuIcon v-if="!openNavbar" width="48" height="48" />
            <CloseIcon v-else width="48" height="48" />
          </button>

          <Transition name="slide-down">
            <div 
              v-show="openNavbar"
              class="navbar-collapse collapse show py-3 py-lg-0 justify-content-lg-end justify-content-center flex-column flex-lg-row align-items-lg-center"
              id="navbarSupportedContent"
            >
              <div 
                class="d-flex flex-column flex-lg-row align-items-lg-center gap-2rem"
                :class="{ 'border-top border-top-1 border-dark': isMobile }"
              >
                <RouterLink 
                  to="/" 
                  @click="closeNavbar"
                  class="text-white fs-5 text-decoration-none mt-4 mt-lg-0" 
                  :class="{'border-bottom border-5 border-white p-3': route.name === 'home' && !isMobile}"
                >
                  HOME
                </RouterLink>
  
                <RouterLink 
                  to="/characters" 
                  @click="closeNavbar"
                  class="text-white fs-5 text-decoration-none" 
                  :class="{'border-bottom border-5 border-white p-3': (route.name === 'characters' || route.name === 'character') && !isMobile}"
                >
                  CHARACTERS
                </RouterLink>
  
                <RouterLink 
                  to="/comics" 
                  @click="closeNavbar"
                  class="text-white fs-5 text-decoration-none" 
                  :class="{'border-bottom border-5 border-white p-3': route.name === 'comics' && !isMobile}"
                >
                  COMICS
                </RouterLink>
  
                <RouterLink 
                  to="/events"
                  @click="closeNavbar" 
                  class="text-white fs-5 text-decoration-none" 
                  :class="{'border-bottom border-5 border-white p-3': route.name === 'events' && !isMobile}"
                >
                  EVENTS
                </RouterLink>
  
                <RouterLink 
                  to="/contact"
                  @click="closeNavbar" 
                  class="text-white fs-5 text-decoration-none" 
                  :class="{'border-bottom border-5 border-white p-3': route.path === '/contact' && !isMobile}"
                >
                  CONTACT
                </RouterLink>
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  .slide-down-enter-active {
    transition: all 0.3s ease;
  }
  .slide-down-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }

  .slide-down-leave-active {
    transition: all 0.3s ease;
  }

  .slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

</style>