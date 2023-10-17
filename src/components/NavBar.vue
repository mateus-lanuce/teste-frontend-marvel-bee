<script setup>
import LogoPrimary from '@/components/icons/LogoPrimary.vue';


//pegar a rota atual
import { RouterLink, useRoute } from 'vue-router'
let route = useRoute()
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
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse align-items-center justify-content-end gap-2rem navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex flex-column flex-lg-row align-items-center gap-2rem">
              <RouterLink 
                to="/" 
                class="text-white fs-5 text-decoration-none" 
                :class="{'border-bottom border-5 border-white p-3 py-4': route.path === '/'}"
              >
                HOME
              </RouterLink>

              <RouterLink 
                to="/characters" 
                class="text-white fs-5 text-decoration-none" 
                :class="{'border-bottom border-5 border-white p-3': route.path === '/characters'}"
              >
                CHARACTERS
              </RouterLink>

              <RouterLink 
                to="/comics" 
                class="text-white fs-5 text-decoration-none" 
                :class="{'border-bottom border-5 border-white p-3': route.path === '/comics'}"
              >
                COMICS
              </RouterLink>

              <!-- events -->
              <RouterLink 
                to="/events" 
                class="text-white fs-5 text-decoration-none" 
                :class="{'border-bottom border-5 border-white p-3': route.path === '/events'}"
              >
                EVENTS
              </RouterLink>

              <!-- contact -->
              <RouterLink 
                to="/contact" 
                class="text-white fs-5 text-decoration-none" 
                :class="{'border-bottom border-5 border-white p-3': route.path === '/contact'}"
              >
                CONTACT
              </RouterLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>